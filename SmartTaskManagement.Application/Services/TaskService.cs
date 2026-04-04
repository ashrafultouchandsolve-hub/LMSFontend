using SmartTaskManagement.Application.DTOs.TaskItems;
using SmartTaskManagement.Application.Interfaces.Repositories;
using SmartTaskManagement.Application.Interfaces.Tasks;
using SmartTaskManagement.Domain.Entities;
using TaskItemStatus = SmartTaskManagement.Domain.Enums.TaskStatus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Application.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public async Task<List<TaskResponseDto>> GetTasksAsync(Guid userId)
        {
            var tasks = await _taskRepository.GetAllByUserIdAsync(userId);

            return tasks.Select(t => new TaskResponseDto
            {
                Id = t.Id,
                Title = t.Title,
                Description = t.Description,
                DeadLine = t.DeadLine,
                Status = t.Status.ToString(),
                CreateAt = t.CreateAt,
                 IsOverdue = t.IsOverdue
            }).ToList();
        }

        public async Task<TaskResponseDto> CreateAsync(CreateTaskRequestDto request, Guid userId, string userName)
        {
            if (request.DeadLine < DateTime.UtcNow)
                throw new Exception("Deadline cannot be in the past.");

            var task = new TaskItem
            {
                Title = request.Title,
                Description = request.Description,
                DeadLine = request.DeadLine,
                Status = TaskItemStatus.Pending,
                CreatedByUserId = userId,
                CreatedBy = userName
            };

            await _taskRepository.AddAsync(task);

            return new TaskResponseDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                DeadLine = task.DeadLine,
                Status = task.Status.ToString(),
                CreateAt = task.CreateAt
            };
        }


        public async Task<TaskResponseDto> UpdateStatusAsync(Guid id, string status,Guid userid,string userName)
        {
            var task = await _taskRepository.GetByIdAsync(id);
            if (task is null || task.IsDeleted)
                throw new Exception("Task not found.");

            if (task.CreatedByUserId != userid)
                throw new Exception("You are not allowed to update this task.");

            if (!Enum.TryParse<TaskItemStatus>(status, true, out var newStatus))
                throw new Exception("Invalid status.");

            // Business Rule: Pending -> InProgress -> Completed
            if (task.Status == TaskItemStatus.Pending && newStatus != TaskItemStatus.InProgress)
                throw new Exception("Pending task can only move to InProgress.");

            if (task.Status == TaskItemStatus.InProgress && newStatus != TaskItemStatus.Completed)
                throw new Exception("InProgress task can only move to Completed.");

            if (task.Status == TaskItemStatus.Completed)
                throw new Exception("Completed task status cannot be changed.");

            task.Status = newStatus;
            task.UpdateAt = DateTime.UtcNow;
            task.UpdatedBy = userName;

            _taskRepository.Update(task);

            return new TaskResponseDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                DeadLine = task.DeadLine,
                Status = task.Status.ToString(),
                CreateAt = task.CreateAt
            };
        }

        public async Task<TaskResponseDto> UpdateAsync(Guid id, UpdateTaskRequestDto request, Guid userId, string userName)
        {
            var task = await _taskRepository.GetByIdAsync(id);
            if (task is null || task.IsDeleted)
                throw new Exception("Task not found.");

            if (task.CreatedByUserId != userId)
                throw new Exception("You are not allowed to update this task.");

            if (request.DeadLine < DateTime.UtcNow)
                throw new Exception("Deadline cannot be in the past.");

            task.Title = request.Title;
            task.Description = request.Description;
            task.DeadLine = request.DeadLine;
            task.UpdateAt = DateTime.UtcNow;
            task.UpdatedBy = userName;

            _taskRepository.Update(task);

            return new TaskResponseDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                DeadLine = task.DeadLine,
                Status = task.Status.ToString(),
                CreateAt = task.CreateAt
            };
        }

        public async Task DeleteAsync(Guid id, Guid userId, string userName)
        {
            var task = await _taskRepository.GetByIdAsync(id);
            if (task is null || task.IsDeleted)
                throw new Exception("Task not found.");

            if (task.CreatedByUserId != userId)
                throw new Exception("You are not allowed to delete this task.");

            task.IsDeleted = true;
            task.DeletedAt = DateTime.UtcNow;
            task.UpdateAt = DateTime.UtcNow;
            task.UpdatedBy = userName;

            _taskRepository.Update(task);
        }
    }
}

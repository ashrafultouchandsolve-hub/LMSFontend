using SmartTaskManagement.Application.DTOs.TaskItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Application.Interfaces.Tasks
{
    public interface ITaskService
    {
        Task<List<TaskResponseDto>> GetTasksAsync();
        Task<TaskResponseDto> CreateAsync(CreateTaskRequestDto request,Guid userid,string userName);
        Task<TaskResponseDto> UpdateAsync(Guid id, UpdateTaskRequestDto request, Guid userId, string userName);
        Task DeleteAsync(Guid id, Guid userId, string userName);
    }
}

using SmartTaskManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Application.Interfaces.Repositories
{
    public interface ITaskRepository
    {
        Task<List<TaskItem>> GetAllByUserIdAsync(Guid userId);
        Task<TaskItem?> GetByIdAsync(Guid id);
        Task AddAsync(TaskItem item);
        void Update(TaskItem item);
    }
}

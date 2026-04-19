using Microsoft.EntityFrameworkCore;
using SmartTaskManagement.Application.Interfaces.Repositories;
using SmartTaskManagement.Domain.Entities;
using SmartTaskManagement.Infrastructure.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Infrastructure.Repositories
{
    public class TaskRepository :ITaskRepository
    {
        private readonly AppDbContext _context;
        public TaskRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<List<TaskItem>> GetAllByUserIdAsync(Guid userId)
        {
            return await _context.Tasks.Where(t => t.CreatedByUserId == userId).OrderByDescending(x=>x.CreateAt).ToListAsync();
        }
        public async Task<TaskItem?> GetByIdAsync(Guid id)
        {
            return await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id);
        }
        public async Task AddAsync(TaskItem item)
        {
            await _context.Tasks.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        public void Update(TaskItem item)
        {
            _context.Tasks.Update(item);
            _context.SaveChanges();
        }
    }
}

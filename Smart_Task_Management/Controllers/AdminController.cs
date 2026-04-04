using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartTaskManagement.Infrastructure.Persistence;

namespace Smart_Task_Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public AdminController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("summary")]
        public async Task<IActionResult> GetSummary()
        {
            var totalUsers = await _dbContext.Users.IgnoreQueryFilters().CountAsync();
            var totalTasks = await _dbContext.Tasks.IgnoreQueryFilters().CountAsync();
            var overdueTasks = await _dbContext.Tasks.IgnoreQueryFilters().CountAsync(x => x.IsOverdue && !x.IsDeleted);

            return Ok(new
            {
                totalUsers,
                totalTasks,
                overdueTasks
            });
        }
    }
}

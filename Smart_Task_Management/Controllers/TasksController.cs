using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartTaskManagement.Application.DTOs.TaskItems;
using SmartTaskManagement.Application.Interfaces.Tasks;
using System.Security.Claims;

namespace Smart_Task_Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TasksController : ControllerBase
    {
        private readonly ITaskService _taskService;
        public TasksController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var userId = GetUserId();
            var result = await _taskService.GetTasksAsync(userId);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTaskRequestDto request)
        {
            var userId = GetUserId();
            var userName = GetUserName();

            var result = await _taskService.CreateAsync(request, userId, userName);
            return Ok(result);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] UpdateTaskRequestDto request)
        {
            var userId = GetUserId();
            var userName = GetUserName();
            var result = await _taskService.UpdateAsync(id, request, userId, userName);
            return Ok(result);
        }
        [HttpPatch("{id:guid}/status")]
        public async Task<IActionResult> UpdateStatus(Guid id, [FromBody] UpdateTaskStatusRequestDto request)
        {
            var userid = GetUserId();
            var userName = GetUserName();
            var result = await _taskService.UpdateStatusAsync(id, request.Status, userid, userName);
            return Ok(result);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var userId = GetUserId();
            var userName = GetUserName();
            await _taskService.DeleteAsync(id, userId, userName);
            return Ok(new { message = "Task deleted successfully." });
        }

        private Guid GetUserId()
        {
            var sub = User.FindFirstValue(ClaimTypes.NameIdentifier)
                      ?? User.FindFirstValue("sub");

            return Guid.TryParse(sub, out var userId) ? userId : Guid.Empty;
        }

        private string GetUserName()
        {
            return User.FindFirstValue(ClaimTypes.Name) ?? "System";
        }
    }
}

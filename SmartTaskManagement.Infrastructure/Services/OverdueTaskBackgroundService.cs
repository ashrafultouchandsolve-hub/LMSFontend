using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SmartTaskManagement.Domain.Enums;
using SmartTaskManagement.Infrastructure.Persistence;
using TaskItemStatus = SmartTaskManagement.Domain.Enums.TaskStatus;

namespace SmartTaskManagement.Infrastructure.Services;

public class OverdueTaskBackgroundService : BackgroundService
{
    private readonly IServiceScopeFactory _scopeFactory;

    public OverdueTaskBackgroundService(IServiceScopeFactory scopeFactory)
    {
        _scopeFactory = scopeFactory;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            using var scope = _scopeFactory.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            var now = DateTime.UtcNow;

            var overdueTasks = await db.Tasks
                .Where(t => !t.IsDeleted &&
                            !t.IsOverdue &&
                            t.Status != TaskItemStatus.Completed &&
                            t.DeadLine < now)
                .ToListAsync(stoppingToken);

            foreach (var task in overdueTasks)
            {
                task.IsOverdue = true;
                task.UpdateAt = now;
                task.UpdatedBy = "BackgroundService";
            }

            if (overdueTasks.Count > 0)
                await db.SaveChangesAsync(stoppingToken);

            await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
        }
    }
}
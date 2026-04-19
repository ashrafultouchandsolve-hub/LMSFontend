using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SmartTaskManagement.Domain.Entities;
using SmartTaskManagement.Infrastructure.Persistence;

namespace SmartTaskManagement.Infrastructure.Services;

public static class AdminSeedService
{
    public static async Task SeedAdminAsync(IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        const string adminEmail = "admin@smarttask.com";

        var adminExists = await dbContext.Users.IgnoreQueryFilters().AnyAsync(x => x.Email == adminEmail);
        if (adminExists)
        {
            return;
        }

        var adminUser = new AppUser
        {
            FullName = "System Admin",
            Email = adminEmail,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword("Admin@123"),
            Role = "Admin",
            CreatedBy = "System"
        };

        await dbContext.Users.AddAsync(adminUser);
        await dbContext.SaveChangesAsync();
    }
}

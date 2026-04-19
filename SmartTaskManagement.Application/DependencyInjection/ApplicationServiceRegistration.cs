using Microsoft.Extensions.DependencyInjection;
using SmartTaskManagement.Application.Interfaces.Auth;
using SmartTaskManagement.Application.Services;
using SmartTaskManagement.Application.Interfaces.Tasks;

namespace SmartTaskManagement.Application.DependencyInjection
{
    public static class ApplicationServiceRegistration
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<ITaskService, TaskService>();
            return services;
        }
    }
}

using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using SmartTaskManagement.Application.Interfaces.Auth;
using SmartTaskManagement.Application.Interfaces.Repositories;
using SmartTaskManagement.Infrastructure.Persistence;
using SmartTaskManagement.Infrastructure.Repositories;
using SmartTaskManagement.Infrastructure.Security;
using SmartTaskManagement.Infrastructure.Services;

namespace SmartTaskManagement.Infrastructure.DependencyInjection
{
    public static class InfrastructureServiceRegistration
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(option =>
            option.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

            services.Configure<JwtSettings>(configuration.GetSection("JwtSettings"));

            var jwtSection = configuration.GetSection("JwtSettings");
            var key = jwtSection["Key"] ?? string.Empty;
            var issuer = jwtSection["Issuer"] ?? string.Empty;
            var audience = jwtSection["Audience"] ?? string.Empty;

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = issuer,
                    ValidAudience = audience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
                };
            });

            services.AddScoped<IJwtTokenService, JwtTokenService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ITaskRepository, TaskRepository>();
            services.AddHostedService<OverdueTaskBackgroundService>();

            return services;
        }
    }
}

using SmartTaskManagement.Infrastructure.DependencyInjection;
using SmartTaskManagement.Application.DependencyInjection;
using Microsoft.OpenApi.Models;
using Smart_Task_Management.Middleware;
using Microsoft.EntityFrameworkCore;
using SmartTaskManagement.Infrastructure.Persistence;
using SmartTaskManagement.Infrastructure.Services;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddInfrastructureServices(builder.Configuration);
builder.Services.AddApplicationServices();
builder.Services.AddAuthorization();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Smart Task Management API",
        Version = "v1"
    });

    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Bearer {token} লিখে token দাও"
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();

// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI();

//using var serviceScope = app.Services.CreateScope();
//using var dbContext = serviceScope.ServiceProvider.GetService<AppDbContext>();
//dbContext?.Database.Migrate();
//await AdminSeedService.SeedAdminAsync(serviceScope.ServiceProvider);
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

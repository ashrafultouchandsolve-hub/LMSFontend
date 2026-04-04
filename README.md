# Smart Task Management API

Smart Task Management API is built with ASP.NET Core (.NET 8) using Onion Architecture for clean separation, scalability, and maintainability.

## Architecture
- `SmartTaskManagement.Domain`
- `SmartTaskManagement.Application`
- `SmartTaskManagement.Infrastructure`
- `Smart_Task_Management` (API)

## Features
- User Registration & Login (JWT)
- Task CRUD
- Role claim-based authorization
- Soft Delete (`IsDeleted`)
- Task Status Flow: `Pending -> InProgress -> Completed`
- Deadline Validation
- Audit fields (`CreateAt`, `UpdateAt`, `CreatedBy`, `UpdatedBy`)
- Background Service to mark overdue tasks (`IsOverdue`)
- Swagger + Bearer token support
  
Default Admin Login
•	Email: admin@smarttask.com
•	Password: Admin@123
•	Role: Admin

## Business Rules
1. Soft delete only (hard delete না)
2. Deadline past হলে task create/update reject
3. Status flow strictly enforced:
   - Pending -> InProgress
   - InProgress -> Completed
   - Completed -> no further change
4. Overdue tasks are automatically marked by hosted background service

## Tech Stack
- ASP.NET Core Web API (.NET 8)
- Entity Framework Core
- SQL Server
- JWT Authentication
- Swagger (OpenAPI)

## NuGet Packages

### API (`Smart_Task_Management`)
- `Microsoft.AspNetCore.Authentication.JwtBearer` `8.0.0`
- `Microsoft.EntityFrameworkCore.Tools` `8.0.0`
- `Swashbuckle.AspNetCore` `6.4.0`

### Application (`SmartTaskManagement.Application`)
- `BCrypt.Net-Next` `4.1.0`
- `Microsoft.Extensions.DependencyInjection.Abstractions` `8.0.0`

### Infrastructure (`SmartTaskManagement.Infrastructure`)
- `Microsoft.AspNetCore.Authentication.JwtBearer` `8.0.0`
- `Microsoft.EntityFrameworkCore` `8.0.0`
- `Microsoft.EntityFrameworkCore.Design` `8.0.0`
- `Microsoft.EntityFrameworkCore.SqlServer` `8.0.0`
- `Microsoft.Extensions.Configuration.Abstractions` `8.0.0`
- `Microsoft.Extensions.DependencyInjection.Abstractions` `8.0.0`
- `Microsoft.IdentityModel.Tokens` `7.1.2`

### Domain (`SmartTaskManagement.Domain`)
- No external packages

## Prerequisites
- .NET 8 SDK
- SQL Server / SQL Server Express
- Visual Studio 2022 (recommended)

## Setup Instructions
1. Clone repository
2. Open solution in Visual Studio
3. Update connection string in `appsettings.json`
4. Apply migration / update database
5. Run API project (`Smart_Task_Management`)

## Database Configuration
`appsettings.json`:
"ConnectionStrings": { "DefaultConnection": "Server=.\SQLEXPRESS;Database=SmartTaskManagementDb;Trusted_Connection=True;TrustServerCertificate=True" }

## JWT Configuration
`appsettings.json`:
"JwtSettings": { "Key": "MySuperSecurityKey_ThisMustBeAtLeast32Chars_2026!", "Issuer": "SmartTaskManagementAPI", "Audience": "SmartTaskManagementClient", "ExpiryMinutes": 120 }

## Run
- Set `Smart_Task_Management` as startup project
- Run with IIS Express / Kestrel
- Swagger URL: `https://localhost:7144/swagger` (may vary by machine)

## Authentication Flow
1. `POST /api/Auth/register`
2. `POST /api/Auth/login`
3. Copy token
4. Swagger `Authorize` -> `Bearer <token>`

## Main Endpoints

### Auth
- `POST /api/Auth/register`
- `POST /api/Auth/login`

### Tasks (Authorized)
- `GET /api/Tasks`
- `POST /api/Tasks`
- `PUT /api/Tasks/{id}`
- `PATCH /api/Tasks/{id}/status`
- `DELETE /api/Tasks/{id}`

## Submission
- GitHub Repository: `<<ADD_LINK>>`
- Live URL (if deployed): `<<ADD_LINK>>`

## Author
- Ashraful Anam Alve

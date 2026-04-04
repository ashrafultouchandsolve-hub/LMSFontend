# Smart Task Management API

A Task Management REST API built with **ASP.NET Core (.NET 8)** using **Onion Architecture**.

## Architecture (Onion)
- `SmartTaskManagement.Domain` (Entities, Enums, Core Models)
- `SmartTaskManagement.Application` (DTOs, Interfaces, Services)
- `SmartTaskManagement.Infrastructure` (EF Core, Repositories, JWT, Background Service)
- `Smart_Task_Management` (API Layer / Controllers / Middleware)

## Features
- User Registration & Login (JWT Authentication)
- Task CRUD Operations
- Role claim in JWT
- Soft Delete (`IsDeleted`)
- Task Status Flow: `Pending -> InProgress -> Completed`
- Deadline Validation
- Audit Fields (`CreateAt`, `UpdateAt`, `CreatedBy`, `UpdatedBy`)
- Background Service: Auto mark overdue tasks (`IsOverdue = true`)
- Swagger UI with Bearer Token support

## Business Rules
1. Soft delete is applied for task delete.
2. Deadline cannot be in the past.
3. Status flow strictly follows:
   - `Pending -> InProgress`
   - `InProgress -> Completed`
   - `Completed` cannot be changed
4. Overdue task auto-updated by hosted background service.

## Tech Stack
- ASP.NET Core Web API (.NET 8)
- Entity Framework Core
- SQL Server
- JWT Bearer Authentication
- Swagger (OpenAPI)

## Prerequisites
- .NET 8 SDK
- SQL Server (SQLEXPRESS/local)
- Visual Studio 2022 (recommended)

## Setup Instructions

### 1) Clone Repository

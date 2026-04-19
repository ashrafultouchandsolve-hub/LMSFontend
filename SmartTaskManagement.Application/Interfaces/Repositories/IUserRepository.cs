using SmartTaskManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Application.Interfaces.Repositories
{
    public interface IUserRepository
    {
        Task<AppUser?> GetByEmailAsync(string email);
        Task AddAsync(AppUser user);
        Task<bool> ExistsByEmailAsync(string email);
    }
}

using SmartTaskManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Application.Interfaces.Auth
{
    public interface IJwtTokenService
    {
        string GenerateToken(AppUser user);
    }
}

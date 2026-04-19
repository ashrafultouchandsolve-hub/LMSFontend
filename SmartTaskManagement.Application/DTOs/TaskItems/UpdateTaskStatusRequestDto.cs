using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Application.DTOs.TaskItems
{
    public class UpdateTaskStatusRequestDto
    {
        public string Status { get; set; } = string.Empty;
    }
}

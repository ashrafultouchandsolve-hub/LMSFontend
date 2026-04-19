using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Application.DTOs.TaskItems
{
    public class TaskResponseDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime DeadLine { get; set; }
        public string Status { get; set; } = string.Empty;
        public DateTime CreateAt { get; set; }
        public bool IsOverdue { get; set; }
    }
}

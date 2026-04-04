using SmartTaskManagement.Domain.Common;
using TaskItemStatus = SmartTaskManagement.Domain.Enums.TaskStatus;



namespace SmartTaskManagement.Domain.Entities
{
    public class TaskItem: BaseEntity
    {
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime DeadLine { get; set; }
        public TaskItemStatus Status { get; set; } = TaskItemStatus.Pending;
        public Guid CreatedByUserId { get; set; }
        public AppUser? CreatedByUser { get; set; }
        public bool IsOverdue { get; set; } = false;

    }
}

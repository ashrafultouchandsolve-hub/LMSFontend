using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartTaskManagement.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddIsOverdueToTask : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsOverdue",
                table: "Tasks",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsOverdue",
                table: "Tasks");
        }
    }
}

using Microsoft.EntityFrameworkCore;
using SmartTaskManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTaskManagement.Infrastructure.Persistence
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<AppUser> Users => Set<AppUser>();
        public DbSet<TaskItem> Tasks => Set<TaskItem>();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<AppUser>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.FullName).IsRequired().HasMaxLength(150);
                entity.Property(x => x.Email).IsRequired().HasMaxLength(200);
                entity.Property(x => x.PasswordHash).IsRequired();
                entity.Property(x => x.Role).IsRequired().HasMaxLength(50);

                entity.HasIndex(x => x.Email).IsUnique();
                entity.HasQueryFilter(x => !x.IsDeleted);
            });

            modelBuilder.Entity<TaskItem>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Title).IsRequired().HasMaxLength(200);
                entity.Property(x => x.Description).HasMaxLength(2000);
                entity.Property(x => x.DeadLine).IsRequired();
                entity.Property(x => x.Status).IsRequired();

                entity.HasQueryFilter(x => !x.IsDeleted);

                entity.HasOne(x => x.CreatedByUser)
                      .WithMany()
                      .HasForeignKey(x => x.CreatedByUserId)
                      .OnDelete(DeleteBehavior.Restrict);
            });
        }
    }
}
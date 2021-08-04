using Microsoft.EntityFrameworkCore;

namespace Swift.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<UserAccount> Users { get; set; }
    }
}
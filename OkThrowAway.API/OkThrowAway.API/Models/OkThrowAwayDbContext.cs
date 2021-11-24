using Microsoft.EntityFrameworkCore;

namespace OkThrowAway.API.Models
{
    public class OkThrowAwayDbContext : DbContext
    {
        public OkThrowAwayDbContext(DbContextOptions<OkThrowAwayDbContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ShoppingList> ShoppingLists { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;

namespace OkThrowAway.API.Models
{
    public class OkThrowAwayDbContext : DbContext
    {
        public OkThrowAwayDbContext(DbContextOptions<OkThrowAwayDbContext> options)
            : base(options)
        {

        }   
        
        DbSet<User> Users { get; set; }
    }
}

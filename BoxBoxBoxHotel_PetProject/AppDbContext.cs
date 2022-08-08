using BoxBoxBoxHotel_PetProject.Models;
using Microsoft.EntityFrameworkCore;

namespace BoxBoxBoxHotel_PetProject
{
    public class AppDbContext : DbContext
    {
        public DbSet<City> Cities { get; set; } = null!;

        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {

        }

    }
}

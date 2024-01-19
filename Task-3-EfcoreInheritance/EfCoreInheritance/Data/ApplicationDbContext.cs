using Microsoft.EntityFrameworkCore;
public class ApplicationDbContext:DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
    {

    }
    public DbSet<Person> Person{get;set;}
    public DbSet<Student> Student{get;set;}
    public DbSet<Employee> Employee{get;set;}
     protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Using TPT mapping strategy with EF Core
            modelBuilder.Entity<Person>().UseTptMappingStrategy();

            base.OnModelCreating(modelBuilder);
        }
}
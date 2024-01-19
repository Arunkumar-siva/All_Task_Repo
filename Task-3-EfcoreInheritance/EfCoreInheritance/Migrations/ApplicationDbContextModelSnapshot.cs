﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EfCoreInheritance.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Person", b =>
                {
                    b.Property<string>("Aadhar")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Aadhar");

                    b.ToTable("Person");

                    b.UseTptMappingStrategy();
                });

            modelBuilder.Entity("Employee", b =>
                {
                    b.HasBaseType("Person");

                    b.Property<string>("EmployeeId")
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("Employee");
                });

            modelBuilder.Entity("Student", b =>
                {
                    b.HasBaseType("Person");

                    b.Property<string>("Rollno")
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("Employee", b =>
                {
                    b.HasOne("Person", null)
                        .WithOne()
                        .HasForeignKey("Employee", "Aadhar")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Student", b =>
                {
                    b.HasOne("Person", null)
                        .WithOne()
                        .HasForeignKey("Student", "Aadhar")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

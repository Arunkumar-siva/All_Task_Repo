using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EfCoreInheritance.Migrations
{
    /// <inheritdoc />
    public partial class migrate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Person",
                columns: table => new
                {
                    Aadhar = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person", x => x.Aadhar);
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    Aadhar = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    EmployeeId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.Aadhar);
                    table.ForeignKey(
                        name: "FK_Employee_Person_Aadhar",
                        column: x => x.Aadhar,
                        principalTable: "Person",
                        principalColumn: "Aadhar",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Student",
                columns: table => new
                {
                    Aadhar = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Rollno = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.Aadhar);
                    table.ForeignKey(
                        name: "FK_Student_Person_Aadhar",
                        column: x => x.Aadhar,
                        principalTable: "Person",
                        principalColumn: "Aadhar",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "Student");

            migrationBuilder.DropTable(
                name: "Person");
        }
    }
}

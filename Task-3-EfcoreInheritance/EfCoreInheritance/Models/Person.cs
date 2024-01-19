using System.ComponentModel.DataAnnotations;
public class Person
{
    [Key]
    public string? Aadhar{get;set;}
    public string? Name{get;set;}
    public string? Email{get;set;}
    
}
using System;
using System.ComponentModel.DataAnnotations;
namespace JwtAuth.Models;
public class UserData
{
   
    public string? Username{get;set;}
    public string? Password{get;set;}
}
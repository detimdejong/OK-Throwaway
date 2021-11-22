using OkThrowAway.API.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkThrowAway.API.Models
{
    public static class SeedData
    {
        public static void Seed(OkThrowAwayDbContext db)
        {
            string salt = SecurityHelper.GenerateSalt(70);
            db.Users.Add(new User { 
                Email = "email@email.com",
                UserName = "admin",
                Password = SecurityHelper.HashPassword("admin", salt, 100, 70),
                Salt = salt
            });

            db.SaveChanges();
        }
    }
}

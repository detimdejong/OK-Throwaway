using OkThrowAway.API.Helpers;

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

            db.Products.Add(new Product{
                Name = "Melk",
                Barcode = "123456789101"
            });

            db.SaveChanges();
        }
    }
}

using OkThrowAway.API.Helpers;
using System.Collections.Generic;

namespace OkThrowAway.API.Models
{
    public static class SeedData
    {
        public static void Seed(OkThrowAwayDbContext db)
        {
            string salt = SecurityHelper.GenerateSalt(70);
            var defaultUser = new User { 
                Email = "email@email.com",
                UserName = "admin",
                Password = SecurityHelper.HashPassword("admin", salt, 100, 70),
                Salt = salt
            };

            db.Users.Add(defaultUser);

            var products = new List<Product>()
            {
                new Product { Name = "A" },
                new Product { Name = "B" },
                new Product { Name = "C" },
                new Product { Name = "D" },
                new Product { Name = "E" },
                new Product { Name = "F" },
                new Product { Name = "G" },
                new Product { Name = "H" },
                new Product { Name = "I" },
            };
            db.AddRange(products);

            db.Lists.Add(new ShoppingList
            {
                Name = "Supermarkt",
                User = defaultUser,
                Products = products
            });

            db.Products.Add(new Product{
                Name = "Melk",
                Barcode = "123456789101"
            });

            db.SaveChanges();
        }
    }
}

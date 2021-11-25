using OkThrowAway.API.Helpers;
using System.Collections.Generic;
using System.Linq;

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
                Password = SecurityHelper.HashPassword("admin", salt),
                Salt = salt
            };
            db.Users.Add(defaultUser);

            var items = new[] { "Melk", "Boter", "Ham", "Kaas", "Bloemkool", "Brocoli", "Bami", "Rijst" };
            var products = new List<Product>(); 
            foreach (var item in items)
            {
                products.Add(new Product { Name = item });
            }
            db.Products.AddRange(products);

            db.ShoppingLists.Add(new ShoppingList
            {
                Name = "Supermarkt",
                User = defaultUser,
                Products = products.Select(p => new ProductInList { Amount = 1, Product = p }).ToList()
            });
            
            db.SaveChanges();
        }
    }
}

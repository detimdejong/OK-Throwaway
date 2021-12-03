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

            db.Products.Add(new Product { Name = "Citroen", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Desem pisto bruin", Category = "Brood" });
            db.Products.Add(new Product { Name = "Desem pisto wit", Category = "Brood" });
            db.Products.Add(new Product { Name = "Desem pisto meerz", Category = "Brood" });
            db.Products.Add(new Product { Name = "Desem pisto spelt", Category = "Brood" });
            db.Products.Add(new Product { Name = "Pistolet boulogne ", Category = "Brood" });
            db.Products.Add(new Product { Name = "Pistolet bruin", Category = "Brood" });
            db.Products.Add(new Product { Name = "Pistolet wit", Category = "Brood" });
            db.Products.Add(new Product { Name = "Ka�serbroodje natural ", Category = "Brood" });
            db.Products.Add(new Product { Name = "Triangel meergranen", Category = "Brood" });
            db.Products.Add(new Product { Name = "Italiaanse bol", Category = "Brood" });
            db.Products.Add(new Product { Name = "Luxe roomboter croissant ", Category = "Brood" });
            db.Products.Add(new Product { Name = "Meerzaden croissant ", Category = "Brood" });
            db.Products.Add(new Product { Name = "Rustiekbroodje meergranen", Category = "Brood" });
            db.Products.Add(new Product { Name = "Tijgerbol ", Category = "Brood" });
            db.Products.Add(new Product { Name = "Triomphe broodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "Volkorenbol", Category = "Brood" });
            db.Products.Add(new Product { Name = "L&P Rogge", Category = "Brood" });
            db.Products.Add(new Product { Name = "L&P Volkoren ", Category = "Brood" });
            db.Products.Add(new Product { Name = "L&P Spelt", Category = "Brood" });
            db.Products.Add(new Product { Name = "L&P Meerzaden", Category = "Brood" });
            db.Products.Add(new Product { Name = "Chocoladebroodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "Maple pecanvlechtbr", Category = "Brood" });
            db.Products.Add(new Product { Name = "Koffiebroodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "Roomboter appelflap ", Category = "Brood" });
            db.Products.Add(new Product { Name = "Kaneelbroodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "Frikandelbroodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "Saucijzenbroodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "Brabants worstenbroodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "Gehaktbal in satesaus", Category = "Brood" });
            db.Products.Add(new Product { Name = "kaasstengel", Category = "Brood" });
            db.Products.Add(new Product { Name = "Focaccia mozarella", Category = "Brood" });
            db.Products.Add(new Product { Name = "Focaccia gegrilde groenten", Category = "Brood" });
            db.Products.Add(new Product { Name = "Focaccia pepperbril", Category = "Brood" });
            db.Products.Add(new Product { Name = "Focaccia mozz tomaat", Category = "Brood" });
            db.Products.Add(new Product { Name = "Kip paprika broodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "AH Kaas-uienbroodje", Category = "Brood" });
            db.Products.Add(new Product { Name = "Limoen", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Mango", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Ananas", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Galia meloen", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Grapefruit rood", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Mandarijnen ", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Mini Watermeloen", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Perssinaasappelen net 2 kg", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Perssinaasappelen per stuk", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Lychees", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Granaatappel", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Bio Banaan", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Pluot pruimen", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Kaki fruit", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Chiquita bananen ", Category = "Fruit" });
            db.Products.Add(new Product { Name = "Komkommer", Category = "Groente" });
            db.Products.Add(new Product { Name = "Courgette", Category = "Groente" });
            db.Products.Add(new Product { Name = "Avocado", Category = "Groente" });
            db.Products.Add(new Product { Name = "Paprika rood", Category = "Groente" });
            db.Products.Add(new Product { Name = "Prei", Category = "Groente" });
            db.Products.Add(new Product { Name = "Rode peper", Category = "Groente" });
            db.Products.Add(new Product { Name = "Aubergine ", Category = "Groente" });
            db.Products.Add(new Product { Name = "Bloemkool", Category = "Groente" });
            db.Products.Add(new Product { Name = "Bospeen", Category = "Groente" });
            db.Products.Add(new Product { Name = "Venkel", Category = "Groente" });
            db.Products.Add(new Product { Name = "Radijs ", Category = "Groente" });
            db.Products.Add(new Product { Name = "Knolselderij", Category = "Groente" });
            db.Products.Add(new Product { Name = "Bosui per bos", Category = "Groente" });
            db.Products.Add(new Product { Name = "Spitskool", Category = "Groente" });
            db.Products.Add(new Product { Name = "Paprika groen", Category = "Groente" });
            db.Products.Add(new Product { Name = "Paprika oranje", Category = "Groente" });
            db.Products.Add(new Product { Name = "Paprika geel ", Category = "Groente" });
            db.Products.Add(new Product { Name = "Kropsla", Category = "Groente" });
            db.Products.Add(new Product { Name = "Ijsbergsla", Category = "Groente" });
            db.Products.Add(new Product { Name = "Bleekselderij", Category = "Groente" });
            db.Products.Add(new Product { Name = "Jalapeno peper groen per stuk", Category = "Groente" });
            db.Products.Add(new Product { Name = "Tricolor kluitsla ", Category = "Groente" });
            db.Products.Add(new Product { Name = "AH bio knoflook groot", Category = "Groente" });
            db.Products.Add(new Product { Name = "Biologische komkommer", Category = "Groente" });
            db.Products.Add(new Product { Name = "chinese kool", Category = "Groente" });
            db.Products.Add(new Product { Name = "Tomaten", Category = "Groente" });

            db.ShoppingLists.Add(new ShoppingList
            {
                Name = "Supermarkt",
                User = defaultUser,
                Products = db.Products.Select(p => new ProductInList { Amount = 1, Product = p }).ToList()
            });
            
            db.SaveChanges();
        }
    }
}

using System.Collections.Generic;

namespace OkThrowAway.API.Models
{
    public class ShoppingList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public User User { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}

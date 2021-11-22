using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkThrowAway.API.Models
{
    public class ShoppingList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public User User { get; set; }
        public List<Product> Products { get; set; }
    }
}

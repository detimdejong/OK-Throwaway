using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Models;


namespace OkThrowAway.API.Controllers.shoppinglists
{
    [ApiController]
    public class DeleteProduct : Controller
    {
        private readonly OkThrowAwayDbContext db;

        public DeleteProduct(OkThrowAwayDbContext db)
        {
            this.db = db;
        }

        [HttpPost("/api/shoppinglist/removeproduct/")]
        public async Task<ActionResult> Delete(ViewModelDeleteProductFromList model)
        {
            var list = await db.ShoppingLists.Include(l => l.Products).FirstOrDefaultAsync(l => l.Id == model.ListId);

            if (list == null)
                return BadRequest($"List {model.ListId} not found");

            var product = list.Products.FirstOrDefault(p => p.Id == model.ProductId);

            if (product == null)
                return BadRequest($"Product {model.ProductId} not on list {list.Id}");


            if (model.RemoveAll == true || product.Amount == 1)
                list.Products.Remove(product);
            else
                product.Amount -= 1;

            db.SaveChanges();

            return Ok($"Deleted product {model.ProductId} from {model.ListId}");
        }
    }

    public class ViewModelDeleteProductFromList
    {
        public int ListId { get; set; }
        public int ProductId { get; set; }
        public bool RemoveAll { get; set; } = false;
    }

}

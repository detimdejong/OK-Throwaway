using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Models;

namespace OkThrowAway.API.Controllers.shoppinglists
{
    [ApiController]
    public class DeleteList: Controller
    {
        private readonly OkThrowAwayDbContext db;

        public DeleteList(OkThrowAwayDbContext db)
        {
            this.db = db;
        }

        [HttpGet("/api/shoppinglist/delete/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var listToDelete = await db.ShoppingLists.Include(l => l.Products).FirstOrDefaultAsync(l => l.Id == id);

            if (listToDelete == null)
                return BadRequest($"List {id} does not exist");

            db.ProductsInLists.RemoveRange(listToDelete.Products);
            db.ShoppingLists.Remove(listToDelete);

            db.SaveChanges();

            return Ok($"Deleted list {listToDelete.Id} {listToDelete.Name}");
        }
    }
}

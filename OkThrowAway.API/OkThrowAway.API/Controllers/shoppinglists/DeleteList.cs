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

        public async Task<ActionResult<ShoppingList>> List(ViewModelDelete list)
        [HttpDelete("/api/shoppinglist/delete/{id}")]
        {
            var listToDelete = await db.ShoppingLists.FirstOrDefaultAsync(l => l.Id == list.ListId);

            if (listToDelete == null)
                return BadRequest($"List {list.ListId} does not exist");

            db.ShoppingLists.Remove(listToDelete);

            db.SaveChanges();

            return Ok($"Deleted list {listToDelete.Id} {listToDelete.Name}");
        }
    }
    public class ViewModelDelete
    {
        public int ListId { get; set; }
        
    }
}

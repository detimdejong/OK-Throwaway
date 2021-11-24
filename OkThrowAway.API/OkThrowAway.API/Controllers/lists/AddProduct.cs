using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Models;

namespace OkThrowAway.API.Controllers.lists
{
    [ApiController]
    public class AddProduct : Controller
    {
        private readonly OkThrowAwayDbContext db;
        private readonly IMapper mapper;

        public AddProduct(OkThrowAwayDbContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        [HttpPost("/api/lists/addproduct")]
        public async Task<ActionResult<ShoppingList>> PostAdditionItem(ViewModelAddition addition)
        {
            var list = await db.Lists
                                .Include(x => x.User)
                                .Include(x => x.Products)
                                .FirstOrDefaultAsync(x => x.Id == addition.ListId);

            if (list == null)
                return BadRequest("List not found");

            var product = await db.Products.FirstOrDefaultAsync(x => x.Id == addition.ProductId);

            if (product == null)
                return BadRequest("Product not found");

            list.Products.Append(product);

            await db.SaveChangesAsync();

            var lists = db.Lists.Include(l => l.User).Include(l => l.Products).ToList();

            return Ok($"Added item {product.Name}to list {list.Id}");
        }
    }

    public class ViewModelAddition
    {
        public int ListId { get; set; }
        public int ProductId { get; set; }
    }
}

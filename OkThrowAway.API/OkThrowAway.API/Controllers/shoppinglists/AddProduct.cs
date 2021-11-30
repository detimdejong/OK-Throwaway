using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Helpers;
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

        [HttpPost("/api/shoppinglist/addproduct")]
        public async Task<ActionResult> Addition(ViewModel addition)
        {
            var list = await db.ShoppingLists
                                .Include(l => l.User)
                                .Include(l => l.Products)
                                .FirstOrDefaultAsync(x => x.Id == addition.ListId);

            if (list == null)
                return BadRequest("List not found");

            var product = await db.Products.FirstOrDefaultAsync(x => x.Id == addition.ProductId);

            if (product == null)
                return BadRequest("Product not found");

            var productInList = list.Products.FirstOrDefault(p => p.ProductId == product.Id);
            if (productInList == null)
            {
                list.Products.Add(new ProductInList
                {
                    Product = product,
                    Amount = 1
                });
            }
            else
            {
                productInList.Amount += 1;
            }

            var x = await OpenFoodFactHelper.OpenFoodFactAsync("3017620422003");

            db.SaveChanges();

            return Ok($"Added {product.Name} to list {list.Id}");
        }

    }

    public class ViewModel
    {
        public int ListId { get; set; }
        public int ProductId { get; set; }
    }
}

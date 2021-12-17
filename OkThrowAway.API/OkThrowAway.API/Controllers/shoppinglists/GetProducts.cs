using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkThrowAway.API.Controllers.shoppinglists
{
    [ApiController]
    public class GetProducts : ControllerBase
    {
        private readonly OkThrowAwayDbContext db;
        private readonly IMapper mapper;

        public GetProducts(OkThrowAwayDbContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        [HttpGet("/api/shoppinglist/products/{id}")]
        public async Task<List<ProductViewModel>> Get(int id)
        {
            var list = await db.ShoppingLists.ProjectTo<ViewModel>(mapper.ConfigurationProvider).FirstOrDefaultAsync(l => l.Id == id);
            return list.Products.ToList();
        }

        public class ViewModel
        {
            public int Id { get; set; }
            public List<ProductViewModel> Products { get; set; }
        }

        public class ProductViewModel
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int Quantity { get; set; }
        }

        public class Mapping : Profile
        {
            public Mapping()
            {
                CreateMap<ShoppingList, ViewModel>().ForMember(dest => dest.Products, orig => orig.MapFrom(
                        l => l.Products.Select(p =>
                            new ProductViewModel
                            {
                                Id = p.Product.Id,
                                Name = p.Product.Name,
                                Quantity = p.Amount
                            })));
            }
        }
    }
}

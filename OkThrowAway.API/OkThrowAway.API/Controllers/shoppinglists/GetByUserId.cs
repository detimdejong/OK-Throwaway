﻿using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkThrowAway.API.Controllers.shoppinglists
{
    [ApiController]
    public class GetByUserId : Controller
    {
        private readonly OkThrowAwayDbContext db;
        private readonly IMapper mapper;

        public GetByUserId(OkThrowAwayDbContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        [HttpGet("/api/shoppinglist/{id}")]
        public async Task<List<ViewModel>> List(int id) => 
            await db.ShoppingLists.ProjectTo<ViewModel>(mapper.ConfigurationProvider)
                                    .Where(l => l.UserId == id)
                                    .ToListAsync();
    }

    public class ViewModel
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public List<ProductViewModel> Products { get; set; }
    }

    public class ProductViewModel
    {
        public string Name { get; set; }
        public int Quantity { get; set; }
    }

    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<ShoppingList, ViewModel>().ForMember(dest => dest.Products, orig => orig.MapFrom(
                    l => l.Products.Select(p =>
                        new ProductViewModel {
                                Name = p.Product.Name,
                                Quantity = p.Amount
                        })));
        }
    }

}

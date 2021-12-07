using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Models;

namespace OkThrowAway.API.Controllers.products
{
    [ApiController]
    public class Overview : Controller
    {
        private readonly OkThrowAwayDbContext db;
        private readonly IMapper mapper;

        public Overview(OkThrowAwayDbContext db, IMapper mapper)
        {

            this.db = db;
            this.mapper = mapper;
        }

        [HttpGet("/api/products/list")]
        public async Task<List<ViewModel>> List()
        {
            return await db.Products.ProjectTo<ViewModel>(mapper.ConfigurationProvider).ToListAsync();
        }
    }

    public class ViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
    }

    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<Product, ViewModel>();
        }
    }
}

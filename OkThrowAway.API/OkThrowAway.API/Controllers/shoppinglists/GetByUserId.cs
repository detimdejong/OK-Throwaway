using AutoMapper;
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

        [HttpGet("/api/shoppinglists/list/{id}")]
        public async Task<List<ViewModel>> List(int id) => await db.Lists.ProjectTo<ViewModel>(mapper.ConfigurationProvider).Where(l => l.UserId == id).ToListAsync();
    }

    public class ViewModel
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public List<string> Products { get; set; }
    }

    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<ShoppingList, ViewModel>().ForMember(dest => dest.Products, orig => orig.MapFrom(v => v.Products.Select(p => p.Name)));
        }
    }

}

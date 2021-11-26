using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Models;

namespace OkThrowAway.API.Controllers.lists
{
    [ApiController]
    public class AddList : Controller
    {
        private readonly OkThrowAwayDbContext db;
        private readonly IMapper mapper;

        public AddList(OkThrowAwayDbContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        [HttpPost("/api/shoppinglist/add")]
        public async Task<ActionResult<ShoppingList>> Add(ViewModelList vm)
        {
            var newList = mapper.Map<ShoppingList>(vm);
            newList.User = await db.Users.FirstOrDefaultAsync(u => u.Id == vm.UserId);
            if (newList.User == null)
                return BadRequest($"Invalid UserId: {vm.UserId}");

            db.ShoppingLists.Add(newList);
            db.SaveChanges();

            return Ok($"Created new shoppinglist with ID {newList.Id}");
        }
    }

    public class ViewModelList
    {
        public string Name { get; set; }
        public int UserId { get; set; }
    }

    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<ViewModelList, ShoppingList>()
                .ForMember(dest => dest.Products, orig => orig.MapFrom(_ => new List<Product>() ));
        }
    }
}

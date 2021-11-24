using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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

        [HttpPost("/api/lists/addlist")]
        public async Task<ActionResult<ShoppingList>> PostListItem(ViewModelList list)
        {
            var _list = mapper.Map<ShoppingList>(list);
            _list.User = db.Users.FirstOrDefault(u => u.Id == list.UserId);
            if (_list.User == null)
                return BadRequest("Invalid request");

            db.Lists.Add(_list);
            await db.SaveChangesAsync();

            return Ok($"Name: {_list.Name} ID: {_list.Id}");
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
                .ForMember(list => list.Products, o => o.MapFrom(v => new List<Product>() ));
        }
    }
}

using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkThrowAway.API.Models;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace OkThrowAway.API.Controllers.users
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

        [HttpGet("/api/users/list")]
        public async Task<List<ViewModel>> List()
        {
            return await db.Users.ProjectTo<ViewModel>(mapper.ConfigurationProvider).ToListAsync();
        }
    }

    public class ViewModel
    { 
        public string Email { get; set; }
        public string UserName { get; set; }
       
    }

    public class Mapping : Profile 
    { 
        public Mapping()
        {
            CreateMap<User, ViewModel>();
        }
    }


}

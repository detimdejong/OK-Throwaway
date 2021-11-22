using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
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
        private readonly IMediator mediator;

        public Overview(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet("/api/users/list")]
        public async Task<List<ViewModel>> List() => await mediator.Send(new Query());
    }
    public class Query : IRequest<List<ViewModel>> { }

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

    public class QueryHandler : IRequestHandler<Query, List<ViewModel>>
    {
        private readonly OkThrowAwayDbContext db;
        private readonly IMapper mapper;

        public QueryHandler(OkThrowAwayDbContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        public async Task<List<ViewModel>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await db.Users.ProjectTo<ViewModel>(mapper.ConfigurationProvider).ToListAsync();
        }
    }

}

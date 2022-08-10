using Microsoft.AspNetCore.Mvc;

namespace BoxBoxBoxHotel_PetProject.Controllers
{
    [Route("api")]
    [ApiController]
    public class HomePageController : ControllerBase
    {
        private readonly ILogger<HomePageController> _logger;
        private readonly CitiesRepository _citiesRepository;

        public class HomeInfo
        {
            public IEnumerable<string> cityNames { get; set; }
            public IEnumerable<string> coatOfArms { get; set; }

            public HomeInfo(IEnumerable<string> coatOfArms, IEnumerable<string> cityNames)
            {
                this.cityNames = cityNames;
                this.coatOfArms = coatOfArms;
            }
        }

        public HomePageController(ILogger<HomePageController> logger, CitiesRepository citiesRepository)
        {
            _logger = logger;
            _citiesRepository = citiesRepository;
        }

        [HttpGet]
        public HomeInfo Get()
        {
            return new  HomeInfo(_citiesRepository.GetCoatOfArmsBytes(), _citiesRepository.GetCityNames());
        }
    }
}

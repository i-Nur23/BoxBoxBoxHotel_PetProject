using Microsoft.AspNetCore.Mvc;

namespace BoxBoxBoxHotel_PetProject.Controllers
{
    [Route("api")]
    [ApiController]
    public class HomePageController : ControllerBase
    {
        private readonly ILogger<HomePageController> _logger;
        private readonly CitiesRepository _citiesRepository;

        public HomePageController(ILogger<HomePageController> logger, CitiesRepository citiesRepository)
        {
            _logger = logger;
            _citiesRepository = citiesRepository;
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return _citiesRepository.GetCoatOfArmsBytes();
        }
    }
}

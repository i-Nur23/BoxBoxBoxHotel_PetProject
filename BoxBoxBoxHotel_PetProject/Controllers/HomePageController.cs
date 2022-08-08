using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BoxBoxBoxHotel_PetProject.Controllers
{
    [Route("")]
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

using Microsoft.AspNetCore.Mvc;

namespace BoxBoxBoxHotel_PetProject.Controllers
{
    [Route("api/chain")]
    [ApiController]
    public class ChainController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ChainController> _logger;

        public ChainController(ILogger<ChainController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Chain> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Chain
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
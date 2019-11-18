using Microsoft.AspNetCore.Mvc;

namespace WebApplication4.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // var viewModel = new WeatherForecast();
            return View();
        }
    }
}

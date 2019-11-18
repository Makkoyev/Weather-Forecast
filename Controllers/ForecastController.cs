using Microsoft.AspNetCore.Mvc;

namespace WebApplication4.Controllers
{
    public class ForecastController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
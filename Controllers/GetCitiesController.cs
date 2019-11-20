using Microsoft.AspNetCore.Mvc;
using System;

namespace WebApplication4.Controllers
{
    [ApiController]
    [Route("api/cities")]
    public class UnplashGetController : ControllerBase
    {
        private static readonly string[] CityObject = new[]
        {
            "Altino", "Archi", "Ari", "Arielli", "Atessa", "Bomba", "Borrello", "Bucchianico", "Canosa Sannita", "Carpineto Sinello", "Carunchio", "Casacanditella", "Casalanguida", "Casalbordino", "Casalincontrada", "Casoli", "Castelguidone", "Chieti", "Civitaluparella", "Colledimacine", "Colledimezzo", "Crecchio", "Cupello", "Dogliola", "Fallo", "Filetto", "Fossacesia", "Fraine", "Fresagrandinaria", "Frisa", "Furci", "Gamberale", "Gessopalena", "Gissi", "Guardiagrele", "Guilmi", "Lanciano", "Lentella", "Lettopalena", "Liscia", "Miglianico", "Montazzoli", "Monteferrante", "Montelapiano", "Montenerodomo", "Monteodorisio", "Mozzagrogna"
        };
        [HttpGet]
        public IActionResult Cities()
        {
            var obj = new CityObject()
            {
                firstCity = CityObject[new Random().Next(CityObject.Length)],
                secondCity = CityObject[new Random().Next(CityObject.Length)],
                thirdCity = CityObject[new Random().Next(CityObject.Length)],
                forthCity = CityObject[new Random().Next(CityObject.Length)],
                fifthCity = CityObject[new Random().Next(CityObject.Length)]
            };
            return Ok(obj);
        }
    }
}
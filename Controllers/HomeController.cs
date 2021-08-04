using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Swift.Models;

namespace Swift.Controllers
{
    public class HomeController : Controller
    {
        //home
        public IActionResult Index()
        {
            return View();
        }

        
    }
}

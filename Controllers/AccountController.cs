using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Swift.Models;

namespace Swift.Controllers
{
    public class AccountController : Controller
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            _context = context;
        }

        [Route("/account/register")]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult RegisterAction(UserAccount userAccount)
        {
            var user = new UserAccount 
            { 
                Username = userAccount.Username,
                Password = userAccount.Password
            }; 
            _context.Add(user);
            _context.SaveChanges(); 
            return RedirectToAction("Index", "Home"); 
        }

        [Route("/account/login")]
        public IActionResult Login(UserAccount userAccount)
        {
            return View();
        }

        [HttpPost]
        public IActionResult LoginAction(UserAccount userAccount)
        { 
            var lg = _context.Users.Where(a => a.Username.Equals(userAccount.Username) && a.Password.Equals(userAccount.Password)).FirstOrDefault();
            if (lg != null)
            {
                return RedirectToAction("Profile", "Account");
            } else
            {
                return RedirectToAction("Login","Account");
            }
        }

        [Route("/account/profile")]
        public IActionResult Profile()
        {
            return View();
        }
    }
}
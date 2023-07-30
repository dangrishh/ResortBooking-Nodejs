const router = require('express').Router();
const User = require('../models/User');

// Showing home page
router.get("/", function (req, res) {
    res.render("home");
});
  
// Showing secret page
router.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});
  
// Showing register form
router.get("/register", function (req, res) {
    res.render("register");
});
  
// Handling user signup
router.post("/register", async (req, res) => {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    
    return res.status(200).json(user);
  });
  
//Showing login form
router.get("/login", function (req, res) {
    res.render("login");
}); 
  
//Handling user login
router.post("/login", async function(req, res){
    try {
        // check if the user exists 
        const user = await User.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.render("secret");
          } else {
            
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});
  
//Handling user logout 
router.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(); }
        res.redirect('/');
      });
}); 
   
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login"); 
}


module.exports = router
const app = require('../app');

const router = require('express').Router();

/* GET home page */
router.get("/", (req, res, next) => { //route to home page
  res.render("index");
});

//routes to ROUTESSSSS files
//PREFIX!!!!!
//what comes before this prefix, is the rout until this specific route, stated on app.js
router.use('/celeb',require('./celebrities.routes'));

router.use('/mov',require('./movies.routes'));

module.exports = router;


/* ROUTE
app.js: localhost:3000
index.routes.js:  /celeb || /mov
rest: each specific route function
*/
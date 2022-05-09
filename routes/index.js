const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => { //route to home page
  res.render("index");
});

//routes to ROUTESSSSS files
//PREFIX!!!!!
router.use('/celebrities/laia',require('./celebrities.routes'));

router.use('/movies',require('./movies.routes'));

module.exports = router;
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
/**
 * ITERATION 6
 * Adding new movies
 */


//this renders the view: 1 - creates URL 2- renders file
router.get('/movie-create',(req,res,next)=>{ //last part of the URL, this line GETS THE PATH ON THE BROWSER
    res.render('movies/new-movie');//views folder file - this line RENDERS THE VIEW
})
//post route
router.post('/movie-create',async(req,res,next)=>{ //RUNS A QUERY ON DB
    try{
        //
        const {title,genre,plot,cast}=req.body;
        await Celebrity.create({title,genre,plot,cast});
        res.redirect('/'); //redirect to movie list
    }catch(error){
        res.redirect('/celeb-create')
        next(error);
    }
})







module.exports = router;
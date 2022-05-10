const res = require("express/lib/response");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

/**
 * ITERATION 4
 * Listing celebrities
 */

//render view
router.get('celebs',(req,res,next)=>{
    Celebrity.find()
        .then((celebs)=>{
            res.render('celebrities/celebrities',{celebs})
        })
        .catch((error)=>console.log(error));
})




//this renders the view: 1 - creates URL 2- renders file
router.get('/celeb-create',(req,res,next)=>{ //last part of the URL, this line GETS THE PATH ON THE BROWSER
    res.render('celebrities/new-celebrity');//views folder file - this line RENDERS THE VIEW
})
//post route
router.post('/celeb-create',async(req,res,next)=>{ //RUNS A QUERY ON DB
    try{
        //
        const {name,occupation,catchPhrase}=req.body;
        await Celebrity.create({name,occupation,catchPhrase});
        res.redirect('/'); //redirect to celebrity list
    }catch(error){
        console.log(error);
        res.redirect('/celeb-create')
        next(error);
    }
})

















module.exports = router;
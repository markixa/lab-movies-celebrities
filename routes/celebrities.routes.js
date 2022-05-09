// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get('/create',(req,res,next)=>{ //last part of the URL, this line GETS THE PATH ON THE BROWSER
    res.render('celebrities/celebrity-create');//views folder file - this line RENDERS THE VIEW
})

router.post('/create',async(req,res,next)=>{ //RUNS A QUERY ON DB
    try{
        //
        const {name,occupation,catchPhrase}=req.body;
        await Celebrity.create({name,occupation,catchPhrase});
        res.redirect('/'); //create
    }catch(error){
        next(error);
    }
})














module.exports = router;
const {Schema,model, default: mongoose}=require("mongoose");

const movieSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String
    },
    cast:[{
        type:mongoose.Schema.Types.ObjectId,ref:"Celebrity"
    }]
});

const Movies=model("Movie",movieSchema);
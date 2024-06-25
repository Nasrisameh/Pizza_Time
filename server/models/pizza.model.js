const mongoose =require("mongoose")
const PizzaSchema=mongoose.Schema({
    createdAt:{
        type:Date,
        default: Date.now()
    },
    pizza:{
        type:String,
        required:[true,"{PATH} is required"],
        minlength:[3,"{PATH} must be at least 3 chars"]
    },
    size:{
        type:String,
        required:[true,"{PATH} is required"],
    },
    delivered:{
        type:Boolean,
        required:[true,"{PATH} is required"],
    }
},{timestamps:true}) 

module.exports.Pizza=mongoose.model('Pizza',PizzaSchema)

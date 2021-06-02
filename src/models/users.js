const mongoose=require("mongoose")
const validator=require("validator")

const usersSchema= new mongoose.Schema({
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error("invalid email")
        }
    },
    phone:{
        type:String,
        required:true
    }
})

const User= new mongoose.model("user",usersSchema)

module.exports=User
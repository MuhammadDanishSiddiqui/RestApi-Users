const mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/users",{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to db")
}).catch((e)=>{
    console.log(e)
})


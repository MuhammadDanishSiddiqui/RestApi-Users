const express=require("express")
const User=require("../models/users")
var router = express.Router()

router.post("/users",async(req,res)=>{
    try {
       const user= new User(req.body)
       const createUser= await user.save()
       res.send(createUser) 
    } catch (error) {
        res.send(error)
    }
})

router.get("/users",async(req,res)=>{
    try {
       const users= await User.find({})
       res.send(users) 
    } catch (error) {
        res.send(error)
    }
})

router.get("/users/:id",async(req,res)=>{
    try {
       const user= await User.find({user_id:req.params.id})
       res.send(user) 
    } catch (error) {
        res.send(error)
    }
})

router.patch("/users/:id",async(req,res)=>{
    try {
        const user= await User.find({user_id:req.params.id})
       const updatedUser= await User.findByIdAndUpdate({_id:user[0]._id},req.body,{new:true})
       res.send(updatedUser) 
    } catch (error) {
        res.send(error)
    }
})


router.delete("/users/:id",async(req,res)=>{
    try {
        const user= await User.find({user_id:req.params.id})
       const deletedUser= await User.findByIdAndDelete({_id:user[0]._id})
       res.send(deletedUser) 
    } catch (error) {
        res.send(error)
    }
})
module.exports=router
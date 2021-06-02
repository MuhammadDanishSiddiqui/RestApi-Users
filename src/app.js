require("./db/conn")
const express=require("express")
const app= express()
const router=require("./router/router")

app.use(express.json())
app.use(router)

app.listen(3000,()=>{
    console.log("listening to 3000")
})
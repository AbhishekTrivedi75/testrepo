import express from "express"
import path from "path"
const app =express()

app.set("view engine","ejs")

app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen("5000",()=>{
    console.log("server listened");
})
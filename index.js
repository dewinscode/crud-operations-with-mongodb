const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const methodoverride=require("method-override");
const { log } = require("console");

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true }));
app.use(methodoverride("_method"));
app.listen(8080,()=>{
    console.log("server is listning on port 8080");
    
});

app.get("/",(req,res)=>{
    res.send("root is working");
});
app.get("/chats",async(req,res)=>{
let chats= await Chat.find();
res.render("index.ejs",{chats});
});
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/chats",async(req,res)=>{
let {from,to,msg}=req.body;
let newChat = new Chat({
    from:from,
    msg:msg,
    to:to,
    created_at: new Date()

});
await newChat.save();
res.redirect("/chats")
});
app.get("/chats/:id/edit",async(req,res)=>{
    let{id}=req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});
app.put("/chats/:id",async(req,res)=>{
let {id}=req.params;
let {msg:newMsg}=req.body;
await Chat.findByIdAndUpdate(
    id,{msg:newMsg},
    {runValidators:true,new:true}
);
res.redirect("/chats");
});
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id)
    res.redirect("/chats")
})
main().then(()=>{
    console.log("connection is sucessfull");
    
}).catch((err)=>{
    console.log(err);
    
});
 async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
 };

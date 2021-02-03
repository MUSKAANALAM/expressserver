const express=require("express");
const app=express();
app.use(express.static('ok'));

app.get("/",(req,res)=>{
	res.sendfile('index.html',{root:__dirname});
});
app.get("/register",(req,res)=>{
	res.sendfile('registerpage.html',{root:__dirname});
});
app.get("/login",(req,res)=>{
	res.sendfile('login.html',{root:__dirname});
});
app.listen(3000,()=>console.log('webapp'))
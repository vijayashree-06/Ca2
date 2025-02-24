const express=requrie("express");
const app= express();
const port=3000;
app.use(express.json());
let user=[];

app.get("/",(req,res)=>{
    res.send("API is running! :)");
});

app.post("/user",(req,res)=>{
    user.push(req.body);
    res.json({message:"User Found"});
});

app.get("/user",(req,res)=>{
    res.json(User);
});

app.delete("user",(req,res)=>{
    res.json({message:"User Deleted!"});
});

app.listen(port(),{
    console.log(`API is running!:) http://localhost${port}`)
});
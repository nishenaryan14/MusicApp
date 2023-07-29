const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/login",(req, res)=>{
    res.sendFile(__dirname+"/login.html");
});

app.post("/login",(req, res)=>{
    console.log("you have successfully logged in");
    res.redirect("/")
})



app.get("/home",(req, res)=>{
    res.sendFile(__dirname+"/home.html");
})
app.listen(3000, function(){
    console.log("server started on port 3000");
});
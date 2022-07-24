const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/home.html");
});

// app.post("/", function(req,res){
//    var n1=Number(req.body.n1);
//    var n2=Number(req.body.n2);

//    var result=n1+n2;

//    res.send("The result is"+result);
// });


app.listen(3000,function(){
    console.log("started");
});
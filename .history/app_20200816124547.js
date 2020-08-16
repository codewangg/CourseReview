const express = require("express");
const app = express();
const bodyParser = require("body-parser");
import client from './DB/connection.js';

const db = client.db("test");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

    var courses = [
        {name: "mlp", image:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {name: "mlp", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-NC1h3PdhKKSTUu0S-Y6QtGSz1PWCNL4MXA&usqp=CAU"},
        {name: "mlp", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-NC1h3PdhKKSTUu0S-Y6QtGSz1PWCNL4MXA&usqp=CAU"},
        {name: "mlp", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-NC1h3PdhKKSTUu0S-Y6QtGSz1PWCNL4MXA&usqp=CAU"},
        {name: "mlp", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-NC1h3PdhKKSTUu0S-Y6QtGSz1PWCNL4MXA&usqp=CAU"},
        {name: "mlpr", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGI0qdCZ_bsxabXEma4kZT2N8-lln603NiPA&usqp=CAU"}
    ]

app.get("/courses", (req, res)=>{


    res.render("courses",{courses:courses});
});

app.post("/courses", (req, res)=>{
    var name = req.body.name;
    var image = req.body.image;
    var newcourse = {name: name, image: image}
    courses.push(newcourse);
    res.redirect("/courses");
});

app.get("/courses/new", (req, res)=>{
    res.render("new.ejs");
});

const Port = process.env.PORT || 3000;
//process.env.PORT process.env.IP
app.listen(Port, function(){
    console.log("server has started!");
    //console.log(process.env.PORT);
});
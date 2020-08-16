const express = require("express");
const app = express();

app.set('view engine', "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/courses", (req, res)=>{
    var courses = [
        {name: anlp, image:""}
        {name: mlp, image:""}
        {name: mlpr, image:""}
    ]
});

//process.env.PORT process.env.IP
app.listen(3000, 'localhost', function(){
    console.log("server has started!");
    //console.log(process.env.PORT);
});
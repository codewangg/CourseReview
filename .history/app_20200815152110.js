const express = require("express");
const app = express();

app.set('view engine', "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

//process.env.PORT process.env.IP
app.listen(3000, 'localhost', function(){
    console.log("server has started!");
    //console.log(process.env.PORT);
});
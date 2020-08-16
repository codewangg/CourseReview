const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("this will be the landing page soon");
});

//process.env.PORT process.env.IP
app.listen(3000, localhost, function(){
    console.log("server has started!");
    //console.log(process.env.PORT);
});
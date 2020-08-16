const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("this will be the landing page soon");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!");
    console.log(process.env.PORT);
});
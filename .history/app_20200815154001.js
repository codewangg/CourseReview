const express = require("express");
const app = express();

app.set('view engine', "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/courses", (req, res)=>{
    var courses = [
        {name: "anlp", image:"https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"},
        {name: "mlp", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-NC1h3PdhKKSTUu0S-Y6QtGSz1PWCNL4MXA&usqp=CAU"},
        {name: "mlpr", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGI0qdCZ_bsxabXEma4kZT2N8-lln603NiPA&usqp=CAU"}
    ]

    res.render("courses",{courses:courses});
});

//process.env.PORT process.env.IP
app.listen(3000, 'localhost', function(){
    console.log("server has started!");
    //console.log(process.env.PORT);
});
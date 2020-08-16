const express      = require("express");
const app          = express();
const bodyParser   = require("body-parser");
const mongoose     = require("mongoose");

const uri = 'mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/CourseReview?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const courseSchema = new mongoose.Schema({
    name: String,
    teacher:String,
    Avg: Number,
    image: String
});

var Course = mongoose.model("Course", courseSchema);
Course.create({
    name:"MLP",
    Avg: 67,
    teacher:"hakan bilen",
    image: "http://homepages.inf.ed.ac.uk/hbilen/assets/images/hakan.jpg"
}, function(err, course){
    if(err){
        console.log(err);
    }else{
        console.log("created course");
        console.log(course);
    }
});

var Course = mongoose.model("Course", courseSchema);
Course.create({
    name:"IAML",
    Avg: 67,
    teacher:"hakan bilen",
    image: "http://homepages.inf.ed.ac.uk/hbilen/assets/images/hakan.jpg"
}, function(err, course){
    if(err){
        console.log(err);
    }else{
        console.log("created course");
        console.log(course);
    }
});

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
    Course.find({}, function(err, allCourses){
        if(err){
            console.log(err);
        }else{
            res.render("courses",{courses:allCourses});
        }
    })
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
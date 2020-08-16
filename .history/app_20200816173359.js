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



app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});


//INDEX - display all the courses in DB
app.get("/courses", (req, res)=>{
    Course.find({}, function(err, allCourses){
        if(err){
            console.log(err);
        }else{
            res.render("courses",{courses:allCourses});
        }
    })
});


//CREATE - add new courses to DB
app.post("/courses", (req, res)=>{
    var name = req.body.name;
    var image = req.body.image;
    var teacher = req.body.teacher;
    var newcourse = {name: name, image: image, teacher:teacher};
    Course.create(newcourse, function(err, newcourse){
        if(err){
            console.log(err);
        }else{
            res.redirect("/courses");
        }
    });
});

//New - show form of create
app.get("/courses/new", (req, res)=>{
    res.render("new.ejs");
});

const Port = process.env.PORT || 3000;
//process.env.PORT process.env.IP
app.listen(Port, function(){
    console.log("server has started!");
    //console.log(process.env.PORT);
});
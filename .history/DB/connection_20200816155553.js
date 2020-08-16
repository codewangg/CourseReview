
// Connection URL
// const uri = 'mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test?retryWrites=true&w=majority';

// const MongoClient = require('mongodb').MongoClient;


// //const client = new MongoClient(uri, { useNewUrlParser: true });

// MongoClient.connect(uri,{ useNewUrlParser: true ,useUnifiedTopology: true}, function(err, db) {
//     if(err) throw err;
//     var dbo = db.db("inventory");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

// console.log("finished");

const mongoose = require("mongoose");

const uri = 'mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const courseSchema = new mongoose.Schema({
    name: String,
    teacher:String,
    Avg: Number
});

var iaml = mongoose.model("Course", courseSchema);

var course = new Course({
    name: "MLP",
    Avg: 72,
    teacher:"Hakan Bilen"
});

iaml.save(function(err, course){
    if(err){
        console.log("Some thing went wrong when inserting course");
    }else{
        console.log("inserted course");
        console.log(course);
    }
});

Course.find({}, function(err, courses){
    if(err){
        console.log("Error when retreiving all courses");
    }else{
        console.log("all the courses");
        console.log(courses);
    }
})
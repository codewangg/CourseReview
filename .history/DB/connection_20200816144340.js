
// Connection URL
const uri = 'mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test?retryWrites=true&w=majority';

const MongoClient = require('mongodb').MongoClient;


//const client = new MongoClient(uri, { useNewUrlParser: true });

MongoClient.connect(uri,{ useNewUrlParser: true ,useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("inventory");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });

});

console.log("finished");
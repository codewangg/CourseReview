
// Connection URL
const uri = 'mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test?retryWrites=true&w=majority';

const MongoClient = require('mongodb').MongoClient;


const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if(err) throw err;
  const collection = client.db("test").collection("inventory");
 // perform actions on the collection object
     var myobj =  [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
       ];

    collection.insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });

  client.close();
});

console.log("finished");
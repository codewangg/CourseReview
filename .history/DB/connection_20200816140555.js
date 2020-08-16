
// Connection URL
const uri = 'mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test?retryWrites=true&w=majority';

const MongoClient = require('mongodb').MongoClient;


const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("inventory");
 // perform actions on the collection object
  console.log("db connected")
  client.close();
});
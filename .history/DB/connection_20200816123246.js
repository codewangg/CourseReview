const mongoose = require('mongoose');

const URI = ""



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

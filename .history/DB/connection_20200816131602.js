const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test?retryWrites=true&w=majority';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    if(err) console.log(err);
  assert.equal(null, err);
  client.close();
});

const db = client.db("test");


db.collection('inventory').insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 28, w: 35.5, uom: "cm" }
}).then(function(result) {
  // process result
})

var cursor = db.collection('inventory').find({});
function iterateFunc(doc) {
   console.log(JSON.stringify(doc, null, 4));
}

function errorFunc(error) {
   console.log(error);
}

cursor.forEach(iterateFunc, errorFunc);
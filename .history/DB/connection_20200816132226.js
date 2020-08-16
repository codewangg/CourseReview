
// Connection URL
const uri = 'mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test?retryWrites=true&w=majority';

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const db = client.db("test");
  db.collection('inventory').insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 28, w: 35.5, uom: "cm" }
}).then(function(result) {
  // process result
})


 // perform actions on the collection object
  client.close();
});

const db = client.db("test");



var cursor = db.collection('inventory').find({});
function iterateFunc(doc) {
   console.log(JSON.stringify(doc, null, 4));
}

function errorFunc(error) {
   console.log(error);
}

cursor.forEach(iterateFunc, errorFunc);
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://new-user:<password>@cluster0.s1pg2.mongodb.net/<dbname>?retryWrites=true&w=majority";
export const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


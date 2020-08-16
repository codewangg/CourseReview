const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://new-user:<password>@cluster0.s1pg2.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true } );

client.connect(err => {
  if (err) console.log('failed to connect')
  else {
    console.log('connected')
    db = client.db("test");
  }
});



module.exports = db;
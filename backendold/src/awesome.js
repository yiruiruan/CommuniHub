const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017/';

const dbName = 'userDB';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  const db = client.db(dbName);
  const usersCollection = db.collection('users');

            //jsonFile = test1
        usersCollection.insertMany([{"name": "nameTest"}, function(err, result) {

      console.log(result)
   } ])


   

    usersCollection.findOne({
        name: "nameTest"
    }, (err, result) => {
        console.log(result);
    })
});


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/userDB";
exports.__esModule = true;
var Community = /** @class */ (function () {
    function Community(jsonFile) {
        var obj = JSON.parse(jsonFile);
        this.name = obj.name;
        this.startTime = obj.startTime;
        this.endTime = obj.endTime;
        this.typeOfWork = obj.typeOfWork;
        this.numNeeded = obj.numNeeded;
        this.createEvent(this.numNeeded);
    }
    Community.prototype.createEvent = function (workNum) {
        for (var count = 0; count < workNum; count++) {
            this.setID();
            var json = JSON.stringify(this);
            console.log(2);
            MongoClient.connect(url, function(err, client) {
                const db = client.db(dbName);
                const usersCollection = db.collection('users');
                console.log('1');
                var test1 = {"name": "nameTest"};
                function insert(jsonFile) {
                      //jsonFile = test1
                      usersCollection.insertMany([jsonFile, function(err, result) {
                    console.log('Result done');
                    console.log(result)
                 } ])
              }
            })
        }
    };
    Community.prototype.setID = function () {
        this.id = Community.counter++;
    };

    Community.counter = 0;
    return Community;
}());
exports.Community = Community;

let test1 = new Community('{ "name": "nameTest", "email": "emailTest", "startTime": "00:00:", "endTime": "23:59", "date": "2020-01-01", "typeOfWork": ["type1","typ2","type3"] }');
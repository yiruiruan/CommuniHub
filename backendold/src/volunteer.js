mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTpoplogy', true);
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/db";

exports.__esModule = true;
var Volunteer = /** @class */ (function () {
    function Volunteer(event) {
        var obj = JSON.parse(event);
        this.email = obj.email;
        this.name = obj.name;
        this.id = Volunteer.counter++;
        this.startTime = obj.startTime;
        this.endTime = obj.endTime;
        this.typeOfWork = obj.typeOfWork;
        this.date = obj.date;
        this.createVEvent();
    }
    Volunteer.prototype.createVEvent = function () {
        var json = JSON.stringify(this);
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("db");
            dbo.collection("db").insertOne(json, function(err, res) {
                if (err) throw err;
                console.log("Object added inserted into databse!");
                db.close();
            })
        })

        
    };
    Volunteer.getDataByName = function (name) {
        MongoClient.connect(url, function(err, db) {
            //if (err) thow err;
            var dbo = db.db("db");
            var querry = {"name": "nameTest"};
            dbo.collection("db").find(querry).toArray(function(err, result) {
               console.log(result);
               db.close;

            })

        })
    };
    Volunteer.counter = 0;
    return Volunteer;
}());
exports.Volunteer = Volunteer;

"use strict";
db = connect('127.0.0.1:27017/userDB');
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
            db.names('userDB').insertOne(json)
        }
    };
    Community.prototype.setID = function () {
        this.id = Community.counter++;
    };
    Community.counter = 0;
    return Community;
}());
exports.Community = Community;


function check_volunteers(communityinfo) {
    //get info from db 
    var volunteers = db.getVolData();
    volunteers.forEach(check);
    if (this.item == 0) {
        return;
    } else {
        // add this data to the database
        db.addData(this);
    }
}

function check(item) {
    if (this.numNeeded == 0) return;
    if (item.startTime == this.startTime && item.endTime <= this.endTime) {
        if (item.typeOfWork[0] == this.typeOfWork || item.typeOfWork[1] == this.typeOfWork || item.typeOfWork[2] == this.typeOfWork) {
            this.numNeeded--;
            // TODO: Notify
        }
    }
}


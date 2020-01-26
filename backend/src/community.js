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

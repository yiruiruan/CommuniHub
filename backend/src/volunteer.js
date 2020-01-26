
"use strict";
 db = connect('127.0.0.1:27017/userDB');
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
        db.names('userDB').insertOne(json);
    };
    Volunteer.getDataByName = function (name) {
        var data = db.userDB.find( {"name": name});
    };
    Volunteer.counter = 0;
    return Volunteer;
}());
exports.Volunteer = Volunteer;

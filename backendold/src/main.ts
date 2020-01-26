import {Community} from "./community";
import {Volunteer} from "./volunteer";

var  test1 = '{ "name": "nameTest", "email": "emailTest", "startTime": "00:00:", "endTime": "23:59", "date": "2020-01-01", "typeOfWork": ["type1","typ2","type3"] }';

let firstUSer = new Volunteer(test1);
var name = "nameTest";
let userData = Volunteer.getDataByName(name);
console.log("user found: "+ userData);

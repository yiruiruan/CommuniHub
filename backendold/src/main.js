var mongo = require('mongodb');
import {insert} from "./awesome.js";

"use strict";
exports.__esModule = true;
var volunteer_1 = require("./volunteer");
var test1 = '{ "name": "nameTest", "email": "emailTest", "startTime": "00:00:", "endTime": "23:59", "date": "2020-01-01", "typeOfWork": ["type1","typ2","type3"] }';
var firstUSer = insert(test1);
var name = "nameTest";
var userData = volunteer_1.Volunteer.getDataByName(name);
console.log("user found: " + userData);

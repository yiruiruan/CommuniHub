var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongo://localhost:27017/userDB';
router.get('/', function(req, res, next) {
    res.render('index');
})

router.get('/get-data', function(req, res, next) {

})

router.post('/insert', function(req, res, next) {

})

router.post('/update', function(req, res, next) {
    
})

router.post('/delete', function(req, res, next) {
    
})

   
module.exports = router;
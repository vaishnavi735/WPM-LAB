// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
/* GET homepage. */
router.get('/', ctrlMain.index);
module.exports = router;
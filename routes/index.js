var express = require('express');
var router = express.Router();
var hobbyCtrl = require('../controllers/hobbies')

/* GET home page. */
router.get('/', hobbyCtrl.index);
router.get('/:id', hobbyCtrl.show);
router.post('/', hobbyCtrl.create);
router.delete('/', hobbyCtrl.delete);

module.exports = router;

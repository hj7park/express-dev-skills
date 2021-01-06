var express = require('express');
var router = express.Router();
const importCtrl = require("../controllers/skills")

/* GET home page. */
router.get('/', importCtrl.show);

router.get('/addForm',importCtrl.addForm);
router.post('/addFormHandle', importCtrl.addFormHandle);

router.delete('/:id',importCtrl.deleteSkill);

router.put('/:id',importCtrl.updateForm);
router.post('/:id/updateFormHandle',importCtrl.updateFormHandle);

router.get('/:id', importCtrl.index);
module.exports = router;
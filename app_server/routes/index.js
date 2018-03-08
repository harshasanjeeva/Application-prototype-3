var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");


router.get('/', ctrlMain.landing); 

router.get('/home', ctrlMain.home);

router.get('/main', ctrlMain.login);

router.post('/login', ctrlMain.post_login);

router.get('/register', ctrlMain.register);

router.post('/register', ctrlMain.post_register);

router.get('/textfields', ctrlMain.get_textfields);

router.post('/textfields', ctrlMain.post_textfields);

router.get('/checkboxes', ctrlMain.get_checkboxes);

router.post('/checkboxes', ctrlMain.post_checkboxes);

router.get('/radiobuttons', ctrlMain.get_radiobuttons);

router.post('/radiobuttons', ctrlMain.post_radiobuttons);

router.get('/menu', ctrlMain.get_menu);

router.post('/menu', ctrlMain.post_menu);

router.get('/login', ctrlMain.get_login);

router.get('/feedback', ctrlMain.feedback);


module.exports = router;
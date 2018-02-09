var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET home page.
 */
router.get('/home', ctrlMain.home);



router.get('/', ctrlMain.login);

router.post('/login', ctrlMain.post_login);
/*
 * GET text fields page.
*/
router.get('/textfields', ctrlMain.get_textfields);


/*
 * POST text fields page.
 */
router.post('/textfields', ctrlMain.post_textfields);

/*
 * GET check boxes page.
 */
router.get('/checkboxes', ctrlMain.get_checkboxes);

/*
 * Post check boxes page.
 */
router.post('/checkboxes', ctrlMain.post_checkboxes);

/*
 * GET radio buttons page.
 */
router.get('/radiobuttons', ctrlMain.get_radiobuttons);

/*
 * POST radio buttons page.
 */
router.post('/radiobuttons', ctrlMain.post_radiobuttons);

/*
 * GET menu page.
 */
router.get('/menu', ctrlMain.get_menu);

/*
 * POST menu page.
 */
router.post('/menu', ctrlMain.post_menu);

/*
 * GET login page.
 */
router.get('/login', ctrlMain.get_login);
module.exports = router;
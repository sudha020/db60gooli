var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var umbrella_controller = require('../controllers/umbrella'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// umbrella ROUTES /// 
 
// POST request for creating a umbrella.  
router.post('/umbrella', umbrella_controller.umbrella_create_post); 
 
// DELETE request to delete umbrella. 
router.delete('/umbrella/:id', umbrella_controller.umbrella_delete); 
 
// PUT request to update umbrella. 
router.put('/umbrella/:id', 
umbrella_controller.umbrella_update_put); 
 
// GET request for one umbrella. 
router.get('/umbrella/:id', umbrella_controller.umbrella_detail); 
 
// GET request for list of all umbrella items. 
router.get('/umbrella', umbrella_controller.umbrella_list); 
 
module.exports = router; 
/* GET create umbrella page */ 
router.get('/create', umbrella_controlers.umbrella_create_Page); 
/* GET create update page */ 
router.get('/update', umbrella_controlers.umbrella_update_Page); 
/* GET create update page */ 

/* GET create umbrella page */ 
router.get('/delete', umbrella_controlers.umbrella_delete_Page); 
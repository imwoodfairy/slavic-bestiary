const Router = require('express');
const router = new Router();
const CategoryController = require('../controllers/categoryController');

router.post('/', CategoryController.create);
router.get('/', CategoryController.get);


module.exports = router
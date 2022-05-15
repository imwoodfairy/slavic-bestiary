const Router = require('express');
const router = new Router();
const HeroController = require('../controllers/heroController');

router.post('/', HeroController.create);
router.get('/', HeroController.get);
router.get('/:id', HeroController.getById)

module.exports = router;
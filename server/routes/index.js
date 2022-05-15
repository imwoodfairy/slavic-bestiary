const Router = require('express');
const router = new Router();
const heroRouter = require('./heroRouter');
const categoryRouter = require('./categoryRouter');



router.use('/hero', heroRouter);
router.use('/category', categoryRouter);


module.exports = router
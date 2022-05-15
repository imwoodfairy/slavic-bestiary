const { Category } = require('../models/models');
const ApiError = require('../error/Apierror');


class CategoryController {

    async create(req, res) {
        const { name } = req.body;
        const category = await Category.create({ name })
        return res.json(category)

    }

    async get(req, res) {
        const names = await Category.findAll();
        return res.json(names);
    }

}

module.exports = new CategoryController();
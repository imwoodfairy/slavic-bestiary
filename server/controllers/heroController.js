const uuid = require('uuid');
const path = require('path');
const { Hero } = require('../models/models');
const ApiError = require('../error/Apierror')

class HeroController {

    async create(req, res, next) {

        try {
            const { name, description, categoryId, alt } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const hero = await Hero.create({ name, categoryId, alt, img: fileName })

            return res.json(hero);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async get(req, res) {
        let { categoryId, limit } = req.query;

        limit = limit || 6;

        let heroes;
        if (!categoryId) {
            heroes = await Hero.findAndCountAll({ limit });
        }
        if (categoryId) {
            heroes = await Hero.findAndCountAll({ where: { categoryId }, limit });
        }

        return res.json(heroes);

    }

    async getById(req, res) {
        const { id } = req.params;
        const hero = await Hero.findOne({
            where: { id },
        })
        return res.json(hero);
    }
}

module.exports = new HeroController();
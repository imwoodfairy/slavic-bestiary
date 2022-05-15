const sequelize = require('../db');
const { DataTypes } = require('sequelize');


const Hero = sequelize.define('hero', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    alt: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
})


const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, }
})

Category.hasMany(Hero);
Hero.belongsTo(Category);

module.exports = {
    Hero,
    Category
}
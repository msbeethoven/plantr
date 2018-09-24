const express = require('express');
const Sequelize = require('sequelize');
const app = express();

const db = new Sequelize('postgres://localhost:5432/plantr');


const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
})

const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
})


Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);
Vegetable.belongsToMany(Plot, {through: 'gardened'});
Plot.belongsToMany(Vegetable, {through: 'gardened'});

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

Vegetable.bulkCreate([
  {
      name: 'carrots',
      color: 'orange',
      planted_on: Date.UTC(2016, 0, 1)
  
    },

    {
      name: 'lettuce',
      color: 'green',
      planted_on: Date.UTC(2016, 0, 1)
  
    },

    {
      name: 'raddish',
      color: 'red',
      planted_on: Date.UTC(2016, 0, 1)
  
    },
    {
      name: 'eggplant',
      color: 'purple',
      planted_on: Date.UTC(2016, 0, 1)
  
    }

]).then(() => {
  return Vegetable.findAll();
}).then(vegetables => {
  console.log(vegetables)
})

module.exports = db;

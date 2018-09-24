
const db = require('./models');

db.sync({force: true})
  .then(function(){
    console.log("works")
    db.close();
  })
  .catch(function(error){
    console.log("no", error)
    db.close();
  });

  // const carrot = new Vegetable({
  //   name: 'carrots',
  //   color: 'orange',
  //   planted_on: Date.UTC(2016, 0, 1)

  // })

  // const lettuce = new Vegetable({
  //   name: 'lettuce',
  //   color: 'green',
  //   planted_on: Date.UTC(2016, 0, 1)

  // })

  // const raddish = new Vegetable({
  //   name: 'raddish',
  //   color: 'red',
  //   planted_on: Date.UTC(2016, 0, 1)

  // })

  // const eggplant = new Vegetable({
  //   name: 'eggplant',
  //   color: 'purple',
  //   planted_on: Date.UTC(2016, 0, 1)

  // })
  console.log("veggies", db)

  db.Vegetable.bulkCreate([
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


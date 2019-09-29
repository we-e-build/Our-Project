const db = require('../database');

let init = (cb) => {
  console.log("hello")
 }
 let creatdefult = (cb) => {
  db.posts.create(
    {    img: "",
      category: "animale",
      state: "Amman",
      description: "igigitgitgiti"
 },(err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
 }
 
 const getLost = (cb,cat,city)=> {
   console.log('serverdb',cat,city)
  db.posts.find({ $and: [ { category: cat }, { state: city } ] } ,(err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};
 
 module.exports = { init ,getLost ,creatdefult}
//  {category:cat},{state:city}
// { $and: [ { category: cat }, { state: city } ] }
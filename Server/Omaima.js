var express = require("express");;
var router= express.Router()

const Omaima = require("../database/Omaima");


router.get("/id",(req,res)=>{
   Omaima.init(() => {
    res.send("This is Omaima server")
    })
})
router.get('/defult', (req, res) => {
    Omaima.creatdefult((result) => {
      res.json(result);
    })
  });
// router.get()
router.get("/FILTER/:cat/:city", (req, res) => {

    let cat =req.params.cat;
    let city =req.params.city;
    // console.log('server',cat,city)

    // console.log("getdata");
    Omaima.getLost(result => {
        res.json(result)},cat,city);



  });





module.exports=router;
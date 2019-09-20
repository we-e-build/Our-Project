var express = require("express");;
var router= express.Router()

const Omaima = require("../database/Omaima");


router.get("/id",(req,res)=>{
   Omaima.init(() => {
    res.send("This is Omaima server")
    })
})




module.exports=router;
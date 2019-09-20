var express = require("express");;
var router= express.Router()

const Yasmin = require("../database/Yasmin");


router.get("/id",(req,res)=>{
   Yasmin.init(() => {
    res.send("This is yasmin server")
    })
})



 

module.exports=router;
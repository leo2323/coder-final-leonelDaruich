"use strict"
const express = require("express")
require("dotenv").config();
const router = express.Router()

router.get("/", (req,res)=>{
    res.render("index")
})

module.exports = router;
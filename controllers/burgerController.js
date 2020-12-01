const express = require("express");

let router = express.Router();

//Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/api/burgers", function(req, res){
    burger.all(function(data){
        res.json(data);
    });
});

// router.post("/api/burgers", function(req, res){

// })
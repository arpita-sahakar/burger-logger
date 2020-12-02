const express = require("express");

let router = express.Router();

//Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/api/burgers", function (req, res) {
  burger.all(function (data) {
    res.json(data);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(req.body.name, req.body.devoured, function (result) {
    res.json(result);
  });
});

router.put("/api/burgers/:id", function(req, res){

    let burgerObj = req.body;
    console.log(burgerObj);
    burger.update(burgerObj, req.params.id, function(result){
        res.json(result);
    })

});


module.exports = router;

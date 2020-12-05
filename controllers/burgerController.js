const express = require("express");

let router = express.Router();

//Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// fetch all the burger details from data base and render in index page
router.get("/", function(req,res){
  burger.all(function(data){
    let hbsObject = {
      burgers : data
    };
    console.log(data);
    res.render("index",hbsObject);
  })
})

// router.get("/api/burgers", function (req, res) {
//   burger.all(function (data) {
//     res.json(data);
//   });
// });

// this api will be invoked from frontend when submit button is clicked
router.post("/api/burgers", function (req, res) {
  burger.create(req.body.name, function (result) {
    res.json(result);
  });
});

// this api will be invoked from frontend when devour button is clicked
router.put("/api/burgers/:id", function(req, res){

    let burgerObj = req.body;
    console.log(burgerObj);
    burger.update(burgerObj, req.params.id, function(result){
        res.json(result);
    })

});

// export router
module.exports = router;

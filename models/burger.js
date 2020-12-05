// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// constant to hold the burger model with all, create & update functions 
const burger = {
    // to fetch all the burger details using orm
    all : function(cb){
        orm.all("burger", function(res){
            cb(res);
        })
    },
     // create a new burger using orm
    create : function(name, cb){
        let burgerCols = ["burger_name"];
        let burgerVals = [name];
        orm.create("burger", burgerCols, burgerVals, function(res){
            cb(res);
        })
    },
    // update an existing burger using orm
    update : function(objColVals, burgerId, cb){
        let condition = "id = " + burgerId;
        console.log("condition", condition);
        orm.update("burger", objColVals, condition, function(res){
            cb(res);
        });
    }
}

//export burger models
module.exports = burger;
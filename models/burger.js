// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all : function(cb){
        orm.all("burger", function(res){
            cb(res);
        })
    },
    create : function(name, cb){
        let burgerCols = ["burger_name"];
        let burgerVals = [name];
        orm.create("burger", burgerCols, burgerVals, function(res){
            cb(res);
        })
    },
    update : function(objColVals, burgerId, cb){
        let condition = "id = " + burgerId;
        console.log("condition", condition);
        orm.update("burger", objColVals, condition, function(res){
            cb(res);
        });
    }
}
module.exports = burger;
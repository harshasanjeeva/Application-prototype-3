var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username:{type:String, unique:true},
    email:String,
    phone:String,
    password:String,
    dob:String
});

var User = mongoose.model("users",userSchema);

module.exports = User;
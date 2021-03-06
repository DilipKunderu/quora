var mongoose = require('mongoose');
var User = require('../model/user');
const bcrypt = require('bcryptjs');

//module.exports.addUser = function(newUser, callback){
//    newUser.save(callback);
//}

module.exports = {
    getUserbyname : function(username,callback){
        const query = {username: username}
        User.findOne(query,callback);
    },

    addUser : function(newUser, callback){
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
          });
        });
    },
      
    comparePassword : function(candidatePassword, hash, callback){
        bcrypt.compare(candidatePassword,hash,function(err,isValid){
            if(err) throw err;
            callback(null, isValid);
        });
    },

    getUser : function(id) {
        var promise = new Promise((resolve, reject) => {
            resolve(User.findById(id)
                .populate({ path : 'followers'})
                .populate({ path : 'topics'})
                .populate({ path : 'following'})
            );
        // }).then((data) => {
            // console.log(data);
            // console.log(data.topics[0]._id);
        });
        return promise;
    }

}
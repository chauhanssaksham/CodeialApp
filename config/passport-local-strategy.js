const passport = require('passport');

const LocalStratergy = require('passport-local').Strategy;

const User = require('../models/user');

//Authentication using Passport
passport.use(new LocalStratergy({
    usernameField: 'email'
    },
    function(email, password, done){
        //find a user and establish the identity
        User.findOne({email: email},function(err,user){
            if (err){
                console.log("Error in finding user --> Passport");
            return done(err);
            }
            if (!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }
            return done(null, user);
        });
    }


));

//Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null, user.id);
});

//deSerialize the user from the key in the cookies
passport.deserializeUser(function(user,done){
    User.findById(id, function(err, user){
        if(err){
            console.log("Error in finding user --> Passport");
            return done(err);
        }
        return done(null, user);
    });
});

module.exports = passport;
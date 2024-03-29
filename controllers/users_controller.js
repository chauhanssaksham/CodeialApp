const User = require('../models/user')

module.exports.profile = function(req, res){
    res.render('./users/profile', {
        title:"Users Profile"
    });
}
module.exports.home = function(req, res){
    res.render('users/home', {
        title:"Users Home"
    });
}
module.exports.posts = function(req,res){
    res.render('./users/posts', {
        title:"Users Posts"
    });
}
//render the sign up page
module.exports.signup = function(req, res){
    return res.render('users/user_sign_up',{
        title: "Codeial Sign up"
    });
}
//render the sign in page
module.exports.singin = function(req, res){
    return res.render('users/user_sign_in',{
        title: "Codeial Sign In"
    });
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('Error in finding user in signing up'); return;}
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log("Error in creating user when signing up"); return;}
                return res.redirect('/users/sign-in');
            });
        }
        else{    
            return res.redirect('back');
        }
    });
}

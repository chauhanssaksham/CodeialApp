module.exports.profile = function(req, res){
    res.render('./users/profile', {
        title:"Users Profile"
    });
}
module.exports.home = function(req, res){
    res.render('./users/home', {
        title:"Users Home"
    });
}
module.exports.posts = function(req,res){
    res.render('./users/posts', {
        title:"Users Posts"
    });
}
module.exports.profile = function(req, res){
    res.send('<h1>User Profile</h1>');
}
module.exports.home = function(req, res){
    res.send("<h1>Users home</h1>");
}
module.exports.posts = function(req,res){
    res.send('<h1>Users/ Posts!</h1>');
}
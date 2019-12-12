module.exports.home = function(req,res){
    return res.render('home', {
        title: "Home"
    });
}
module.exports.contacts = function(req,res){
    res.render('contacts', {
        title:"Contacts"
    });
}
// module.exports.actionNmae = function(req, res){}
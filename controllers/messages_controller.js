module.exports.person1 = function(req,res){
    res.render('./messages/person1', {
        title:"Person1"
    });
}
module.exports.person2 = function(req,res){
    res.render('./messages/person2', {
        title:"Person2"
    });
}
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/codeial_development", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to DB"));

db.once('open', function(){
    console.log("connected to the Database :: MongoDB");
});

module.exports = db;
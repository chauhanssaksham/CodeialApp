const express = require('express');
const app = express();
const port = 8000;

//Use express Router
app.use('/', require('./routes'));
app.set('views engine', 'ejs');
app.set('views', './views');
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    else{
        console.log(`Server is running on port: ${port}`); 
    }
});
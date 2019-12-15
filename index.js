const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(express.static('./assets'));
//Use express Router
app.use(expressLayouts);
//Extract styles and scripts from subpages into head and bottom of layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes'));
//Use EJS-layouts:
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    else{
        console.log(`Server is running on port: ${port}`); 
    }
});
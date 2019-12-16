const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
//Require the passPort libraries
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(express.static('./assets'));
//Use express Router
app.use(expressLayouts);
//Extract styles and scripts from subpages into head and bottom of layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//Use EJS-layouts:
app.set('view engine', 'ejs');
app.set('views', './views');

app.set(session({
    name: 'codeial',
    //Todo: Change the secret before deployment in production mode
    secret: 'blahSomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    else{
        console.log(`Server is running on port: ${port}`); 
    }
});
// Dependencies
const express = require('express');
const exphbs = require('express-handlesbars');
const path = require('path');
const hbs = exphbs.create({});

// Express App Setup
const app = express();
const PORT = process.env.PORT || 3001;

// Setup handlebars providing the views
app.engine('handlesbars', hbs.engine);
app.set('view engine', 'handlesbars');

app.get("/",(req,res)=>res.render("index"));

app.get("/date",(req,res)=>{
    const today=(newDate()).toISOString();
    res.send(today);
});

// This starts server to initiate listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});
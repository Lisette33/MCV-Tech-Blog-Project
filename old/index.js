// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// Express App Setup
const app = express();
const PORT = process.env.PORT || 3001;

// Setup handlebars providing the views
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get("/",(req,res)=>res.render("index"));
app.get("/test",(req,res)=>res.render("test"));

app.get("/date",(req,res)=>{
    const today=(newDate()).toISOString();
    res.send(today);
});

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });

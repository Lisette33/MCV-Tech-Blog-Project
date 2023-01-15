// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(require('../Day 1/14-MVC/01-Activities/01-Ins_MVC-Handlebars-Intro/controllers/dish-routes'));

// HTML routes
app.get("/index-homepage",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/views/index-homepage.html"))
});

app.get("/index-dashboard",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/views/index-dashboard.html"))
});

app.get("/loginpage",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/views/loginpage.html"))
});

// API routes
app.get("/api/notes",(req,res)=>{
  res.json(db);
});

app.post("/api/index-dashboard",(req,res)=>{
  console.log(req.body)
  req.body.id=uuidv4();
  db.push(req.body)
  fs.writeFile("./db/db.json",JSON.stringify(db),(error)=>{
      if(error) {
        console.log(error);
        res.json(error);
      }
      res.json("You are requesting with POST");
    });
});

// DELETE route
app.delete("/api/dashboard/:id",(req,res)=>{
  console.log(req.params.id)
  const noteIndex=db.findIndex(note=>note.id==req.params.id)
  db.splice(noteIndex,1)
  fs.writeFile("./db/db.json",JSON.stringify(db),(error)=>{
      if(error) {
        console.log(error);
        res.json(error);
      }
    res.json("You are requesting with DELETE");
  });
});


// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});

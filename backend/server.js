const express = require('express');
const app = express();
const port = 3005;
const cors = require('cors');


app.use(cors());

// Hämtar alla Users
app.get("/", (req, res) => {
 
  res.json({ "users": ["userOne", "userTwo"] })
 
});

// Kollar om servern körs
app.listen(port, () => {
  console.log('YAY! Server listen on PORT: ' + port);
})

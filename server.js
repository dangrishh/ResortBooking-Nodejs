const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

  
const app = express();
const port = 7000

/* Middleware */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}))

/* Routes */
app.use(require("./routes/index"));


/* connecting mongodb using atlas cloud */  
mongoose.connect('mongodb+srv://admin:admin@crudnodejs.ydtzqky.mongodb.net/Resort-Booking?retryWrites=true&w=majority')
.then(() => {
  console.log('MongoDB is Already Connected!');

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
}).catch((error) => { 
  console.log(error); 
});
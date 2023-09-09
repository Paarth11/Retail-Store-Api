const express = require('express');
const app = express();
const PORT = 3000;
const connectDb = require('./db/index');
const costRoute = require('./routes/inputCost')
connectDb();


app.use(express.json());       
app.use(express.urlencoded({ extended: true }));

app.use('/',costRoute)

app.listen(PORT, () => {
  console.log('server is running');
});




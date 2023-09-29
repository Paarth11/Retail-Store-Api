const express = require('express');
const app = express();
const PORT = 3000;
const connectDb = require('./db/index');
const costRoute = require('./routes/inputCost')
const userRoute = require('./routes/auth')
const auth = require('./routes/auth')
connectDb();


app.use(express.json());       
app.use(express.urlencoded({ extended: true }));

app.use('/',costRoute)
app.use('/auth',userRoute)

app.listen(PORT, () => {
  console.log('server is running');
});




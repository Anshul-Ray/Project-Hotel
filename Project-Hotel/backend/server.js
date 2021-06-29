const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://hardik:hardik@exercise-tracker.neozz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, () => {
    console.log('Connection with MONGODB successfull.');
});


// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const hotelRouter = require('./routes/hotel');
const userRouter = require('./routes/user');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/hotel', hotelRouter);
app.use('/user', userRouter);


app.listen(port, () => {
    console.log(`Server running on the port: ${port}`);
})
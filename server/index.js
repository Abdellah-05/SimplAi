const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// import Routes
const authRoute = require('./routes/auth');

dotenv.config();

// connect dataBase
mongoose.connect(process.env.DB_PATH,  // dbPath exist in .env file that for make no one can see our db path what is
    { useNewUrlParser: true },
    () => console.log('connected to db')
);


// Middleware
app.use(express.json());
// route Middleware
app.use('/api/user', authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app runing on ${PORT} port`));
const router = require('express').Router();
const mongoose = require('mongoose');
const { collection } = require('../model/User');
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../middleware/validationUser')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// - REGISTRATION NEW USER
router.post('/register', async (req, res) => {
    // validate data befor saving user
    const {error} = registerValidation(req.body);  
    if (error) return res.status(400).send(error.details[0].message);

    // checking if the user already have account
    const userExist = await User.findOne({ email : req.body.email });
    if (userExist) return res.status(400).send('Email already axists.');

    // Haching password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : hashedPassword
    });
  
    const conn = mongoose.connection;
    
    try{
        const savedUser = await user.save();
        conn.collection('Users').insertOne(savedUser);
        res.send({"user" : user._id});
    }catch(err){
        res.status(400).send(err);
    }
});


// - LOGIN USER
router.post('/login', async (req, res) => {
    // validate data befor 
    const {error} = loginValidation(req.body);  
    if (error) return res.status(400).send(error.details[0].message);

    // checking if the user have account 
    const user = await User.findOne({ email : req.body.email });
    if (!user) return res.status(400).send('Email not found!');

    // check if password correct 
    const validPasword = await bcrypt.compare(req.body.password, user.password);
    if (!validPasword) return res.status(400).send('Invalid password !');

    // CREATION & ASSIGNING OUR TOCKEN
    const token = jwt.sign({_id : user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    });


// TEST
router.get('/users', async (req, res) => {
    const conn = await mongoose.connection;
    
    conn.collection('Users').find({}).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
        //db.close();
        });
    });


module.exports = router;
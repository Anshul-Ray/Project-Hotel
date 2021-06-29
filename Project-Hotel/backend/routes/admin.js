const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let Hotel = require('../models/hotel.model');
let User = require('../models/user.model');
let Admin = require('../models/admin.model');

// Amdin Routes : 
//          => Create an Admin
//          => Remove an Admin
//          => Login as Admin
router.post('/add', async (req, res) => {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const admin = new Admin({
        username: req.body.username,
        password: hashPassword
    })
    try {
        const savedAdmin = await admin.save();
        res.send({ admin: admin._id });
    } catch (err) {
        res.status(400).send(err);
    }
})
router.delete('/delete/:id', async (req, res) => {
    Admin.findByIdAndDelete(req.params.id)
        .then(admin => res.json("The Given Admin is deleted!"))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.post('/login', async (req, res) => {
    // checking if admin exists
    const admin = await Admin.findOne({ username: req.body.username });
    if (!admin) return res.status(400).send('Either the username or the password is wrong.');
    // checking if the password is correct
    const validPass = await bcrypt.compare(req.body.password, admin.password);
    if (!validPass) return res.status(400).send('Either the email or the password is wrong.');
    // Creating and assigning a token
    const token = jwt.sign({ _id: admin._id }, "JWT-Secret-Token");
    res.header('auth-token', token).send(token);
})
router.get('/', async (req, res) => {
    Admin.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
})
// Admin Routes OVER!


// Hotel Routes
//          => Create a Hotel
//          => Remove a Hotel
//          => Update a Hotel
//          => Get a Hotel

router.post('/add/hotel', async (req, res) => {
    const hotel = new Hotel({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        price: req.body.price
    });
    try {
        const savedHotel = await hotel.save();
        res.send({ hotel: hotel._id });
    } catch (err) {
        res.status(400).send(err);
    }
})
router.get('/hotel/:id', async (req, res) => {
    Hotel.findById(req.params.id)
        .then(hotel => res.json(hotel))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.get('/hotel', async (req, res) => {
    Hotel.find()
        .then(hotel => res.json(hotel))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.delete('/hotel/:id', async (req, res) => {
    Hotel.findByIdAndDelete(req.params.id)
        .then(admin => res.json("The Given Hotel is deleted!"))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.post('/hotel/:id/update', async (req, res) => {
    Hotel.findById(req.params.id)
        .then(hotel => {
            hotel.name = req.body.name;
            hotel.address = req.body.address;
            hotel.city = req.body.city;
            hotel.price = req.body.price;
            hotel.save()
                .then(() => res.json("Hotel Data updated!"))
            .catch(err => res.status(400).json("Error : " + err))
        })
        .catch(err => res.status(400).json("Error : " + err))
})

// User Routes
//      => Amdin can only delete the user

router.delete('/user/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(admin => res.json("The Given Hotel is deleted!"))
        .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;
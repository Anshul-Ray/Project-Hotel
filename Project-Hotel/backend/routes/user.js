const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let User = require('../models/user.model');
let Hotel = require('../models/hotel.model');
let Booking = require('../models/booking.model');
router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        password: hashPassword
    })
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/:id/update', async (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.dob = req.body.dob;
            user.password = req.body.password;
            user.save()
                .then(() => res.json("User Data updated!"))
                .catch(err => res.status(400).json("Error : " + err))
        })
        .catch(err => res.status(400).json("Error : " + err))
})

router.post('/login', async (req, res) => {
    // checking if admin exists
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Either the username or the password is wrong.');
    // checking if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Either the email or the password is wrong.');
    // Creating and assigning a token
    const token = jwt.sign({ _id: user._id }, "JWT-Secret-Token");
    res.header('auth-token', token).send(token);
})

router.post('/:id/:hotelId/book', async (req, res) => {
    const user = await User.findById(req.params.id);
    const hotel = await Hotel.findById(req.params.hotelId);
    const booking = new Booking({
        userId: user._id,
        hotelId: hotel._id,
        price: hotel.price,
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate
    })
    try {
        const savedBooking = await booking.save();
        res.send({ booking: booking._id });
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;
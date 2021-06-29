const router = require('express').Router();
let Hotel = require('../models/hotel.model');

router.post('/add', async (req, res) => {
    const hotel = new Hotel({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        price: req.body.price
    })
    try {
        const savedHotel = await hotel.save();
        res.send({ hotel: hotel._id });
    } catch (err) {
        res.status(400).send(err);
    }
})


router.get('/', (req, res) => {
    Hotel.find()
        .then(hotels => res.json(hotels))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.get('/:id', (req, res) => {
    Hotel.findById(req.params.id)
        .then(hotel => res.json(hotel))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.delete('/:id', async (req, res) => {
    Hotel.findByIdAndDelete(req.params.id)
        .then(admin => res.json("The Given Hotel is deleted!"))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/:id/update', async (req, res) => {
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

module.exports = router;
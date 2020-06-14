const express = require('express');
const router = express.Router();

const Apartment = require('../models/Apartment');
//get all apartments
router.get('/', (req, res) => {
  Apartment.find().then(apartments => res.json(apartments));
});
//add apartment
router.post('/', (req, res) => {
  const newApartment = Apartment({
    title: req.body.title,
    amount: req.body.amount,
    specification: req.body.specification,
    location: req.body.location
  });
  newApartment.save().then(apartment => res.json(apartment));
});
//update
router.put('/:id', (req, res) => {
  Apartment.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ success: true }))
    .catch(error => res.status(404).json({ success: false }));
});
// get apartment by id
router.get('/:id', (req, res) => {
  Apartment.findById(req.params.id)
    .then(apartment => res.json(apartment))
    .catch(error => res.status(404).json({ success: false }));
});
//delete apartment
router.delete('/:id', (req, res) => {
  Apartment.findById(req.params.id)
    .then(apartment =>
      apartment.remove().then(() => res.json({ success: true }))
    )
    .catch(error => res.status(404).json({ success: false }));
});

module.exports = router;

const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});
const upload = multer({ storage: storage });

const Apartment = require('../models/Apartment');
//get all apartments
router.get('/', (req, res) => {
  Apartment.find().then(apartments => res.json(apartments));
});

//add apartment
router.post('/', upload.single('apartmentImage'), (req, res) => {
  const newApartment = Apartment({
    title: req.body.title,
    amount: req.body.amount,
    specification: req.body.specification,
    location: req.body.location,
    apartmentImage: req.file.path
  });
  newApartment.save().then(apartment => res.json(apartment));
});
//update
router.put('/:id', upload.single('apartmentImage'), (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const title = body.title;
  const amount = body.amount;
  const specification = body.specification;
  const location = body.location;
  const apartmentImage = req.file.path;

  Apartment.findOneAndUpdate(
    id,
    {
      $set: {
        title,
        amount,
        specification,
        location,
        apartmentImage
      }
    },
    { new: true }
  )
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

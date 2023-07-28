const router = require('express').Router()

const Book = require('../models/book');

router.get('/', (req, resp) => {
    resp.send('App is Working');
  });

// Register data to book ResortRoom
router.post('/register', async (req, res) => {
    try {
        const user = new Book(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
        delete result.password;
        res.send(req.body);
        console.log(result);
        } else {
        console.log('User already register');
        }
    } catch (err) {
        res.send('Something Went Wrong');
    }
});
    
// Getting roombooked details
router.get('/get-room-data', async (req, res) => {
    try {
        const details = await Book.find({});
        res.send(details);
    } catch (error) {
        console.log(error);
    }
});

  
module.exports = router
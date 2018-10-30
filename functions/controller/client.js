const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/pune', (req, res) => {
  axios.get('https://us-central1-fitato-fit.cloudfunctions.net/app/api/options/pune', {
    auth: {
      username: 'akshay', 
      password: 'secret'
    }
  })
  .then(response => {
    res.render('index', {
      options: response.data
    });
  })
  .catch(err => console.log(err));
});

module.exports = router;

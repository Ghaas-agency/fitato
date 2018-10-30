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

// Handle search form submission.
router.post('/search', (req, res) => {
  const { activity, location } = req.body;

  if(activity === 'all' && location === 'all') {
    res.redirect('/partner/pune');
  } else if (activity === 'all' && location !== 'all') {
    res.redirect(`/partner/pune/${location}`);
  } else if (activity !== 'all' && location === 'all') {
    res.redirect(`/partner/pune/${activity}`);
  } else {
    res.redirect(`/partner/pune/${location}/${activity}`);
  }
});

module.exports = router;

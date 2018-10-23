const express = require('express');
const router = express.Router();

// Get Firebase Firestore models.
const db = require('../model/firestore');

router.get('/', async (req, res) => {
  res.render('home', {
    options: await db.getOptions()
  });
});

router.get('/options', async (req, res) => {
  res.json(await db.getOptions());
});

router.get('/activities', async (req, res) => {
  res.json(await db.allActivities());
});

router.get('/activities/:city', async (req, res) => {
  res.json(await db.allActivitiesCitywise(req.params.city));
});

router.get('/activities/:city/locations', async (req, res) => {
  res.json(await db.allActivitiesCitywise(req.params.city));
});

router.get('/locations', async (req, res) => {
  res.json(await db.allLocations());
});

router.get('/locations/:city', async (req, res) => {
  res.json(await db.allLocationsCitywise(req.params.city));
});

router.get('/locations/:city/:location', async (req, res) => {
  const { city, location } = req.params;

  if(city === 'pune' || city === 'hyderabad') {
    const currentLoc = await db.checkLocation(location, city);

    // If the location exists in that city, then send the results as response.
    (currentLoc) ? res.json(await db.getResultsByLocation(location)) : res.status(404).json({err: 'Does not exist.'});
  } else {
    res.status(404).json({err: 'City does not exist.'});
  }
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

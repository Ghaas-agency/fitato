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

router.get('/locations', async (req, res) => {
  res.json(await db.allLocations());
});

router.get('/locations/pune', async (req, res) => {
  res.json(await db.allLocationsPune());
});

router.get('/locations/hyderabad', async (req, res) => {
  res.json(await db.allLocationsHyderabad());
});

router.get('/pune/:id', async (req, res) => {
  const { id } = req.params;
  const currentLoc = await db.checkLocation(id);
  const currentAct = await db.checkActivity(id);

  // Check current route.
  if (currentLoc) {
    res.json(await db.getResults('loc', id));
  } else if (currentAct) {
    res.json(await db.getResults('act', id));
  } else {
    res.status(404).send('not found');
  }
});

router.get('/pune/:loc/:act', async (req, res) => {
  const { loc, act } = req.params;
  const currentLoc = await db.checkLocation(loc);
  const currentAct = await db.checkActivity(act);

  // Check current route.
  if(currentLoc && currentAct) {
    res.json(await db.getResults('both', loc, act));
  } else {
    res.status(404).send('not found');
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

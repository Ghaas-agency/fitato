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
    // render facility
    console.log(currentLoc);

    res.render('results', {
      options: await db.getOptions(),
      selector: 'loc',
      selected: id,
      results: await db.getResults('loc', id)
    });

  } else if (currentAct) {
    // render activity
    console.log(currentAct);

    res.render('results', {
      options: await db.getOptions(),
      selector: 'act',
      selected: id,
      /* results: await db.getResults('act', id) */
    });

  } else {
    // none found
    console.log('not found');
    res.status(404).send('not found');
  }
});

router.get('/pune/:loc/:act', async (req, res) => {
  const { loc, act } = req.params;

  const currentLoc = await db.checkLocation(loc);
  const currentAct = await db.checkActivity(act);

  // Check current route.
  if(currentLoc && currentAct) {
    // render results

    res.render('results', {
      options: await db.getOptions(),
      selector: 'both',
      selected: {loc, act},
      /* results: await db.getResults('act', loc, act) */
    });

  } else {
    // none found
    console.log('not found');

    res.status(404).send('not found');
  }

});

// Handle search form submission.
router.post('/search', (req, res) => {
  const { activity, location } = req.body;
  console.log(activity, location);
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

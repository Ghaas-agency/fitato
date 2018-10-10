const express = require('express');
const router = express.Router();

// Get Firebase Firestore models.
const db = require('../model/db');

router.get('/', async (req, res) => {
  res.render('home', {
    options: await db.getOptions()
  });
});

router.get('/pune', async (req, res) => {
  res.render('home', {
    options: await db.getOptions()
  });
});

router.get('/pune/:id', async (req, res) => {
  const { id } = req.params;
  const currentLoc = await db.checkLocation(id);
  const currentAct = await db.checkActivity(id);

  // Check current route.
  if(currentLoc) {
    // render facility
    console.log(currentLoc);
  } else {
    if(currentAct) {
      // render activity
      console.log(currentAct);
    } else {
      // none found
      console.log('not found');
    };
  }

  res.render('results', {
    options: await db.getOptions(),
    
  })
});

router.get('/pune/:loc/:act', async (req, res) => {
  const { loc, act } = req.params;

  const currentLoc = await db.checkLocation(loc);
  const currentAct = await db.checkActivity(act);

  // Check current route.
  if(currentLoc && currentAct) {
    // render results
    console.log(currentLoc, currentAct);
  } else {
    // none found
    console.log('not found');
  }

  res.render('results', {
    options: await db.getOptions(),
    
  })

});

// Handle search form submission.
router.post('/search', (req, res) => {
  const { activity, location } = req.body;
  console.log(activity, location);
  if(activity === 'all' && location === 'all') {
    res.redirect('/partner/pune');
  } else if (activity === 'all' && location ==! 'all') {
    res.redirect(`/partner/pune/${location}`);
  } else if (activity ==! 'all' && location === 'all') {
    res.redirect(`/partner/pune/${activity}`);
  } else {
    res.redirect(`/partner/pune/${location}/${activity}`);
  }
});

module.exports = router;

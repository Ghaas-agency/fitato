const express = require('express');
const router = express.Router();

// Get Firebase Firestore models.
const db = require('../model/firestore');

router.get('/options/:city', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
  res.json(await db.getOptions(req.params.city));
});

router.get('/activities', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
  res.json(await db.allActivities());
});

router.get('/activities/:city', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
  const response = await db.allActivitiesCitywise(req.params.city);
  res.json((response.length > 0) ? response : {err: 'City not found.'});
});

router.get('/activities/:city/:activity', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, s-maxage=86400');

  const { city, activity } = req.params;
  const currentAct = await db.checkActivity(activity, city);

  // If the activity exists in that city, then send the results as response.
  (currentAct) ? res.json(await db.getResultsByActivity(city, activity)) : res.status(404).json({err: 'Error: Not found.'});
});

router.get('/activities/:city/:activity/:location', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, s-maxage=86400');

  const { city, activity, location } = req.params;
  const currentAct = await db.checkActivity(activity, city);

  // If the activity exists in that city, then send the results as response.
  (currentAct) ? res.json(await db.getResultsByActivity(city, activity, location)) : res.status(404).json({err: 'Error: Not found.'});
});

router.get('/locations', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
  res.json(await db.allLocations());
});

router.get('/locations/:city', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
  res.json(await db.allLocationsCitywise(req.params.city));
});

router.get('/locations/:city/:location', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
  
  const { city, location } = req.params;

  const currentLoc = await db.checkLocation(location, city);

  // If the location exists in that city, then send the results as response.
  (currentLoc) ? res.json(await db.getResultsByLocation(location, city)) : res.status(404).json({err: 'Error: Not found.'});
});

module.exports = router;

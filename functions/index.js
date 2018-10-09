const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
admin.initializeApp(functions.config().firebase);

// Get rid of timestamp warning.
admin.firestore().settings({ timestampsInSnapshots: true });
const db = admin.firestore();
const activitiesRef = db.collection('activities');
const locationsPuneRef = db.collection('facilities-pune');

const app = express();

// Get options for search form.
async function getOptions() {
  const activities = await activitiesRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      arr.unshift({id: 'all', text: 'All'});
      return arr;
    })
    .catch(err => console.log(err));

  const locations = await locationsPuneRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      arr.unshift({id: 'all', text: 'All'});
      return arr;
    })
    .catch(err => console.log(err));
  
  const both = await {activities, locations};
  return both;
}

// Returns the ID of the current location, if found.
async function checkLocation(id) {
  const c = await locationsPuneRef.where('value', '==', id).get()
    .then(snap => {
      let re;
      snap.forEach(doc => {
        re = doc.id;
      });
      return re;
    })
    .catch(err => console.log(err));
  
  const r = await c;
  return r;
}

// Returns the ID of the current activity, if found.
async function checkActivity(id) {
  const c = await activitiesRef.where('value', '==', id).get()
    .then(snap => {
      let re;
      snap.forEach(doc => {
        re = doc.id;
      });
      return re;
    })
    .catch(err => console.log(err));

  const r = await c;
  return r;
}

// Handlebars middleware.
app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/partner', async (req, res) => {
  res.render('home', {
    options: await getOptions()
  });
});

app.get('/partner/pune/:id', async (req, res) => {
  const { id } = req.params;
  const currentLoc = await checkLocation(id);
  const currentAct = await checkActivity(id);

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
    options: await getOptions(),
    
  })
});

app.get('/partner/pune/:loc/:act', async (req, res) => {
  const { loc, act } = req.params;

  const currentLoc = await checkLocation(loc);
  const currentAct = await checkActivity(act);

  // Check current route.
  if(currentLoc && currentAct) {
    // render results
    console.log(currentLoc, currentAct);
  } else {
    // none found
    console.log('not found');
  }

  res.render('results', {
    options: await getOptions(),
    
  })

});

// Handle search form submission.
app.post('/partners/search', (req, res) => {
  const { activity, location } = req.body;
  if(activity === 'all' && location === 'all') {
    res.redirect('/partners/pune');
  } else if (activity === 'all' && location ==! 'all') {
    res.redirect(`/partners/pune/${location}`);
  } else if (activity ==! 'all' && location === 'all') {
    res.redirect(`/partners/pune/${activity}`);
  } else {
    res.redirect(`/partners/pune/${location}/${activity}`);
  }
});

// Handle 404 error
app.use((req, res, next) => {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

exports.app = functions.https.onRequest(app);

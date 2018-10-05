const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const hbs = require('express-handlebars');
admin.initializeApp(functions.config().firebase);

// Get rid of timestamp warning.
admin.firestore().settings({ timestampsInSnapshots: true });
const db = admin.firestore();

const app = express();

// Get options for search form.
async function getOptions() {
  const activities = await db.collection('activities').get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      return arr;
    })
    .catch(err => console.log(err));

  const locations = await db.collection('facilities-pune').get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      return arr;
    })
    .catch(err => console.log(err));
  
  const both = await {activities, locations};
  return both;
}

// Handlebars middleware.
app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/partner', async (req, res) => {
  res.render('home', {
    data: await getOptions()
  });
});

exports.app = functions.https.onRequest(app);

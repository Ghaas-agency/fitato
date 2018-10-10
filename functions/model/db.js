const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Get rid of timestamp warning.
admin.firestore().settings({ timestampsInSnapshots: true });
const db = admin.firestore();
const activitiesRef = db.collection('activities');
const locationsPuneRef = db.collection('facilities-pune');

// Get options for search form.
module.exports.getOptions = async () => {
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
module.exports.checkLocation = async id => {
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
module.exports.checkActivity = async id => {
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

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Get rid of timestamp warning.
admin.firestore().settings({ timestampsInSnapshots: true });

// Instantiate Firestore.
const db = admin.firestore();

// References to collections.
const activitiesRef = db.collection('activities');
const locationsPuneRef = db.collection('facilities-pune');

// Export options for search form.
module.exports.getOptions = async () => {
  const activities = await activitiesRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      arr.unshift({id: 'all', text: 'All Activities'});
      return arr;
    })
    .catch(err => console.log(err));

  const locations = await locationsPuneRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      arr.unshift({id: 'all', text: 'All Locations'});
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

// Export results.
const getResults = async (selector, id, id2) => {
  if(selector === 'loc') {
    // render /pune/aundh

    let r = {
      locationName: '',
      facilities: []
    };

    await locationsPuneRef.doc(id).get()
      .then(snap => {
        r.locationName = snap.data().text;
      })
      .catch(err => console.log(err));

    await locationsPuneRef.doc(id).collection('facilities').get()
      .then(snap => {
        let arrayFacilities = [];
        snap.forEach(doc => {
          let facility = {text: '', activities: []};
          facility.text = doc.data().text;
          doc.data().activities.forEach(activity => facility.activities.push(activity.get()));
          arrayFacilities.push(facility);
        });
        return arrayFacilities;
      })
      .then(async facilitiesSnaps => {
        
        let res = await facilitiesSnaps.map(async snap => {
          let obj = {text: '', activities: []};

          obj.text = snap.text;          
          
          /* snap.activities.forEach(promise => {
            promise.then(data => obj.activities.push(data.data().text));
          }); */

          const arr = await snap.activities.map(async promise => {
            const a = await promise
              .then(data => {
                return data.data().text;
              })
              .catch(err => console.log(err));
            const b = await a;
            return b;
          });

          /* console.log(arr); */
          obj.activities = await arr;
          return obj;
        });

        Promise.all(res);

        console.log(res);

        return res;
      })
      .catch(err => console.log(err));

    const res = await r;
    /* console.log(res); */
  } else if (selector === 'act') {
    // render /pune/gym
  } else if (selector === 'both') {
    // render /pune/aundh/gym
  }

  

}

getResults('loc', 'kalyani-nagar');

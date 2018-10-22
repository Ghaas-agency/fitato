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
const locationsHyderabadRef = db.collection('facilities-hyderabad');

// Export options for search form.
module.exports.getOptions = async () => {
  const activities = await activitiesRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      /* arr.unshift({id: 'all', text: 'All Activities'}); */
      return arr;
    })
    .catch(err => console.log(err));

  const locations = await locationsPuneRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      /* arr.unshift({id: 'all', text: 'All Locations'}); */
      return arr;
    })
    .catch(err => console.log(err));
  
  return await {activities, locations};
}

// Return an array of all activities.
module.exports.allActivities = async () => {
  const partners = await activitiesRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      return arr;
    })
    .catch(err => console.log(err));

  return await partners;
}

// Return an array of all activities of a city.
module.exports.allActivitiesCitywise = async (city) => {
  const partners = await activitiesRef.where('availability.' + city, '==', true).get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      return arr;
    })
    .catch(err => console.log(err));

  return await partners;
}

// Return an object of arrays of all locations in Pune and Hyderabad.
module.exports.allLocations = async () => {
  const locationsPune = await locationsPuneRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      return arr;
    })
    .catch(err => console.log(err));

  const locationsHyderabad = await locationsHyderabadRef.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      return arr;
    })
    .catch(err => console.log(err));

  return await {pune: locationsPune, hyderabad: locationsHyderabad};
}

// Return an array of all locations in Pune.
module.exports.allLocationsCitywise = async (city) => {
  let ref = '';
  if (city === 'pune') {
    ref = locationsPuneRef;
  } else if (city === 'hyderabad') {
    ref = locationsHyderabadRef;
  } else {
    return {err: 'Path does not exist.'}
  }
  const locations = await ref.get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      return arr;
    })
    .catch(err => console.log(err));

  return await locations;
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
  
  return await c;
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

  return await c;
}

// Export results.
module.exports.getResults = async (selector, id, id2) => {
  if(selector === 'loc') {
    // render /pune/aundh

    let result = {
      locationName: '',
      facilities: []
    };

    await locationsPuneRef.doc(id).get()
      .then(snap => {
        result.locationName = snap.data().text;
      })
      .catch(err => console.log(err));

    await locationsPuneRef.doc(id).collection('facilities').get()
      .then(snap => {
        let arr = [];
        snap.forEach(doc => arr.push(doc));
        return arr;
      })
      .then(async data => {
        const arrayFacilities = await data.map(async doc => {
          let facility = {text: '', activities: []};
          facility.text = await doc.data().text;

          const arr = await doc.data().activities.map(async activity => {
            const a = await activity.get()
              .then(snap => snap.data().text)
              .catch(err => console.log(err));

            return await a;
          });

          facility.activities = await Promise.all(arr);
          return facility;
        });

        result.facilities = await Promise.all(arrayFacilities);
      })
      .catch(err => console.log(err));

    return result;

  } else if (selector === 'act') {
    // render /pune/gym

    /* let result = {
      locationName: '',
      facilities: []
    };

    let result = {
      activityName = '',
      locations = [
        {
          locationName: '',
          facilities: [
            {
              text: '',
              activities: ['', '']
            },
            {
              text: '',
              activities: ['', '']
            }
          ]
        },
        {
          locationName: '',
          facilities: []
        }
      ]
    }

    

    return result; */

  } else if (selector === 'both') {
    // render /pune/aundh/gym



  }

  

}

/* getResults('loc', 'kalyani-nagar'); */

// add data
/* 
activitiesRef.get()
  .then(snap => {
    snap.forEach(doc => {
      let ref = activitiesRef.doc(doc.id).collection('pune').doc('000');

      return ref.set({
        location: 'ref'
      })
    })
  })
  .catch(err => console.log(err));

 */
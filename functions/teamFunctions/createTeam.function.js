const admin = require('firebase-admin');
const functions = require('firebase-functions');

const db = admin.firestore();
// createTeam({userID: '1234abcd', teamData: {teamID: 'team123'}});
module.exports.createTeam = functions.https.onCall(async (data, context) => {
  // if (!context.auth) {
  //   return { message: 'Authentication Required!', code: 401 };
  // }
  // data = JSON.parse(JSON.stringify(data));
  let userRef = db.collection('users').doc(data.userID);
  let ref = await db.collection('teams').add(data.teamData);
  let teamID = ref.id;
  await userRef.update({ teamID: teamID });
  return teamID;
});

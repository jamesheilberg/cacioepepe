const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.changeRegistrationSchedule = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    let userData = await db
      .collection("users")
      .doc(context.auth.uid)
      .get();
    if (userData.data().role != "admin") {
      return {
        message: "You are not authorized to perform this action",
        code: 401
      };
    }

    var startDate = data.startDate;
    var closeDate = data.closeDate;
    const application = db.collection("admin").doc("registrationSchedule");
    await application.update({
      open: startDate,
      close: closeDate
    });
    return;
  }
);

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

export const onUserCreated = functions.firestore
  .document("users/{userId}")
  .onCreate(async (snap, context) => {
    const db = admin.firestore();
    const usersRef = db.collection("users");
    const latestUser = await usersRef
      .orderBy("increment_id", "desc")
      .limit(1)
      .get();

    let lastIncrementId = 0;
    if (!latestUser.empty) {
      lastIncrementId = latestUser.docs[0].data().increment_id || 0;
    }

    const newIncrementId = lastIncrementId + 1;
    await snap.ref.update({ increment_id: newIncrementId });
  });
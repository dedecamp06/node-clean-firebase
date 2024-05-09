import * as admin from "firebase-admin";

export class FirestoreRepository {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    this.db = admin.firestore();
  }

  async createUser(name: string): Promise<string> {
    const docRef = this.db.collection("users").doc();
    await docRef.set({ name });
    return docRef.id;
  }
}

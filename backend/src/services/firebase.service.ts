import admin from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

class FirebaseService {
  async parseIdToken(tokenId: string): Promise<DecodedIdToken | null> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(tokenId);
      return decodedToken;
    } catch (err) {
      return null;
    }
  }

  async getUser(uid: string) {
    try {
      const user = await admin.auth().getUser(uid);
      return user;
    } catch (err) {
      return null;
    }
  }
}
export default new FirebaseService();

import admin from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

class FirebaseService {
  async parseIdToken(tokenId: string): Promise<DecodedIdToken | null> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(tokenId);
      return decodedToken;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
export default new FirebaseService();

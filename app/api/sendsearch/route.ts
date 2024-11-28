import {collection, getDocs} from "firebase/firestore";
import {db} from "@/utils/firebase";

export async function GET() {
  // get all accounts in the account collection to transfer data
  const accountsCollection = collection(db, "account");
  const querySnapshot = await getDocs(accountsCollection);
  const userIds = querySnapshot.docs.map((doc) => doc.id);
  return Response.json({data: userIds});
}

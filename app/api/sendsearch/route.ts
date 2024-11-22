import {collection, getDocs} from "firebase/firestore";
import {db} from "@/utils/firebase";

export async function GET() {
  const accountsCollection = collection(db, "account");
  const querySnapshot = await getDocs(accountsCollection);
  const userIds = querySnapshot.docs.map((doc) => doc.id);
  console.log(userIds);
  return Response.json({data: userIds});
}

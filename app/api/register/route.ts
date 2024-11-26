import {db} from "@/utils/firebase";
import bcrypt from "bcrypt";
import {doc, getDoc, setDoc} from "firebase/firestore";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request: Request) {
  const rawFormData = await request.json();
  const userid = rawFormData.mobilenumber + "@okbpi";
  const refdoc = doc(db, "account", userid);
  const response = await getDoc(refdoc);
  if (response.exists()) {
    return Response.json(2);
  }

  const saltRounds = 5;
  const hashedPassword = await bcrypt.hash(rawFormData.password, saltRounds);
  const hashedpin = await bcrypt.hash(rawFormData.bpipin, saltRounds);
  const balance = Math.floor(Math.random() * 10000);
  rawFormData.password = hashedPassword;
  rawFormData.bpipin = hashedpin;
  rawFormData.balance = balance;

  await setDoc(doc(db, "account", userid), rawFormData);
  //If registered redirect to login
  return Response.json(0);
}

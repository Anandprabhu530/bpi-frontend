import {db} from "@/utils/firebase";
import bcrypt from "bcrypt";
import {doc, getDoc, setDoc} from "firebase/firestore";

export async function POST(request: Request) {
  const rawFormData = await request.json();
  const userid = rawFormData.mobilenumber + "@okbpi";
  const refdoc = doc(db, "account", userid);
  const response = await getDoc(refdoc);
  if (response.exists()) {
    return Response.json(2);
  }

  // mention the number of saltround to randomize hash
  const saltRounds = 5;

  // compare the password hashes with bcrypt library
  const hashedPassword = await bcrypt.hash(rawFormData.password, saltRounds);
  const hashedpin = await bcrypt.hash(rawFormData.bpipin, saltRounds);

  // generate a random balance for now
  const balance = Math.floor(Math.random() * 10000);
  rawFormData.password = hashedPassword;
  rawFormData.bpipin = hashedpin;
  rawFormData.balance = balance;

  // create new use data in the account collection
  await setDoc(doc(db, "account", userid), rawFormData);

  //If registered redirect to login
  return Response.json(0);
}

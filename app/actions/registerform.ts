import {db} from "@/utils/firebase";
import bcrypt from "bcrypt";
import {doc, setDoc} from "firebase/firestore";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function registerform(formData: any) {
  "use server";
  const rawFormData = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    mobilenumber: formData.get("mobilenumber"),
    email: formData.get("email"),
    password: formData.get("password"),
    bpipin: formData.get("bpipin"),
    balance: 0,
  };
  const saltRounds = 5;
  const hashedPassword = await bcrypt.hash(rawFormData.password, saltRounds);
  const hashedpin = await bcrypt.hash(rawFormData.bpipin, saltRounds);
  const balance = Math.floor(Math.random() * 10000);
  const userid = rawFormData.mobilenumber + "@okbpi";
  rawFormData.password = hashedPassword;
  rawFormData.bpipin = hashedpin;
  rawFormData.balance = balance;

  const res = await setDoc(doc(db, "account", userid), rawFormData);
  console.log(res);
}

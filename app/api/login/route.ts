import {db} from "@/utils/firebase";
import bcrypt from "bcrypt";
import {doc, getDoc} from "firebase/firestore";

export async function POST(request: Request) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawFormData = await request.json();
  console.log(rawFormData);
  const userid = rawFormData.mobilenumber + "@okbpi";
  console.log(userid);
  const refdoc = doc(db, "account", userid);
  const res = await getDoc(refdoc);
  if (res.exists()) {
    const userInfo = res.data();
    const passwordMatch = await bcrypt.compare(
      rawFormData.password,
      userInfo.password
    );

    if (passwordMatch) {
      return Response.json(0);
    } else {
      //Password Not matched code - 1
      return Response.json(1);
    }
  } else {
    //user not registered yet
    return Response.json(1);
  }
}

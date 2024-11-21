import {db} from "@/utils/firebase";
import bcrypt from "bcrypt";
import {doc, getDoc} from "firebase/firestore";
import {redirect} from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function loginform(formData: any) {
  "use server";
  const rawFormData = {
    mobilenumber: formData.get("mobilenumber"),
    password: formData.get("password"),
  };
  const userid = rawFormData.mobilenumber + "@okbpi";
  const refdoc = doc(db, "account", userid);

  const res = await getDoc(refdoc);
  if (res.exists()) {
    const userInfo = res.data();
    const passwordMatch = await bcrypt.compare(
      rawFormData.password,
      userInfo.password
    );
    if (passwordMatch) {
      redirect(`/dashboard/${userInfo.mobilenumber}`);
    } else {
      console.log("Not Matched");
    }
  }
}

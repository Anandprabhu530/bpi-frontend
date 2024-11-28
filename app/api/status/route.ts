/* eslint-disable @typescript-eslint/no-explicit-any */
import {db} from "@/utils/firebase";
import {doc, getDoc} from "firebase/firestore";

export async function POST(request: Request) {
  const {senderId, transactionId} = await request.json();
  const refdoc = doc(db, "transactions", senderId);
  const res = await getDoc(refdoc);
  if (res.exists()) {
    const userInfo = res.data();
    let errorCode = 1;
    userInfo.values.forEach((item: any) => {
      if (item.transactionId === transactionId) {
        errorCode = item.errorCode;
      }
    });
    return Response.json(errorCode);
  } else {
    //user does not exists
    return Response.json(2);
  }
}

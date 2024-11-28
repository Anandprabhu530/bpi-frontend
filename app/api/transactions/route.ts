import {db} from "@/utils/firebase";
import {doc, getDoc} from "firebase/firestore";

export async function POST(request: Request) {
  const dataFromClient = await request.json();
  const userid = dataFromClient + "@okbpi";
  const refdoc = doc(db, "transactions", userid);
  const res = await getDoc(refdoc);
  if (res.exists()) {
    const userInfo = res.data();
    return Response.json(userInfo.values);
  }
  return Response.json({data: null});
  // return Response.json([
  //   {
  //     amount: 986,
  //     code: 200,
  //     debit: true,
  //     transactionId: "testid",
  //     to: "9876543210",
  //     transactionStatus: "status",
  //   },
  //   {
  //     amount: 756,
  //     code: 200,
  //     debit: false,
  //     transactionId: "testid",
  //     to: "9876543210",
  //     transactionStatus: "status",
  //   },
  //   {
  //     amount: 756,
  //     code: 500,
  //     debit: false,
  //     transactionId: "testid",
  //     to: "9876543210",
  //     transactionStatus: "status",
  //   },
  // ]);
}

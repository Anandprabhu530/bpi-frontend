import {db} from "@/utils/firebase";
import {doc, getDoc} from "firebase/firestore";

export async function POST(request: Request) {
  const dataFromClient = await request.json();
  const path = dataFromClient.split("/");
  const userid = path[path.length - 1] + "@okbpi";
  const refdoc = doc(db, "transactions", userid);
  const res = await getDoc(refdoc);
  if (res.exists()) {
    const userInfo = res.data();
    return Response.json({userInfo});
  }
  return Response.json({data: null});
}

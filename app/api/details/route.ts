import {db} from "@/utils/firebase";
import {doc, getDoc} from "firebase/firestore";

export async function POST(request: Request) {
  // const dataFromClient = await request.json();
  // const path = dataFromClient.split("/");
  // const userid = path[path.length - 1] + "@okbpi";
  // const refdoc = doc(db, "account", userid);
  // const res = await getDoc(refdoc);
  // if (res.exists()) {
  //   const userInfo = res.data();
  //   delete userInfo.password;
  //   delete userInfo.bpipin;
  //   return Response.json(userInfo);
  // }
  // return Response.json({data: null});

  return Response.json({
    userInfo: {
      mobilenumber: "9874563210",
      lastname: "user",
      balance: 9740,
      email: "asdfgh@gmail.com",
      firstname: "sample",
    },
  });
}

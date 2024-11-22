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
  return Response.json({
    userInfo: {
      password: "$2b$05$CnMaS/chEShlEMOOZQ0vI.Ml0N8/ZkfPF8DpkbinsDznHztI85RvK",
      mobilenumber: "9874563210",
      lastname: "user",
      balance: 9740,
      email: "asdfgh@gmail.com",
      bpipin: "$2b$05$YpC4jDxyaqpWry4j9jmO5.VVa4rXUdxfR/6USo2OFVrWC90uFFxkO",
      firstname: "sample",
    },
  });
}
// return Response.json({data: null});
// }

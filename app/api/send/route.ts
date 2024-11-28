import {app} from "@/utils/firebase";
import {getFunctions, httpsCallable} from "firebase/functions";
const functions = getFunctions(app);

// invoke the firebase function
const triggerpayment = httpsCallable(functions, "triggerpayment");

export async function POST(request: Request) {
  const data = await request.json();
  const response = await triggerpayment({payment: data});
  return Response.json({data: response.data});
}

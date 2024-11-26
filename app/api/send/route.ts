/* eslint-disable @typescript-eslint/no-explicit-any */
import {app} from "@/utils/firebase";
import {getFunctions, httpsCallable} from "firebase/functions";
const functions = getFunctions(app);

const triggerpayment = httpsCallable(functions, "triggerpayment");

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  const response: any = await triggerpayment({payment: data});
  console.log("Response");
  console.log(response);
  console.log("Response Data");
  console.log(response.data);

  return Response.json({data: response.data});
}

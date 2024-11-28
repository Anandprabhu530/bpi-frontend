import {db} from "@/utils/firebase";
import bcrypt from "bcrypt";

// Import necessary functions from firebase/firestore
import {doc, getDoc} from "firebase/firestore";

export async function POST(request: Request) {
  // Parse incoming JSON data from the request body
  const rawFormData = await request.json();

  // Construct the user document reference based on mobile number
  const userid = rawFormData.mobilenumber + "@okbpi";
  const refdoc = doc(db, "account", userid);

  // Fetch the user document from Firestore
  const res = await getDoc(refdoc);

  // Check if the user document exists
  if (res.exists()) {
    const userInfo = res.data(); // Extract user information from document

    // Compare hashed password from request with stored hash
    const passwordMatch = await bcrypt.compare(
      rawFormData.password,
      userInfo.password
    );

    if (passwordMatch) {
      // Password matched, return success response (code 0)
      return Response.json(0);
    } else {
      // Password not matched, return error response (code 1)
      return Response.json(1);
    }
  } else {
    // User document not found, return error response (code 1)
    return Response.json(1);
  }
}

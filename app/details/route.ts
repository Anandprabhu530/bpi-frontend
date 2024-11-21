export async function POST(request: Request) {
  const res = await request.json();
  const path = res.split("/");
  const userid = path[path.length - 1] + "@okbpi";

  return Response.json({res});
}

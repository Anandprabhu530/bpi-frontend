import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl flex-col">
      <div>Welcome to BPI Pay</div>
      <Link href={"/register"} className="text-blue-400 underline pt-6">
        Register here
      </Link>
    </div>
  );
}

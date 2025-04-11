import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 text-center p-8">
      <h1 className="text-3xl font-bold text-rose-500 mb-4">Dream Saving App</h1>
      <p className="text-gray-600 mb-6">Your journey to saving goals starts here.</p>
      <div className="space-x-4">
        <button
          onClick={() => router.push("/login")}
          className="bg-rose-400 text-white px-4 py-2 rounded-xl hover:bg-rose-500"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/subscribe")}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-300"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
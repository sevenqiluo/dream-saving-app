import React, { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return alert("Enter a valid email");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPlan", "free");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-rose-500 text-center">Welcome Back</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
          <button
            type="submit"
            className="w-full bg-rose-400 text-white py-2 rounded-xl hover:bg-rose-500"
          >
            Continue
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center">No password needed ✨</p>
      </div>
    </div>
  );
}
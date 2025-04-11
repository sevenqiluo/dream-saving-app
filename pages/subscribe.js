import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

export default function SubscribePage() {
  const handleSubscribe = async () => {
    const stripe = await stripePromise;
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId: "price_1RCMtrBNvP2zOsz8sYOZBOt2" })
    });
    const session = await res.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 p-6 flex flex-col items-center justify-center">
      <div className="max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6 text-center">
        <h1 className="text-3xl font-bold text-rose-500">Upgrade to Pro</h1>
        <p className="text-gray-600">Unlock premium features for your savings journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-xl p-4">
            <h2 className="text-xl font-semibold">Free Plan</h2>
            <ul className="text-sm text-left list-disc pl-5 mt-2 space-y-1">
              <li>Track 1 savings goal</li>
              <li>Basic progress bar</li>
              <li>Local-only data</li>
            </ul>
            <p className="mt-4 font-bold">$0/month</p>
          </div>

          <div className="border-2 border-rose-400 rounded-xl p-4 bg-rose-50">
            <h2 className="text-xl font-semibold text-rose-500">Pro Plan</h2>
            <ul className="text-sm text-left list-disc pl-5 mt-2 space-y-1">
              <li>Unlimited saving goals</li>
              <li>Cloud sync across devices</li>
              <li>Motivational quotes & AI tips</li>
              <li>Detailed monthly reports</li>
              <li>Celebration badges & rewards</li>
            </ul>
            <p className="mt-4 font-bold">$9.90/month</p>
            <button
              onClick={handleSubscribe}
              className="mt-4 w-full bg-rose-400 text-white py-2 rounded-xl hover:bg-rose-500"
            >
              Subscribe Now
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-400">Secure checkout powered by Stripe</p>
      </div>
    </div>
  );
}
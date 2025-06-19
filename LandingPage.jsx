
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#1e2b2d] flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">NeuraSkin™</h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl text-center">
        Personalized Skincare & Haircare powered by AI and Smart Diagnostics.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
        <Input placeholder="Enter your email" className="mb-4" />
        <Button className="w-full">Notify Me</Button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="bg-[#e2ebe8] p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Smart Scanner Device</h3>
          <p>Analyze your skin and hair in real-time using advanced sensors and AI.</p>
        </div>

        <div className="bg-[#e2ebe8] p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">AI Custom Formulations</h3>
          <p>Receive product recommendations perfectly tailored to your needs.</p>
        </div>

        <div className="bg-[#e2ebe8] p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Monthly Refill Plans</h3>
          <p>Get your custom products delivered monthly for consistent results.</p>
        </div>

        <div className="bg-[#e2ebe8] p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">DNA Kit Integration</h3>
          <p>Unlock next-level personalization using your genetic data.</p>
        </div>
      </div>

      <footer className="mt-20 text-sm text-center text-gray-500">
        © 2025 NeuraSkin. All rights reserved.
      </footer>
    </div>
  );
}

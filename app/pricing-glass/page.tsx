"use client";

import React, { useState } from "react";
import { PricingGlass } from "@/components/ui/pricing-glass";


type BgOption = {
  name: string;
  tw: string;
  buttonClass: string;
};

const BG_COLORS: BgOption[] = [
  { name: "Obsidian", tw: "bg-[#050505]", buttonClass: "bg-[#050505]" },
  { name: "Midnight Cosmos", tw: "bg-[#0D0B14]", buttonClass: "bg-[#0D0B14]" },
  { name: "Mariana Trench", tw: "bg-[#06101E]", buttonClass: "bg-[#06101E]" },
  { name: "Dark Moss", tw: "bg-[#0A120D]", buttonClass: "bg-[#0A120D]" },
  { name: "Volcanic Ash", tw: "bg-[#1A0B0B]", buttonClass: "bg-[#1A0B0B]" }
];

const DEMO_TIERS = [
  {
    name: "Basic",
    priceMonthly: "9",
    priceAnnual: "7",
    description: "Perfect for individuals and side projects.",
    features: ["1 Workspace", "Basic Analytics", "Community Support"]
  },
  {
    name: "Pro",
    priceMonthly: "29",
    priceAnnual: "24",
    description: "For professionals and growing teams.",
    isPopular: true,
    features: ["Unlimited Workspaces", "Advanced Analytics", "Priority Support", "Custom Domains"]
  },
  {
    name: "Ultra",
    priceMonthly: "99",
    priceAnnual: "79",
    description: "Maximum power for massive scale.",
    features: ["Unlimited Everything", "Predictive AI Insights", "24/7 Dedicated Support", "Custom Domains", "Biometric Security"]
  }
];

export default function PricingGlassDemo() {
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <div
      className={`relative w-full min-h-[900px] overflow-hidden ${BG_COLORS[bgIndex].tw} transition-colors duration-1000`}
    >

      {/* Background Selector */}
      <div className="absolute top-6 right-6 flex items-center gap-3 z-50 bg-black/40 backdrop-blur-xl p-2 rounded-full border border-white/10 shadow-2xl">
        <span className="text-white/60 text-[11px] font-bold tracking-wider uppercase px-2 pointer-events-none">Test Backgrounds</span>
        <div className="flex gap-2">
          {BG_COLORS.map((color, i) => (
            <button
              key={color.name}
              onClick={() => setBgIndex(i)}
              title={color.name}
              className={`w-6 h-6 rounded-full transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] ${
                bgIndex === i ? "scale-110 ring-2 ring-white ring-offset-2 ring-offset-black" : "hover:scale-110 border border-white/20"
              } ${color.buttonClass}`}
            />
          ))}
        </div>
      </div>

      {/* Component Wrapper */}
      <div className="w-full max-w-7xl mx-auto py-24 relative z-20">
        <PricingGlass tiers={DEMO_TIERS} />
      </div>

    </div>
  );
}

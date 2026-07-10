"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { WorldMap } from "@/components/ui/map";

const DOTS = [
  {
    start: { lat: 64.2008, lng: -149.4937, label: "Fairbanks" },
    end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
  },
  {
    start: { lat: 64.2008, lng: -149.4937, label: "Fairbanks" },
    end: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
    end: { lat: 38.7223, lng: -9.1393, label: "Lisbon" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 43.1332, lng: 131.9113, label: "Vladivostok" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
  },
];

function MapSection() {
  // next-themes резолвит тему только после маунта — рендерим карту
  // после этого, чтобы избежать hydration mismatch на её src и мигания.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="py-24 md:py-32 dark:bg-black bg-white w-full min-h-screen">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Global Network
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Connect with teams and clients worldwide. Our platform enables
          seamless collaboration across continents, bringing the world to your
          workspace.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {mounted && <WorldMap dots={DOTS} />}
      </div>
    </div>
  );
}

export default function MapDemo() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="ui-lab-map-theme"
    >
      <MapSection />
    </ThemeProvider>
  );
}

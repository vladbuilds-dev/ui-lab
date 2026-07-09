'use client';

import React, { useState, useEffect } from "react";
import type { Variants } from "framer-motion";
import { TextEffect } from "@/components/ui/text-effect";

const SAMPLE = "Animate your ideas with motion-primitives";

function PerChar() {
  return (
    <TextEffect per="char" preset="fade">
      {SAMPLE}
    </TextEffect>
  );
}

function WithPreset() {
  return (
    <TextEffect per="word" as="h3" preset="slide">
      {SAMPLE}
    </TextEffect>
  );
}

function CustomVariants() {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const fancyVariants: { container: Variants; item: Variants } = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: () => ({
        opacity: 0,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 90 - 45,
        scale: 0.3,
        color: getRandomColor(),
      }),
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        color: getRandomColor(),
        transition: { type: "spring", damping: 12, stiffness: 200 },
      },
    },
  };

  return (
    <TextEffect per="word" variants={fancyVariants}>
      {SAMPLE}
    </TextEffect>
  );
}

function CustomDelay() {
  return (
    <div className="flex flex-col space-y-0">
      <TextEffect
        per="char"
        delay={0.5}
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          },
          item: {
            hidden: { opacity: 0, rotateX: 90, y: 10 },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: { duration: 0.2 },
            },
          },
        }}
      >
        Animate your ideas
      </TextEffect>
      <TextEffect per="char" delay={1.5}>
        with motion-primitives
      </TextEffect>
      <TextEffect per="char" delay={2.5} className="pt-12 text-xs" preset="blur">
        (and delay!)
      </TextEffect>
    </div>
  );
}

function PerLine() {
  return (
    <TextEffect
      per="line"
      as="p"
      segmentWrapperClassName="overflow-hidden block"
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        },
        item: {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        },
      }}
    >
      {`now live on motion-primitives!
now live on motion-primitives!
now live on motion-primitives!`}
    </TextEffect>
  );
}

function WithExit() {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const blurSlideVariants: { container: Variants; item: Variants } = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.01 } },
      exit: { transition: { staggerChildren: 0.01, staggerDirection: 1 } },
    },
    item: {
      hidden: { opacity: 0, filter: "blur(10px) brightness(0%)", y: 0 },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px) brightness(100%)",
        transition: { duration: 0.4 },
      },
      exit: {
        opacity: 0,
        y: -30,
        filter: "blur(10px) brightness(0%)",
        transition: { duration: 0.4 },
      },
    },
  };

  return (
    <TextEffect
      className="inline-flex"
      per="char"
      variants={blurSlideVariants}
      trigger={trigger}
    >
      {SAMPLE}
    </TextEffect>
  );
}

const CASES: { label: string; node: React.ReactNode }[] = [
  { label: "per: char · preset: fade", node: <PerChar /> },
  { label: "per: word · preset: slide", node: <WithPreset /> },
  { label: "per: word · custom variants", node: <CustomVariants /> },
  { label: "per: char · staggered delay", node: <CustomDelay /> },
  { label: "per: line · custom", node: <PerLine /> },
  { label: "per: char · exit loop (2s)", node: <WithExit /> },
];

export default function TextEffectDemo() {
  // Некоторые кейсы (CustomVariants) используют Math.random() в variants —
  // рендерим анимации только после маунта, чтобы не ловить hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <header className="mb-14">
          <p className="font-mono text-[11px] tracking-[0.35em] text-neutral-500 uppercase mb-4">
            text-effect
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter">
            Text Effect
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-400 leading-relaxed">
            Примитив анимации текста: по символам, словам или строкам. Пресеты
            (fade / slide / blur / scale / shake) и полностью кастомные variants.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CASES.map((c) => (
            <div
              key={c.label}
              className="flex flex-col gap-5 rounded-xl border border-neutral-800 bg-neutral-950/60 p-6 min-h-[180px]"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                {c.label}
              </span>
              <div className="flex-1 flex items-center text-lg md:text-xl">
                {mounted && c.node}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

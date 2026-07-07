"use client";

import React, { useState } from "react";
import { Check, Copy, Loader2 } from "lucide-react";

type State = "idle" | "loading" | "done" | "error";

export function CopyPromptButton({
  id,
  className = "",
  label = "Скопировать промт",
}: {
  id: string;
  className?: string;
  label?: string;
}) {
  const [state, setState] = useState<State>("idle");

  async function handleCopy(e: React.MouseEvent) {
    // на карточке кнопка живёт внутри <Link> — не даём перейти по ссылке
    e.preventDefault();
    e.stopPropagation();
    if (state === "loading") return;

    setState("loading");
    try {
      const res = await fetch(`/api/prompt/${id}`);
      if (!res.ok) throw new Error("not found");
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setState("done");
      setTimeout(() => setState("idle"), 1800);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 1800);
    }
  }

  const Icon =
    state === "loading"
      ? Loader2
      : state === "done"
        ? Check
        : Copy;

  const text =
    state === "done"
      ? "Скопировано"
      : state === "error"
        ? "Ошибка"
        : label;

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      className={className}
    >
      <Icon
        className={`h-3.5 w-3.5 ${state === "loading" ? "animate-spin" : ""}`}
      />
      <span>{text}</span>
    </button>
  );
}

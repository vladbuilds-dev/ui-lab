"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getEntryByRoute } from "@/lib/registry";
import { CopyPromptButton } from "@/components/copy-prompt-button";

// Плавающая панель поверх каждого демо: назад в каталог + копировать промт.
// Рендерится из корневого layout, сама решает показываться или нет по роуту.
export function DemoToolbar() {
  const pathname = usePathname();
  const entry = getEntryByRoute(pathname);

  // на каталоге и неизвестных страницах — ничего не показываем
  if (!entry) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 p-1 pl-1 shadow-2xl backdrop-blur-md">
      <Link
        href="/"
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Каталог</span>
      </Link>
      <div className="h-4 w-px bg-white/15" />
      <CopyPromptButton
        id={entry.id}
        className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-black transition-colors hover:bg-white/90"
      />
    </div>
  );
}

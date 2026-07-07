import Link from "next/link";
import { REGISTRY } from "@/lib/registry";
import { CopyPromptButton } from "@/components/copy-prompt-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-14 md:mb-20">
          <p className="font-mono text-[11px] tracking-[0.35em] text-neutral-500 uppercase mb-4">
            Vlad build veb — component library
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            UI LAB
            <span className="text-neutral-500 font-light italic">
              {" "}
              / {REGISTRY.length} демо
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-sm md:text-base text-neutral-400 leading-relaxed">
            Интегрированные компоненты из библиотеки «Промты ui.txt»: Next.js +
            Tailwind + TypeScript. Открой демо или скопируй промт целиком, чтобы
            вставить компонент в свой проект.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {REGISTRY.map((d) => (
            <li key={d.id}>
              <Link
                href={d.route}
                className="group flex h-full flex-col border border-neutral-800 hover:border-neutral-500 rounded-xl p-5 transition-colors duration-300 bg-neutral-950/60"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono text-[10px] text-neutral-600 tracking-widest">
                    {d.num}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-600 group-hover:text-neutral-300 transition-colors">
                    OPEN →
                  </span>
                </div>
                <h2 className="text-lg font-semibold tracking-tight mb-1.5 group-hover:text-white">
                  {d.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-neutral-400 mb-4">
                  {d.desc}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-1.5">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-neutral-800 text-neutral-500"
                    >
                      {t}
                    </span>
                  ))}
                  <CopyPromptButton
                    id={d.id}
                    label="Промт"
                    className="ml-auto flex items-center gap-1.5 rounded-full border border-neutral-700 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400 transition-colors hover:border-neutral-400 hover:text-white"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <footer className="mt-16 pt-6 border-t border-neutral-900 flex items-center justify-between font-mono text-[10px] text-neutral-600 tracking-widest uppercase">
          <span>ui-lab · next.js + tailwind + ts</span>
          <span>2026</span>
        </footer>
      </div>
    </main>
  );
}

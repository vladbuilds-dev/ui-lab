import InkReveal from "@/components/ui/ink-reveal";

export default function DemoOne() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <header className="mb-8">
          <p className="font-mono text-[11px] tracking-[0.35em] text-neutral-500 uppercase mb-4">
            ink-reveal
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter">
            Ink Reveal
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-400 leading-relaxed">
            Наведи курсор на кадр — чернильная маска стирается мазками с живым
            «дрожащим» краем, обнажая изображение. Чистый canvas, без библиотек.
          </p>
        </header>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "440px",
            overflow: "hidden",
            borderRadius: "14px",
          }}
          className="border border-neutral-800"
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
            alt="Landscape"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <InkReveal />
        </div>
      </div>
    </main>
  );
}

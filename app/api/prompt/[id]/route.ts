import { NextResponse } from "next/server";
import { getPrompt } from "@/lib/prompts";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const prompt = await getPrompt(id);

  if (prompt === null) {
    return NextResponse.json({ error: "prompt not found" }, { status: 404 });
  }

  return new NextResponse(prompt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

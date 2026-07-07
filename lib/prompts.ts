import { promises as fs } from "fs";
import path from "path";

const PROMPTS_DIR = path.join(process.cwd(), "content", "prompts");

// Читает сырой текст промта. Только для серверного кода (route handlers,
// server components) — использует fs.
export async function getPrompt(id: string): Promise<string | null> {
  // защита от path traversal: id должен быть простым slug
  if (!/^[a-z0-9-]+$/.test(id)) return null;
  try {
    return await fs.readFile(path.join(PROMPTS_DIR, `${id}.txt`), "utf8");
  } catch {
    return null;
  }
}

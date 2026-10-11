"use server";

import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

import type { ApplyState } from "@/lib/apply-state";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PLATFORMS = new Set(["ios", "android", "both"]);

function clean(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim();
}

async function emailAlreadyApplied(file: string, email: string) {
  let raw = "";
  try {
    raw = await readFile(file, "utf8");
  } catch {
    return false;
  }

  for (const line of raw.split("\n")) {
    if (!line) continue;
    try {
      const row = JSON.parse(line) as { email?: string };
      if (row.email === email) return true;
    } catch {
      continue;
    }
  }

  return false;
}

export async function applyForAccess(
  _previous: ApplyState,
  formData: FormData,
): Promise<ApplyState> {
  const trap = clean(String(formData.get("company") ?? ""));
  if (trap) return { status: "success" };

  const name = clean(String(formData.get("name") ?? "")).replace(/\s+/g, " ");
  const email = clean(String(formData.get("email") ?? "")).toLowerCase();
  const platform = clean(String(formData.get("platform") ?? ""));
  const note = clean(String(formData.get("note") ?? ""));

  const fieldErrors: NonNullable<ApplyState["fieldErrors"]> = {};

  if (name.length < 2 || name.length > 80) {
    fieldErrors.name = "Enter your name.";
  }
  if (!EMAIL.test(email) || email.length > 120) {
    fieldErrors.email = "Enter a valid email.";
  }
  if (!PLATFORMS.has(platform)) {
    fieldErrors.platform = "Choose a phone.";
  }
  if (note.length > 400) {
    fieldErrors.note = "Keep the note under 400 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the fields and try again.",
      fieldErrors,
    };
  }

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "applications.jsonl");

    if (await emailAlreadyApplied(file, email)) {
      return {
        status: "error",
        message: "Check the fields and try again.",
        fieldErrors: { email: "This email already applied." },
      };
    }

    const row = {
      id: crypto.randomUUID(),
      name,
      email,
      platform,
      note,
      createdAt: new Date().toISOString(),
    };

    await appendFile(file, `${JSON.stringify(row)}\n`, "utf8");
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Could not save your application. Try again in a moment.",
    };
  }
}

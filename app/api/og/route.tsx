import { generateOGImage } from "@/lib/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "trigr";
  const description = searchParams.get("description") || "";
  const category = searchParams.get("category") || undefined;

  return generateOGImage(title, description, category);
}

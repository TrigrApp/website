import { generateOGImage } from "@/lib/og";
import { docMeta } from "@/lib/seo";

export const runtime = "edge";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const meta = docMeta[slug];
  if (!meta) return generateOGImage("trigr", "", "Docs");

  return generateOGImage(meta.title, meta.description, "Docs");
}

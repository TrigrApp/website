import { generateOGImage } from "@/lib/og";
import { packageMeta } from "@/lib/seo";

export const runtime = "edge";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const meta = packageMeta[slug];
  if (!meta) return generateOGImage("trigr", "", "Packages");

  return generateOGImage(meta.title, meta.description, "Package");
}

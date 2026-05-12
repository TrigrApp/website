import { ImageResponse } from "next/og";

export const runtime = "edge";

const geistRegular = fetch(
  "https://fonts.cdnfonts.com/s/121513/Geist-Regular.woff",
)
  .then((res) => res.arrayBuffer())
  .catch(() => null);

const geistBold = fetch("https://fonts.cdnfonts.com/s/121513/Geist-Bold.woff")
  .then((res) => res.arrayBuffer())
  .catch(() => null);

export async function generateOGImage(
  title: string,
  description: string,
  category?: string,
): Promise<ImageResponse> {
  const [regular, bold] = await Promise.all([geistRegular, geistBold]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fonts: any[] = [];
  if (regular) fonts.push({ name: "Geist", data: regular, weight: 400 });
  if (bold) fonts.push({ name: "Geist", data: bold, weight: 700 });

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #09090b 0%, #1a0a2e 40%, #09090b 80%, #1a0a2e 100%)",
        padding: "72px 80px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Geist, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.08)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.05)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "44px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "rgba(139, 92, 246, 0.5)",
          fontSize: "18px",
          fontWeight: 500,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 512 512">
          <rect x="48" y="48" width="416" height="416" rx="96" fill="#1a1a2e" />
          <path
            d="M192,160 L152,160 L120,216 L120,296 L152,352 L192,352"
            stroke="#8b5cf6"
            strokeWidth="32"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M320,160 L360,160 L392,216 L392,296 L360,352 L320,352"
            stroke="#8b5cf6"
            strokeWidth="32"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M272,128 L208,256 L248,256 L232,384 L336,240 L276,240 Z"
            fill="#a78bfa"
            stroke="#c4b5fd"
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </svg>
        <span>trigr</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "720px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {category && (
          <div
            style={{
              color: "rgba(139, 92, 246, 0.6)",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            {category}
          </div>
        )}
        <h1
          style={{
            fontSize: title.length > 35 ? "48px" : "64px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#fafafa",
            margin: "0",
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.4,
              color: "rgba(161, 161, 170, 0.9)",
              margin: "4px 0 0 0",
              maxWidth: "600px",
            }}
          >
            {description.length > 180
              ? description.slice(0, 177) + "..."
              : description}
          </p>
        )}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts,
    },
  );
}

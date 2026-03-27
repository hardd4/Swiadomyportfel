import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ŚwiadomyPortfel – Skończ z impulsywnym kupowaniem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "48px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "#f97316",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: "26px", fontWeight: 900 }}>SP</span>
          </div>
          <span style={{ color: "white", fontSize: "28px", fontWeight: 900 }}>
            Świadomy<span style={{ color: "#f97316" }}>Portfel</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          CZY WIESZ ILE{" "}
          <span style={{ color: "#f97316" }}>PIENIĘDZY TRACISZ</span>{" "}
          PRZEZ IMPULS?
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "28px",
            color: "#737373",
            marginTop: "32px",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Sprawdzony system kontroli wydatków. Zatrzymaj impuls zanim wydasz pieniądze.
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "48px",
            background: "#f97316",
            color: "white",
            fontSize: "22px",
            fontWeight: 900,
            padding: "18px 40px",
            borderRadius: "14px",
          }}
        >
          swiadomyportfel.pl
        </div>
      </div>
    ),
    { ...size }
  );
}

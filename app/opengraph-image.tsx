import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "58px 62px",
          background:
            "radial-gradient(circle at top left, rgba(126, 202, 221, 0.16), transparent 28%), #f5f1e8",
          color: "#171b22",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(21, 34, 52, 0.12)",
            borderRadius: 28,
            padding: "46px 50px",
            background: "rgba(255, 253, 250, 0.82)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#5b6574",
              fontSize: 24,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#245f72" }}>HD</span>
            <span
              style={{
                width: 56,
                height: 1,
                background: "linear-gradient(to right, #245f72, transparent)",
              }}
            />
            <span>{profile.name}</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              maxWidth: 900,
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: 84,
                lineHeight: 0.96,
                letterSpacing: "-0.06em",
              }}
            >
              {profile.headline}
            </div>
            <div
              style={{
                color: "#4d5663",
                fontSize: 30,
                lineHeight: 1.45,
                maxWidth: 860,
              }}
            >
              {profile.subheadline}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              color: "#4d5663",
              fontSize: 24,
            }}
          >
            <span>{profile.epigraph}</span>
            <span>himanshudongre.com</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#101722",
          color: "#f4efe6",
          borderRadius: 36,
          fontSize: 86,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          position: "relative",
          fontFamily: "Georgia, Times New Roman, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            width: 42,
            height: 4,
            borderRadius: 999,
            background: "#7ecadd",
          }}
        />
        <span>HD</span>
      </div>
    ),
    size,
  );
}

export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="fx-grid" />
      <div className="fx-noise" />
      <div className="fx-scanline" />
      <div
        className="glow-orb orb-drift"
        style={{
          width: 420,
          height: 420,
          top: -140,
          right: -120,
          background: "rgba(0,212,255,0.10)",
        }}
      />
      <div
        className="glow-orb orb-drift"
        style={{
          width: 320,
          height: 320,
          bottom: -80,
          left: -80,
          background: "rgba(139,92,246,0.10)",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}

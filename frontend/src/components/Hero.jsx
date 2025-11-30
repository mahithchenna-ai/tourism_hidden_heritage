import React from "react";

/**
 * Hero component:
 * - uses a CSS background (cover + center) so image positioning is correct
 * - uses different hero image than Explore
 * - treadmill images have onError fallback to an inline SVG placeholder
 * - reduced height so Explore cards appear below without scrolling too far
 */

const placeholderDataUri =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'>
      <rect width='600' height='400' fill='#f3f4f6'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#94a3b8' font-family='Arial' font-size='16'>Image not available</text>
    </svg>`
  );

export default function Hero() {
  // New hero (different from Explore banner)
  const heroImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

  // treadmill: reliable unsplash scenery (distinct images)
  const treadmillImages = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505765056220-1f7a9b8b2c46?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526481280698-7b1b4a7b9c8b?auto=format&fit=crop&w=1200&q=80"
  ];

  function handleImgError(e) {
    if (e && e.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = placeholderDataUri;
      e.currentTarget.alt = "Placeholder image";
    }
  }

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        height: "68vh",           // slightly shorter so Explore section is visible
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.65)"
      }}
    >
      {/* overlay */}
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,10,0.08), rgba(10,10,10,0.55))",
        }}
      />

      {/* content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          maxWidth: 900,
          padding: "2rem",
        }}
      >
        <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Discover Hidden Heritage
        </h1>
        <p className="hero-subtitle" style={{ marginTop: 12 }}>
          Local stories, guided trips, and community-first travel experiences.
        </p>
        <a
          className="hero-cta"
          href="/explore"
          style={{
            display: "inline-block",
            marginTop: 18,
            padding: "0.9rem 1.6rem",
            borderRadius: 999,
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            boxShadow: "0 8px 20px rgba(37,99,235,0.25)",
          }}
        >
          Explore Trips
        </a>
      </div>

      {/* treadmill */}
      <div
        className="photo-treadmill"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 180,
          overflow: "hidden",
          background: "linear-gradient(to top, rgba(10,10,10,0.45), rgba(10,10,10,0.0))"
        }}
      >
        <div
          className="treadmill-track"
          style={{
            display: "flex",
            gap: 14,
            alignItems: "flex-end",
            padding: "12px 48px",
            animation: "scroll 30s linear infinite",
          }}
        >
          {treadmillImages.map((src, i) => (
            <img
              key={i}
              className="treadmill-image"
              src={src}
              alt={`scroll-${i}`}
              onError={handleImgError}
              style={{
                minWidth: 300,
                height: 160,
                objectFit: "cover",
                borderRadius: 10,
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                background: "#fff"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

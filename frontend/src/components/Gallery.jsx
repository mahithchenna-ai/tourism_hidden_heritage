import React from "react";

/**
 * Gallery with graceful fallbacks.
 * Accepts images = [{ src, alt, caption }]
 * If an image is missing, an inline SVG placeholder will be used.
 */
export default function Gallery({ images = [] }) {
  const placeholderSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'>
      <rect width='600' height='400' fill='#f3f4f6'/>
      <g fill='#cbd5e1' font-family='Arial, Helvetica, sans-serif'>
        <text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle' fill='#94a3b8' font-size='16'>Image not available</text>
      </g>
    </svg>`
  );
  const placeholderDataUri = `data:image/svg+xml;charset=utf-8,${placeholderSvg}`;

  function handleImgError(e) {
    if (e && e.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = placeholderDataUri;
      e.currentTarget.alt = "Placeholder image";
    }
  }

  return (
    <section className="gallery" style={{ padding: 32 }}>
      <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16, maxWidth: 1200, margin: "0 auto" }}>
        {images.length === 0 && (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "#666" }}>
            No gallery images available. Put images in <code>/public/images/</code> and update the galleryImages list.
          </div>
        )}
        {images.map((img, i) => (
          <figure className="gallery-item" key={i} style={{ margin: 0 }}>
            <img
              src={img.src}
              alt={img.alt || `gallery-${i}`}
              loading="lazy"
              width="600"
              height="400"
              style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10, display: "block" }}
              onError={handleImgError}
            />
            {img.caption && <figcaption style={{ marginTop: 6, fontSize: 14, color: "#333" }}>{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}

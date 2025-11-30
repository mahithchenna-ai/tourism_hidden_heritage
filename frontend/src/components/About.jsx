import React from "react";

export default function About({
  heading = "About Hidden Heritage",
  paragraph = `We connect travellers with local guides and small businesses to preserve culture, create income for communities, and build unforgettable experiences.`,
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/4/44/Ater_Fort.jpg",
}) {
  return (
    <section className="about-section" style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="about-container" style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
        
        <div className="about-image-wrapper" style={{ flex: "1 1 400px" }}>
          <img
            src={imageUrl}
            alt="About Heritage"
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
            }}
          />
        </div>

        <div className="about-text" style={{ flex: "1 1 400px" }}>
          <h2 style={{ marginBottom: "1rem" }}>{heading}</h2>
          <p style={{ color: "#333", lineHeight: "1.6", fontSize: "1.1rem" }}>
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}

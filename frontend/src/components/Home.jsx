import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ marginTop: "80px" }}>
      <Hero />

      {/* Explore Section */}
      <section
        style={{
          padding: "4rem 1.5rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <h2 className="section-title">Explore Regions</h2>
        <p className="section-subtitle">Start your journey with the Chambal region</p>

        <div className="cards-grid">
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Chambal_River_Ravines.jpg/1280px-Chambal_River_Ravines.jpg"
              alt="Chambal"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">Chambal Region</h3>
              <p className="card-description">
                Ancient ravines, temples, wildlife & forgotten stories.
              </p>
              <Link to="/region/chambal" className="card-button">
                Explore Region
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: "4rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <About />
      </section>
    </main>
  );
}

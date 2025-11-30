import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import "../components/site.css";

// Explicit scenic images to avoid unexpected results
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain lake",
    caption: "Scenic mountain lake",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlit canyon",
    caption: "Sunlit canyon",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888042-8b61c0b6a7b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Forest path",
    caption: "Peaceful forest path",
  },
];

export default function Home() {
  return (
    <main style={{ marginTop: "80px" }}>
      <Hero />

      <div style={{ padding: "4rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <About />
      </div>

      <div style={{ padding: "4rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Gallery images={galleryImages} />
      </div>
    </main>
  );
}

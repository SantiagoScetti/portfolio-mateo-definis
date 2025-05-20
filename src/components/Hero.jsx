import React from "react";
import "./Hero.css";

const Hero = () => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  return (
    <header className="hero">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${"MyHeaderPicture_qt1qfw"}.jpg)`,
        }}
      ></div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>MATEO DE FINIS | FOTÓGRAFO</h1>
        <p>Digital & Film Córdoba/Corrientes🇦🇷</p>
      </div>
    </header>
  );
};

export default Hero;

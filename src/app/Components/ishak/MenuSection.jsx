"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const MenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector(".menu-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="menu-section">
      <div className="container">
        <div className={`content-wrapper ${isVisible ? "animate-in" : ""}`}>
          {/* Two Column Layout */}
          <div className="two-column-layout">
            {/* Left Column - Additional Image */}
            <div className="image-column">
              <div className="image-wrapper">
                <Image
                  src="/img-6.webp"
                  alt="Kulinarische Kreationen"
                  fill
                  className="menu-image"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="content-column">
              <div className="hero-content">
                <h2 className="hero-title">
                  Unsere
                  <span className="title-accent"> Speisekarte</span>
                </h2>

                <p className="hero-description">
                  Entdecken Sie eine Welt voller Geschmack mit unseren
                  sorgfältig zusammengestellten Gerichten aus den besten
                  regionalen Zutaten.
                </p>

                <div className="cta-group" style={{ marginTop: "30px" }}>
                  <Link href="/menu" className="theme-btn style5">
                    <span>Speisekarte entdecken</span>
                  </Link>

                  <Link href="/reservation" className="theme-btn style5">
                    Tisch reservieren
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-section {
          background-color: #111111;
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 100px 0;
        }

        .container {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .content-wrapper {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .content-wrapper.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .image-column {
          position: relative;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
        }

        .menu-image {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .image-wrapper:hover .menu-image {
          transform: scale(1.05);
        }

        .content-column {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .hero-content {
          text-align: left;
          max-width: 100%;
        }

        .content-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 30px;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
        }

        .content-badge span {
          color: white;
          font-size: 0.9rem;
          font-weight: 300;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 200;
          color: white;
          margin-bottom: 30px;
          line-height: 1.1;
          letter-spacing: 3px;
        }

        .title-accent {
          font-weight: 600;
          background: linear-gradient(45deg, #ffffff, #f0f0f0);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          position: relative;
        }

        .hero-description {
          color: #cccccc;
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 50px;
          letter-spacing: 0.5px;
        }

        .cta-group {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
        }

        .primary-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #111111;
          padding: 18px 35px;
          font-size: 1.1rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .primary-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 0, 0, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .primary-button:hover::before {
          left: 100%;
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .primary-button:hover .button-icon {
          transform: translate(3px, -3px);
        }

        .secondary-button {
          color: white;
          font-size: 1rem;
          font-weight: 300;
          text-decoration: none;
          letter-spacing: 1px;
          padding: 12px 0;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .secondary-button:hover {
          border-bottom-color: white;
          letter-spacing: 2px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .menu-section {
            min-height: 60vh;
            padding: 80px 0;
          }

          .two-column-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .image-wrapper {
            height: 300px;
          }

          .hero-content {
            text-align: center;
          }

          .cta-group {
            align-items: center;
          }

          .hero-title {
            font-size: 2.8rem;
            letter-spacing: 2px;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .cta-group {
            gap: 25px;
          }

          .primary-button {
            padding: 16px 30px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .menu-section {
            min-height: 50vh;
            padding: 60px 0;
          }

          .two-column-layout {
            gap: 40px;
          }

          .image-wrapper {
            height: 250px;
          }

          .container {
            padding: 0 15px;
          }

          .hero-title {
            font-size: 2.2rem;
            letter-spacing: 1px;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 40px;
          }

          .content-badge span {
            font-size: 0.8rem;
          }

          .primary-button {
            padding: 15px 25px;
            font-size: 0.95rem;
          }
        }

        @media (min-width: 769px) {
          .cta-group {
            flex-direction: row;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default MenuSection;

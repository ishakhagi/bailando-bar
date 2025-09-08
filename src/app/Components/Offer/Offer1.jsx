"use client";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer1 = () => {
  useEffect(() => {
    loadBackgroudImages();
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const offerItems = [
    {
      img: "/img-1.webp",
      title1: "Getränke",
      title2: "Cocktails & Mocktails",
      content: "limits Time Offer",
      addClass: "theme-btn style4",
      color: "#e99f3e",
    },
    {
      img: "/assets/img/offer/offerThumb1_2.png",
      title1: "Mexikanische Speisen",
      title2: "Mexikanische Speisen & Snacks",
      content: "limits Time Offer",
      addClass: "theme-btn style4",
      color: "#b7002e",
    },
    {
      img: "/assets/img/offer/offerThumb1_3.png",
      title1: "Feiern",
      title2: "Top Ambiente für jeden Anlass",
      content: "limits Time Offer",
      addClass: "theme-btn style4",
      color: "#007d3d",
    },
  ];

  return (
    <div
      className="fix"
      style={{
        paddingTop: "200px",
      }}
    >
      <div className="offer-wrapper">
        <div className="container">
          <div className="row gy-4">
            {offerItems.map((item, i) => (
              <div key={i} className="col-lg-6 col-xl-4">
                <div
                  style={{
                    paddingBottom: "50px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  className="offer-card style1 hover-card"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  data-background="/img-2.webp"
                >
                  <div
                    className="offer-content"
                    style={{
                      position: "relative",
                      zIndex: "2",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <h6
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: item.color,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "10px",
                        opacity: "0.9",
                      }}
                      data-aos="fade-right"
                      data-aos-delay={100 + i * 150}
                    >
                      {item.title1}
                    </h6>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "#ffffff",
                        marginBottom: "20px",
                        lineHeight: "1.3",
                      }}
                      data-aos="fade-left"
                      data-aos-delay={200 + i * 150}
                    >
                      {item.title2}
                    </h3>
                    <Link
                      href="https://reservations.allo.restaurant/de/bailando-munchen"
                      className={item.addClass}
                      data-aos="zoom-in"
                      data-aos-delay={300 + i * 150}
                      target="_blank"
                    >
                      Reservieren
                      <i
                        className="bi bi-arrow-right"
                        style={{
                          transition: "transform 0.3s ease",
                        }}
                      ></i>
                    </Link>
                  </div>

                  {/* Overlay für besseren Kontrast */}
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, ${item.color}47 100%)`,
                      zIndex: "1",
                      transition: "all 0.3s ease",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card:hover .animated-border {
          opacity: 1;
        }

        /* Gradient animation für Buttons */
        .theme-btn {
          background: linear-gradient(45deg, #ff5733, #ffc300, #ff5733);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Parallax-like effect on scroll */
        @media (prefers-reduced-motion: no-preference) {
          .offer-card {
            transform-style: preserve-3d;
          }
        }
      `}</style>
    </div>
  );
};

export default Offer1;

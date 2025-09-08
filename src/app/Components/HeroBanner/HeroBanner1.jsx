"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroBanner1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      easing: "ease-out",
      once: true,
    });
  }, []);
  const bannerStyles = {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(/hero-1.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: 1,
  };

  const contentStyles = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "50px 20px",
  };

  const logoStyles = {
    width: "1000px",
    maxWidth: "90vw",
    height: "auto",
    display: "block",
    margin: "0 auto 0px auto",
    objectFit: "contain",
  };

  const logoContainerStyles = {
    marginBottom: "40px",
  };

  const buttonsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  };

  return (
    <section style={bannerStyles}>
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        {/* Logo in der Mitte */}
        <div
          style={logoContainerStyles}
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <Image
            height={400}
            width={800}
            src="/Bailando Logo.svg"
            alt="Mexikan Bar & Kitchen Logo"
            style={logoStyles}
          />
        </div>

        {/* Buttons darunter */}
        <div
          style={buttonsContainerStyles}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link
            href="/menu"
            className="theme-btn style4"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            Speisekarte
          </Link>
          <Link
            href="https://reservations.allo.restaurant/de/bailando-munchen"
            className="theme-btn style4"
            data-aos="zoom-in"
            target="_blank"
            data-aos-delay="1000"
          >
            Reservieren
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;

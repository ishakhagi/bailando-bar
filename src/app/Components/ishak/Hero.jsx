"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="banner-section fix">
      <div className="banner-wrapper bg-img">
        <div className="overlay"></div>

        {/* Animated Particles */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="banner-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="banner-title-area">
                  <div className="banner-style1">
                    {/* Large Centered Logo */}
                    <div className="hero-logo-large">
                      <Image
                        src="/logo.webp"
                        alt="Bailando Logo"
                        width={800}
                        height={230}
                        className="logo-image-large"
                      />
                    </div>

                    <div className="section-title">
                      <p className="text">
                        Entdecken Sie exquisite Aromen und unvergessliche
                        kulinarische Erlebnisse in unserem Restaurant mit
                        frischen, hochwertigen Zutaten.
                      </p>
                      <Link className="theme-btn" href="/menu">
                        Jetzt reservieren
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom Hero Styles - Large Logo Layout */
        .hero-logo-large {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInDown 1s ease-out;
        }

        /* Remove title styles since we're focusing on logo */
        .section-title .title {
          display: none;
        }

        /* Enhanced subtitle styling */
        .section-title .sub-title {
          animation: fadeInUp 1s ease-out 0.3s both;
          margin-bottom: 1.5rem;
          font-size: 24px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* Enhanced text styling */
        .section-title .text {
          animation: fadeInUp 1s ease-out 0.6s both;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2.5rem;
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.95;
        }

        /* Enhanced button styling */
        .section-title .theme-btn {
          animation: fadeInUp 1s ease-out 0.9s both;
          margin-top: 0;
          padding: 15px 35px !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .highlight {
          background: linear-gradient(45deg, var(--theme), var(--theme2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(45deg, var(--theme), var(--theme2));
          animation: highlightGlow 2s ease-in-out infinite alternate;
        }

        @keyframes highlightGlow {
          0% {
            box-shadow: 0 0 5px rgba(235, 0, 41, 0.5);
          }
          100% {
            box-shadow: 0 0 20px rgba(235, 0, 41, 0.8);
          }
        }

        /* Floating Particles Animation */
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 2;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          width: 4px;
          height: 4px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 8s;
        }

        .particle:nth-child(2) {
          width: 6px;
          height: 6px;
          top: 60%;
          left: 20%;
          animation-delay: 1s;
          animation-duration: 7s;
        }

        .particle:nth-child(3) {
          width: 3px;
          height: 3px;
          top: 40%;
          left: 80%;
          animation-delay: 2s;
          animation-duration: 9s;
        }

        .particle:nth-child(4) {
          width: 5px;
          height: 5px;
          top: 80%;
          left: 70%;
          animation-delay: 3s;
          animation-duration: 6s;
        }

        .particle:nth-child(5) {
          width: 4px;
          height: 4px;
          top: 30%;
          left: 60%;
          animation-delay: 4s;
          animation-duration: 8s;
        }

        .particle:nth-child(6) {
          width: 7px;
          height: 7px;
          top: 70%;
          left: 40%;
          animation-delay: 5s;
          animation-duration: 7s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-40px) translateX(-5px) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-20px) translateX(-10px) scale(1.05);
            opacity: 0.5;
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Enhanced Banner Wrapper */
        .banner-wrapper {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: black;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .banner-wrapper .overlay {
          animation: overlayPulse 4s ease-in-out infinite alternate;
        }

        /* Center align the banner content */
        .banner-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .banner-title-area {
          text-align: center;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        .banner-style1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .section-title {
          position: relative;
          z-index: 5;
          text-align: center;
          width: 100%;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes overlayPulse {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.5;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .logo-image-large {
            width: 300px;
            height: 120px;
          }

          .section-title .sub-title {
            font-size: 20px !important;
            letter-spacing: 1px;
          }

          .section-title .text {
            padding: 0 1rem;
            font-size: 16px;
          }

          .section-title .theme-btn {
            padding: 12px 25px !important;
            font-size: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .logo-image-large {
            width: 250px;
            height: 100px;
          }

          .section-title .sub-title {
            font-size: 18px !important;
          }

          .section-title .text {
          }

          .hero-logo-large {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

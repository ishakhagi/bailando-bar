"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About2 = () => {
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <section className="about-us-section fix section-padding pt-0" style={{}}>
      <div className="about-wrapper style2">
        <div className="container">
          <div className="about-us section-padding">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                <div className="about-thumb mb-5 mb-lg-0">
                  <Image src="/img-6.webp" alt="img" width={875} height={780} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="title-area">
                  <motion.h2
                    className="title text-start wow fadeInUp"
                    data-wow-delay="0.7s"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    UNSERE SPEISEKARTE
                  </motion.h2>
                  <motion.div
                    className="text text-start wow fadeInUp"
                    data-wow-delay="0.8s"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Jedes Gericht wird mit Leidenschaft und traditionellen
                    mexikanischen Rezepten zubereitet. Unsere erfahrenen Köche
                    verwenden nur die frischesten Zutaten und authentische
                    Gewürze, um Ihnen den wahren Geschmack Mexikos zu bringen.
                  </motion.div>
                </div>
                <div className="fancy-box-wrapper">
                  <motion.div
                    className="fancy-box"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="item">
                      <h6>Authentische Rezepte</h6>
                      <p>
                        Traditionelle mexikanische Küche mit frischen Zutaten
                        und original Gewürzen
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="fancy-box"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="item">
                      <h6>Mexikanische Köche</h6>
                      <p>
                        Unsere Chefs bringen die echten Aromen Mexikos direkt
                        auf Ihren Teller
                      </p>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="/about"
                    className="theme-btn style4"
                    style={{ marginTop: "40px" }}
                  >
                    Speisekarte ansehen
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item style1">
              <span className="text-slider"></span>
              <span className="text-slider text-style">TACOS AL PASTOR</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">BURRITOS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">QUESADILLAS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">NACHOS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">ENCHILADAS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">GUACAMOLE FRESCO</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">MARGARITAS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">TACOS AL PASTOR</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">BURRITOS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">QUESADILLAS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">NACHOS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">ENCHILADAS</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">GUACAMOLE FRESCO</span>
              <span className="text-slider"></span>
              <span className="text-slider text-style">MARGARITAS</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About2;

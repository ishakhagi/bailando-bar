"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImagesSection = () => {
  // Verfügbare Bilder aus dem public Ordner
  const images = [
    {
      id: 1,
      src: "/img-1.webp",
      alt: "Restaurant Image 1",
      title: "Delicious Food 1",
    },
    {
      id: 2,
      src: "/img-2.webp",
      alt: "Restaurant Image 2",
      title: "Delicious Food 2",
    },
    {
      id: 3,
      src: "/img-3.webp",
      alt: "Restaurant Image 3",
      title: "Delicious Food 3",
    },
    {
      id: 4,
      src: "/img-4.webp",
      alt: "Restaurant Image 4",
      title: "Delicious Food 4",
    },
    {
      id: 5,
      src: "/img-5.webp",
      alt: "Restaurant Image 5",
      title: "Delicious Food 5",
    },
    {
      id: 6,
      src: "/hero-1.webp",
      alt: "Hero Image",
      title: "Hero Food",
    },
    {
      id: 2,
      src: "/img-2.webp",
      alt: "Restaurant Image 2",
      title: "Delicious Food 2",
    },
    {
      id: 3,
      src: "/img-3.webp",
      alt: "Restaurant Image 3",
      title: "Delicious Food 3",
    },
    {
      id: 4,
      src: "/img-4.webp",
      alt: "Restaurant Image 4",
      title: "Delicious Food 4",
    },
    {
      id: 5,
      src: "/img-5.webp",
      alt: "Restaurant Image 5",
      title: "Delicious Food 5",
    },
    {
      id: 6,
      src: "/hero-1.webp",
      alt: "Hero Image",
      title: "Hero Food",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // AOS initialisieren
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation Dauer
      offset: 100, // Abstand vom Viewport
      easing: "ease-in-out", // Animation Easing
      once: true, // Animation nur einmal abspielen
    });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      className="images-section"
      style={{
        paddingTop: "150px",
      }}
    >
      <div className="container">
        {/* Images Grid */}
        <Grid container spacing={2}>
          {images.map((image, i) => (
            <Grid
              item
              xs={12}
              sm={12}
              key={i}
              onClick={() => openModal(image)}
              data-aos="fade-up"
              data-aos-delay={i * 100} // Verzögerung für jeden Eintrag
            >
              <Image src={image.src} alt={image.alt} height={400} width={400} />
            </Grid>
          ))}
        </Grid>

        {/* Modal für vergrößerte Ansicht */}
        {selectedImage && (
          <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-content">
              <button onClick={closeModal} className="modal-close">
                ×
              </button>
              <div className="modal-image-wrapper">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="modal-image"
                  sizes="100vw"
                />
              </div>
              <div className="modal-info">
                <h3 className="modal-title">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImagesSection;

"use client";
import { menu_de } from "./menu_de";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "./Menu.css";

const MenuContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRestaurant = searchParams.get("restaurant") === "yes";

  return (
    <div className="menu-container">
      <div className="menu-overlay"></div>
      <div className="menu-content">
        {/* Google Bewertungs-Banner */}
        {isRestaurant && (
          <div className="google-review-banner">
            <div className="banner-content">
              <div className="banner-icon">
                <img
                  height={80}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                />
              </div>
              <div className="banner-text">
                <h3>Gratis Shot für deine Google-Bewertung!</h3>
                <p>
                  Hinterlasse uns eine 5-Sterne-Bewertung auf Google und erhalte
                  einen kostenlosen Shot deiner Wahl!
                </p>
              </div>
              <div className="banner-action">
                <a
                  href="https://share.google/wYqHlOaUwP8mGdlZ5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-button"
                >
                  Jetzt bewerten
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Happy Hour Banner */}
        <div className="happy-hour-banner">
          <div className="happy-hour-content">
            <div className="happy-hour-icon">🍹</div>
            <div className="happy-hour-info">
              <h3>HAPPY HOUR</h3>
              <p>Täglich 17 - 20 Uhr und ab 23 Uhr</p>
              <div className="happy-hour-prices">
                <span>Normale Cocktails 6,90€</span>
                <span>Jumbo Cocktails 9,90€</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sections-grid">
          {menu_de.map((section, sectionIndex) => (
            <SectionView
              key={sectionIndex}
              section={section}
              onSubSectionClick={(productIndex) =>
                router.push(`/menu/${sectionIndex}/${productIndex}`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuContent />
    </Suspense>
  );
};

const SectionView = ({ section, onSubSectionClick }) => {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">{section.section}</h2>
        <p className="section-subtitle">{section.subtitle}</p>
      </div>

      <div className="subsections-grid">
        {section.subSections.map((subSection, index) => (
          <SubSectionCard
            key={index}
            subSection={subSection}
            onClick={() => onSubSectionClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

const SubSectionCard = ({ subSection, onClick }) => {
  return (
    <div className="subsection-card" onClick={onClick}>
      <div className="card-image-container">
        <img
          src={subSection.thumbnail}
          alt={subSection.title}
          className="card-image"
        />
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{subSection.title}</h3>
        <p className="card-description">{subSection.subtitle}</p>
        <div className="card-cta">
          <span className="cta-text">Ansehen</span>
          <svg
            className="cta-arrow"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Menu;

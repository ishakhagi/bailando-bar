"use client";
import { menu_de } from "./menu_de";
import { useRouter } from "next/navigation";
import "./Menu.css";

const Menu = () => {
  const router = useRouter();

  return (
    <div className="menu-container">
      <div className="menu-overlay"></div>
      <div className="menu-content">
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

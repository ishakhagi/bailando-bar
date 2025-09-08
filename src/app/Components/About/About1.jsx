import Image from "next/image";
import Link from "next/link";

const About1 = () => {
  const aboutContent = {
    img1: "/img-3.webp",
    img2: "/img-4.webp",
    img3: "/img-4.webp",
    img4: "/img-4.webp",
    subtitle: "About US",
    title: "UNSERE SPEISEKARTE",
    content:
      "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that",
    btnName: "Speisekarte",
    btnUrl: "/menu",
  };

  return (
    <section
      className="about-us-section fix"
      style={{
        background: "#111111",
      }}
    >
      <div className="about-wrapper style1">
        <div className="shape1 d-none d-xxl-block">
          <Image src={aboutContent.img1} alt="img" width={432} height={552} />
        </div>

        <div className="shape4 d-none d-xxl-block">
          <Image src={aboutContent.img3} alt="img" width={432} height={552} />
        </div>

        <div className="container">
          <div
            className="about-us section-padding"
            style={{
              background: "#111111",
            }}
          >
            <div className="row">
              <div className="col-12">
                <div className="title-area">
                  <h2
                    className="title wow fadeInUp"
                    data-wow-delay="0.7s"
                    style={{
                      color: "white !important",
                    }}
                  >
                    {aboutContent.title}
                  </h2>
                  <div className="text wow fadeInUp" data-wow-delay="0.8s">
                    {aboutContent.content}
                  </div>
                  <div
                    className="wow fadeInUp"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    data-wow-delay="0.9s"
                  >
                    <Link className="theme-btn" href={aboutContent.btnUrl}>
                      Zur Speisekarte
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;

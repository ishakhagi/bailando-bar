import Image from "next/image";
import Link from "next/link";

const About3 = () => {
  return (
    <div className="about-section fix" id="ueber">
      <div className="about-wrapper section-padding  style3">
        <div className="container">
          <div className="row gx-60 gy-5">
            <div className="col-xl-6">
              <div className="about-thumb-img">
                <Image src="/about.webp" alt="img" width={618} height={586} />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-content">
                <div className="title-area">
                  <div
                    className="sub-title text-start wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    Über Uns{" "}
                  </div>
                  <h2
                    className="title text-start wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    Authentische Mexikanische Küche & Lebendige Bar-Atmosphäre
                  </h2>
                  <div
                    className="text text-start wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    Willkommen in unserem mexikanischen Restaurant, wo
                    traditionelle Aromen auf moderne Gastfreundschaft treffen.
                    Seit Jahren bringen wir die authentischen Geschmäcker
                    Mexikos nach Deutschland und kreieren unvergessliche
                    Erlebnisse mit unseren handgemachten Tortillas, frischen
                    Zutaten und kreativen Cocktails.
                  </div>
                </div>

                <Link
                  href="https://reservations.allo.restaurant/de/bailando-munchen"
                  className="theme-btn style4"
                  target="_blank"
                >
                  Zur Reservierung <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;

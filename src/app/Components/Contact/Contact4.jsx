"use client";
import Image from "next/image";
import { useState } from "react";

const Contact4 = () => {
  const [formData, setFormData] = useState({
    name: "",
    telefon: "",
    email: "",
    betreff: "",
    nachricht: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Client-seitige Validierung
    if (!formData.name || !formData.betreff || !formData.nachricht) {
      setMessage("Name, Betreff und Nachricht sind Pflichtfelder.");
      setMessageType("error");
      setLoading(false);
      return;
    }

    if (!formData.email && !formData.telefon) {
      setMessage(
        "Bitte geben Sie entweder eine E-Mail-Adresse oder Telefonnummer an."
      );
      setMessageType("error");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setMessageType("success");
        // Formular zurücksetzen
        setFormData({
          name: "",
          telefon: "",
          email: "",
          betreff: "",
          nachricht: "",
        });
      } else {
        setMessage(result.error);
        setMessageType("error");
      }
    } catch (error) {
      setMessage(
        "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut."
      );
      setMessageType("error");
    }

    setLoading(false);
  };

  return (
    <div id="kontakt">
      <div className="contact-us-section section-padding fix">
        <div className="contact-box-wrapper style2">
          <div className="container">
            <div className="row gy-4">
              <div className="col-md-6 col-xl-3">
                <div className="contact-box style1 border-0">
                  <div className="contact-icon">
                    {" "}
                    <Image
                      className="rounded-circle"
                      src="/phone.webp"
                      alt="img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="title">Telefonnummer</h3>
                  <p>
                    <a href="tel:+49 177 2412498">+49 177 2412498</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="contact-box style1 border-0">
                  <div className="contact-icon">
                    <Image
                      className="rounded-circle"
                      src="/mail.webp"
                      alt="img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="title">E-Mail-Adresse</h3>
                  <p>
                    <a href="mailto:info@bailando-bar.de">
                      info@bailando-bar.de
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="contact-box style1 border-0">
                  <div className="contact-icon">
                    <Image
                      className="rounded-circle"
                      src="/gps.webp"
                      alt="img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="title">Location</h3>
                  <p>Kaflerstraße 2, 81241 München</p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="contact-box style1 border-0">
                  <div className="contact-icon">
                    <Image
                      className="rounded-circle"
                      src="/time.webp"
                      alt="img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="title">Öffnungszeiten</h3>
                  <p>
                    Mo - Do 17:00 - 00:00 Uhr <br /> Fr - Sa 17:00 - 02:00 Uhr{" "}
                    <br /> So 17:00 - 00:00 Uhr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section style2 section-padding pt-0 fix">
        <div className="contact-form-wrapper style2">
          <div className="container">
            <div className="row gx-60 gy-5">
              <div className="col-12">
                <div className="contact-form style2">
                  <h2>Kontakt aufnehmen</h2>
                  {message && (
                    <div
                      className={`alert ${
                        messageType === "success"
                          ? "alert-success"
                          : "alert-danger"
                      }`}
                      style={{
                        padding: "15px",
                        marginBottom: "20px",
                        border: "1px solid",
                        borderRadius: "4px",
                        borderColor:
                          messageType === "success" ? "#d4edda" : "#f8d7da",
                        backgroundColor:
                          messageType === "success" ? "#d1ecf1" : "#f8d7da",
                        color:
                          messageType === "success" ? "#155724" : "#721c24",
                      }}
                    >
                      {message}
                    </div>
                  )}
                  <form className="row" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <input
                        className="bg-color2"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Vollständiger Name *"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="bg-color2"
                        type="tel"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleInputChange}
                        placeholder="Telefonnummer"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="bg-color2"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E-Mail-Adresse"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="bg-color2"
                        type="text"
                        name="betreff"
                        value={formData.betreff}
                        onChange={handleInputChange}
                        placeholder="Betreff *"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="nachricht"
                        value={formData.nachricht}
                        onChange={handleInputChange}
                        className="form-control bg-color2"
                        placeholder="Schreiben Sie hier Ihre Nachricht... *"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div
                      className="col-12"
                      style={{
                        marginBottom: "15px",
                        fontSize: "14px",
                        color: "#666",
                      }}
                    >
                      <p>* Pflichtfelder</p>
                      <p>
                        Bitte geben Sie entweder eine E-Mail-Adresse oder
                        Telefonnummer an.
                      </p>
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button
                        className="theme-btn w-100"
                        type="submit"
                        disabled={loading}
                        style={{
                          opacity: loading ? 0.7 : 1,
                          cursor: loading ? "not-allowed" : "pointer",
                        }}
                      >
                        {loading ? "WIRD GESENDET..." : "JETZT SENDEN"}
                        {!loading && (
                          <i className="fa-sharp fa-regular fa-arrow-right-long bg-transparent text-white"></i>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-wrapper contact-area-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.965726927131!2d11.457254276939555!3d48.14946597124479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e77fcdd6085b1%3A0xbd44514291930a3d!2sPasinger%20Hofg%C3%A4rten%2C%20Kaflerstra%C3%9Fe%202%2C%2081241%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1756554608154!5m2!1sde!2sde"
          height="550"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact4;

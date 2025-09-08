const Footer1 = () => {
  return (
    <footer className="footer-section bg-title fix">
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              Website designed by <a href="https://www.codinary.de">Codinary</a>
            </p>
            <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
              <li>
                <a className="text-white" href="/impressum-datenschutz">
                  Datenschutzerklärung und Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;

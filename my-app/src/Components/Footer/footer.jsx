import "./footer.scss";
import letterY from "../../images/logoBlue.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-distributed" id="contacts">
        <div className="footer-left">
          <div className="footer-left-text">
            <img src={letterY} alt="logo" />
            <h3>Fruits</h3>
          </div>

          <p className="footer-links">
            <a href="#home">Home</a>·<a href="#about">About</a>·
            <a href="#contacs">Contact</a>
          </p>

          <p className="footer-company-name">Fruits-Ekb © 2022</p>
        </div>

        <div className="footer">
          <div className="contain">
            <div className="col">
              <h1>Contacts</h1>
              <ul>
                <li>+7(912) 999-99-99</li>
                <li>Services</li>
                <li>Get in touch</li>
              </ul>
              <div className="footer-icons">
                <a href="http://facebook.com">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="http://twitter.com">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="http://linkedin.com">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

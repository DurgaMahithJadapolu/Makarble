import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import footerImage from "../images/line_bar_of_footer-bg-removed.png"; // Add the path to your image here
import "../StyleSheet.css"; // Custom CSS file for additional styling
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-image-wrapper">
        <img src={footerImage} alt="Footer Top" className="ftimg" />
      </div>
      <Container>
        <Row>
          <Col md={3}>
            <div className="footer-column">
              <h4>Makerble</h4>
              <ul className="footer-links">
                <li>About us</li>
                <li>Terms & Conditions</li>
                <li>Privacy & Cookies</li>
              </ul>

              <div className="contact-info mt-5">
                <p>Contact Us:</p>
                <p>
                  <a href="mailto:contact@makerble.com">contact@makerble.com</a>
                </p>
                <p>020 8123 6253</p>
              </div>
              <p>© Makerble 2023</p>
            </div>
          </Col>
          <Col md={2}>
            <div className="footer-column">
              <h4>ORGANISATIONS</h4>
              <ul className="footer-links">
                <li>Control Panel.</li>
                <li>Discover the Marketplace.</li>
                <li>Create Organisation Account.</li>
              </ul>
            </div>
          </Col>
          <Col md={2}>
            <div className="footer-column">
              <h4>YOUR ACCOUNT</h4>
              <ul className="footer-links">
                <li>Library.</li>
                <li>Profile.</li>
                <li>Projects.</li>
                <li>Help.</li>
              </ul>
            </div>
          </Col>
          <Col md={2}>
            <div className="footer-column">
              <h4>EXPLORE</h4>
              <ul className="footer-links">
                <li>Metrics.</li>
                <li>Networks.</li>
                <li>Strategies.</li>
                <li>Projects.</li>
                <li>Surveys.</li>
                <li>Tips.</li>
                <li>Vouchers.</li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-column">
              <h4>FOLLOW THE MAKERBLE STORY</h4>
              <ul className="social-icons">
                <li>
                  <a href="https://in.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="instagram">
                  <a href="https://www.youtube.com/">
                    <FaYoutube />
                  </a>
                </li>
                <li className="instagram">
                  <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://sites.google.com/view/twitter-logins/home">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/login/">
                    <FaFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

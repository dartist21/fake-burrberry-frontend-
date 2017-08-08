import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-nav">
            <div className="row">
              <div className="col-md-3">
                <h5 className="footer-nav__title">
                  Customer service
                </h5>
                <nav>
                  <a href="#" className="footer-nav__link">
                    Contact Us
                  </a>
                  <a href="#" className="footer-nav__link">
                    Payment
                  </a>
                  <a href="#" className="footer-nav__link">
                    Shipping
                  </a>
                  <a href="#" className="footer-nav__link">
                    Returns
                  </a>
                  <a href="#" className="footer-nav__link">
                    Faqs
                  </a>
                  <a href="#" className="footer-nav__link">
                    Live Chat
                  </a>
                  <a href="#" className="footer-nav__link">
                    The Burberry App
                  </a>
                  <a href="#" className="footer-nav__link">
                    Store Locator
                  </a>
                </nav>
              </div>
              <div className="col-md-3">
                <h5 className="footer-nav__title">
                  Our company
                </h5>
                <nav>
                  <a href="#" className="footer-nav__link">
                    Our History
                  </a>
                  <a href="#" className="footer-nav__link">
                    Burberry Group Plc
                  </a>
                  <a href="#" className="footer-nav__link">
                    Careers
                  </a>
                  <a href="#" className="footer-nav__link">
                    Corporate Responsibility
                  </a>
                  <a href="#" className="footer-nav__link">
                    Site Map
                  </a>
                </nav>
              </div>
              <div className="col-md-3">
                <h5 className="footer-nav__title">
                  Legal & Cookies
                </h5>
                <nav>
                  <a href="#" className="footer-nav__link">
                    Terms & Conditions
                  </a>
                  <a href="#" className="footer-nav__link">
                    Privacy Policy
                  </a>
                  <a href="#" className="footer-nav__link">
                    Cookie Policy
                  </a>
                  <a href="#" className="footer-nav__link">
                    Accessibility Statement
                  </a>
                  <a href="#" className="footer-nav__link">
                    Japan Only - SCTL indications
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer__buttons">
            <button type="button" name="shipping-country" className="footer__button">Shipping country: Russian Federation</button><button type="button" name="language" className="footer__button">Language: English</button>
          </div>
          <h4 className="footer__title">Need help?</h4>
          <a href="#" className="footer__link">Find out more and contact us</a>
        </div>
      </footer>
    );
  }
}

export default Footer;

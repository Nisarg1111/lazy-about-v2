import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import ig from "../../assets/images/insta-icon.png";
import fb from "../../assets/images/fb-icon.png";
import linkedin from "../../assets/images/linkedin-icon.png";
import twitter from "../../assets/images/twitter-icon.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="newsletter-div">
        <div className="newsletter">
          <h2 className="newsletter-title">Join our newsletter</h2>
          <p className="newsletter-descr">
            Keep up with what we’re up to. Unsubscribe at any time.
          </p>
          <div className="subscription-box">
            <input type="text" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <div className="mid-footer">
          <div className="inner-mid-footer">
            <div className="logo-div">
              <img src={logo} alt="logo" className="logo" />

              <div className="social-links icons-mobile-view">
                <img src={ig} alt="instagram" className="social-link" />
                <img src={fb} alt="facebook" className="social-link" />
                <img src={linkedin} alt="linkedin" className="social-link" />
                <img src={twitter} alt="twitter" className="social-link" />
              </div>
            </div>

            <div className="footer-actions">
              <div className="social-links icons-desktop-view">
                <img src={ig} alt="instagram" className="social-link" />
                <img src={fb} alt="facebook" className="social-link" />
                <img src={linkedin} alt="linkedin" className="social-link" />
                <img src={twitter} alt="twitter" className="social-link" />
              </div>

              <div className="footer-options">
                <div>
                  <ul className="footer-list">
                    <li className="footer-list-item">Help</li>
                    <li className="footer-list-item">Help Center</li>
                    <li className="footer-list-item">About Us</li>
                    <li className="footer-list-item">Contact Us</li>
                    <li className="footer-list-item">Privacy Policy</li>
                    <li className="footer-list-item">Terms of Use</li>
                    <li className="footer-list-item">Shop</li>
                  </ul>
                </div>
                <div>
                  <ul className="footer-list">
                    <li className="footer-list-item">Products by category</li>
                    <li className="footer-list-item">Sofas</li>
                    <li className="footer-list-item">Chairs</li>
                    <li className="footer-list-item">Lounger</li>
                    <li className="footer-list-item">Puffy</li>
                    <li className="footer-list-item">
                      Make your custom furniture
                    </li>
                    <li className="footer-list-item">New</li>
                    <li className="footer-list-item">Sale</li>
                  </ul>
                </div>
                <div className="">
                  <ul className="footer-list">
                    <li className="footer-list-item">Contact</li>
                    <li className="footer-list-content">Tower, 20, Mumbai</li>
                    <li className="footer-list-content">India</li>
                    <li className="footer-list-content">info@lazyAbout.com</li>
                    <li className="footer-list-content">(252) 555-0126</li>
                  </ul>
                </div>
                <div className="">
                  <ul className="footer-list">
                    <li className="footer-list-item">Account</li>
                    <li className="footer-list-item">Login/Register</li>
                    <li className="footer-list-item">My Favorites</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="bottom-footer">
          <small>
            Copyright &#169; 2023 Lazyabout.com. All rights reserved.
          </small>
        </div>
      </div>
    </div>
  );
};

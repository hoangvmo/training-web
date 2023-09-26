import "./styles.css";
import { FacebookIcon, GoogleIcon, Logo, TwitterIcon } from '../../assets/svg';

export const FooterComponent = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <a href="#!" className="logo-link">
            <img src={Logo} alt="" className="logo-img" />
          </a>
          <div className="social-btn">
            <a href="#!">
              <img src={TwitterIcon} width={40} height={40} />
            </a>
            <a href="#!" style={{marginLeft: 10, marginRight: 10}}>
              <img src={FacebookIcon} width={40} height={40} />
            </a>
            <a href="#!">
              <img src={GoogleIcon} width={40} height={40} />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="category-container">
            <p className="text-bold">
              Solution
            </p>
            <p className="text-holder">
              Finance Strategy
            </p>
            <p className="text-holder">
              Advertising
            </p>
            <p className="text-holder">
              SMM
            </p>
            <p className="text-holder">
              SEO
            </p>
            <p className="text-holder">
              Google AdWords
            </p>
          </div>
          <div className="category-container">
            <p className="text-bold">
              Company
            </p>
            <p className="text-holder">
              8910 University Center Lane
            </p>
            <p className="text-holder">
              Suite 620 San Diego, CA 92102
            </p>
            <p className="text-holder">
              Phone 858-490-6910
            </p>
            <p className="text-holder">
              Fax 858-490-6985
            </p>
          </div>
        </div>
      </div>

      <div className="copyright">
        <ul className="menu-footer">
          <li className="menu-footer-item"><a href="#!" className="menu-footer-link">About</a></li>
          <li className="menu-footer-item"><a href="#!" className="menu-footer-link">Services</a></li>
          <li className="menu-footer-item"><a href="#!" className="menu-footer-link">Pricing</a></li>
          <li className="menu-footer-item"><a href="#!" className="menu-footer-link">Blog</a></li>
          <li className="menu-footer-item"><a href="#!" className="menu-footer-link">Contact</a></li>
        </ul>
        <div className="made-by">
          <p className="made-by-text">© 2018 Casumi, Made by DeoThemes.</p>
        </div>
      </div>
    </>
  )
}

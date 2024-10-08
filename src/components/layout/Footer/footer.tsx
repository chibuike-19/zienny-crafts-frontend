import Logo from "../../../assets/images/dashboard/logo 1.png"
import { FacebookIcon, InstaIcon, LinkedInIcon, TwitterIcon } from "../../../assets/svgs/dashboard/svg-export";
import "./footer.css"

export const Footer = () => {
    return (
      <footer className="footer">
        <div className="company__info">
          <div className="logo__container">
            <img src={Logo} alt="" />
            <p>ZEINNY CRAFTS</p>
          </div>
          <div className="company__desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="social__icons">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstaIcon />
          </div>
        </div>
        <div className="quick__links">
          <div className="link__container">
            <p>Company</p>
            <ul>
              <li>About Us</li>
              <li>store location</li>
              <li>Blog</li>
              <li>contact us</li>
            </ul>
          </div>
          <div className="link__container">
            {" "}
            <p>customer services</p>
            <ul>
              <li>My account</li>
              <li>Track Your Order</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="link__container">
            {" "}
            <p>our information</p>
            <ul>
              <li>Privacy</li>
              <li>User terms & condition</li>
              <li>return/Cancellation policy</li>
            </ul>
          </div>
        </div>
      </footer>
    );
}
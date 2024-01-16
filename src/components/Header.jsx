import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/transpernt-logo.png";
import { useRef } from "react";
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"
import tiktok from "../assets/images/tiktok.png"
import snapchat from "../assets/images/snapchat.png"

const Header = () => {
  const navRef = useRef(null);

  const showNavBar = () => {
    navRef.current.classList.toggle("show-navbar");
  };

  const handlePhoneNumberClick = () => {
    // Handle phone number click (e.g., initiate a phone call)
    window.location.href = 'tel:+966555088666';
  };

  const handleEmailClick = () => {
    // Handle email click (e.g., open default email client)
    window.location.href = 'mailto:marasimalsaudia@gmail.com';
  };

  return (
    <header>
      <img className="logo" src={logo} />
      <nav ref={navRef}>
        <NavLink
          className={({ isActive }) => (isActive ? "activePath" : null)}
          end
          to="/"
          onClick={showNavBar}
        >
          الرئيسية
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activePath" : null)}
          to="/about"
          onClick={showNavBar}
        >
          من نحن
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activePath" : null)}
          to="/serves"
          onClick={showNavBar}
        >
          خدماتنا
        </NavLink>
        <div className="small-screen-content">
          <Link to="#" onClick={handlePhoneNumberClick} className="phone-number">+966 55 508 8666</Link>
          <Link to="#" onClick={handleEmailClick}>marasimalsaudia@gmail.com</Link>
          <ul>
            <li><Link className="social-media"><img src={tiktok} /></Link></li>
            <li><Link className="social-media"><img src={twitter} /></Link></li>
            <li><Link className="social-media"><img src={instagram} /></Link></li>
            <li><Link className="social-media"><img src={snapchat} /></Link></li>
          </ul>
        </div>
        <button className="closeBtn" onClick={showNavBar}>
          &times;
        </button>
      </nav>
      <button className="menuBtn" onClick={showNavBar}>
        &#9776;
      </button>
    </header>
  );
};

export default Header;

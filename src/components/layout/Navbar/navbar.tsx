import { useLocation } from "react-router-dom";
import Logo from "../../../assets/images/dashboard/logo 1.png";
import { navItems } from "../../../data-helpers/dashboard";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import {
  AccountIcon,
  SearchIcon,
  ShoppingIcon,
} from "../../../assets/svgs/dashboard/svg-export";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { pathname } = useLocation();
  let navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const MobileNavMenu = ({ menu, idx }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, idx * 100);

      return () => clearTimeout(timer);
    }, [idx]);

    return (
      <li
        onClick={() => {
          setMenuOpen(false);
          navigate(menu.route);
        }}
        className={`nav__link ${isVisible ? "fade-in" : ""} ${
          pathname === menu.route
        ? "active" : ""}`}
      >
        {menu.label}
      </li>
    );
  };

  return (
    <nav className="nav">
      <div className="logo__container">
        <img src={Logo} alt="" />
        <p>ZEINNY CRAFTS</p>
      </div>
      <ul className="nav__items">
        {navItems.map((item, indx) => (
          <li
            key={indx}
            id={pathname === item.route ? "active" : ""}
            onClick={() => navigate(item.route)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="nav__icons">
        <SearchIcon />
        <ShoppingIcon />
        <AccountIcon />
      </div>
      <div onClick={() => setMenuOpen((prev) => !prev)} className="mobile__nav">
        <div id="icon" className={`${menuOpen ? "icon-close" : "icon-menu"}`} />
        <div
          className={`${
            menuOpen ? "menuopen" : "menuclosed"
          } mobile__nav__items`}
        >
          <ul>
            {navItems.map((item, indx) => (
              <MobileNavMenu key={indx} menu={item} idx={indx} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

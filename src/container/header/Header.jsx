import "./header.css";
import { useState } from "react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constant/images";
import { ImCross } from "react-icons/im";
import { Submenu } from "../";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const newLocal = "navbar-cross";

  const main_nav = ["ipsum", "ipsum", "ipsum", "ipsum"];
  const submeru_array = ["Link", "Link", "Link", "Link", "Link"];
  const submeru_array1 = ["Link", "Link", "Link", "Link", "Link"];
  return (
    <>
      <div className="app-header content_width" id="header">
        <div className="app-header-logo">
          <img src={images.logo1} />
        </div>
        <div className="app-header-links">
          {main_nav.map((item, indx) => (
            <li key={indx} className="main_li_nav">
              <a className="main_li_nav_a" href="#">
                Ipsum
              </a>
              <div className="app-submenu">
                <Submenu
                  title1="Ipsum lorem"
                  list1={submeru_array}
                  title2="Ipsum lorem"
                  list2={submeru_array1}
                />
              </div>
            </li>
          ))}
        </div>
      </div>
      <div className="navbar-small-screen">
        <div className="app-header-logo">
          <img src={images.logo2} />
        </div>
        {toggleMenu ? (
          <ImCross
            size="28px"
            color="white"
            className={newLocal}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <GiHamburgerMenu
            size="36px"
            color="white"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-small-screen-overlay">
            <ul className="app-navbar-small-screen-links">
              {main_nav.map((item, indx) => (
                <li key={indx} className="main_li_nav">
                  <a
                    className="main_li_nav_a"
                    onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                    href="#"
                  >
                    Ipsum
                  </a>
                  {indx == 0 && toggleMobileMenu && (
                    <div className="app-submenu-responsive">
                      <Submenu
                        title1="Ipsum lorem"
                        list1={submeru_array}
                        title2="Ipsum lorem"
                        list2={submeru_array1}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

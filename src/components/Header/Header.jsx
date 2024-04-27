import React, {  useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  // const menuRef = useRef(null);
  const [click, setClick] = useState(false);
  // const toggleMenu = () =>
  //   menuRef.current.classList.toggle("menu__active open");

    

  return (
    <header className="header">
      {/* ============ header top ============ */}
      {/* <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" className="lef">
              <div className="header__top__left ">
                <span>Know more</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +91 9381627305
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" className="rig">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-4">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="back">
        <span className="mobile__menu">
          <i
            className={click ? "hamburger open" : "hamburger"}
            onClick={() => setClick(!click)}
          >
            <span></span>
          </i>
        </span>
        <div className="phone">
          <div className="search__box">
            <input type="text" placeholder="Search" />
            <span>
              <i class="ri-search-line"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="main__navbar">
        <Container >
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <div className={click ? "change menu" : ""}>
              {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__item" : "nav__item"
                  }
                  key={index}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
       
      </div>
    </header>
  );
};

export default Header;

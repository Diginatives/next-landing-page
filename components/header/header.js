import React, { useState, useEffect } from "react";

import ScrollspyNav from "./scrollSpy";

import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Button,
} from "reactstrap";
import menuItems from "./headerData";
import img3 from "assets/images/diginatives.jpg";
const Header = (props) => {
  const [isOpenMenu, setOpen] = useState(false);
  const [navClass, setnavClass] = useState("");
  const { routes } = props;
  //navtoggle menu
  const toogleModal = () => {
    setOpen(!isOpenMenu);
  };

  //Scroll Navbar
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("is-sticky");
    } else {
      setnavClass("");
    }
  }

  let targetId = menuItems.map((item) => {
    return item.idnm;
  });
  return (
    <React.Fragment>
      <div id="navbar" className={navClass}>
        <Navbar
          expand="lg"
          fixed="top"
          className="navbar-custom sticky sticky-dark"
        >
          <Container>
            <NavbarBrand className="logo text-uppercase" href="/">
            Php Laravel developers <br/><span style={{fontSize:"12px", fontWeight:"normal"}}>By Diginatives Group</span>
            </NavbarBrand>
            <NavbarToggler onClick={toogleModal}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>

            <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="50"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav navbar className="navbar-center" id="mySidenav">
                  {menuItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.heading === "Home" ? "active" : ""}
                    >
                      <NavLink href={"#" + item.idnm}> {item.heading}</NavLink>
                    </NavItem>
                  ))}

                 
                </Nav>
                <div className="nav-button ms-auto">
                  <Nav navbar className="navbar-end">
                    <ul className="list-inline social">
                      <li className="list-inline-item">
                        <a
                          className="social-icon"
                          href="https://www.facebook.com/DiginativesPakistan/"
                          target="_blank"
                        >
                          <i  className="mdi mdi-facebook"></i>
                        </a>
                        {/* <Link href="#">
                                    </Link> */}
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="social-icon"
                          href="https://www.youtube.com/@diginativesio"
                          target="_blank"
                        >
                          <i className="mdi mdi-youtube"></i>
                        </a>
                        {/* <Link href="#">
                                    </Link> */}
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="social-icon"
                          href="https://www.linkedin.com/company/diginatives-io/"
                          target="_blank"
                        >
                          <i className="mdi mdi-linkedin"></i>
                        </a>
                        {/* <Link href="#">
                                    </Link> */}
                      </li>
                    </ul>
                  </Nav>
                </div>
              </ScrollspyNav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default Header;

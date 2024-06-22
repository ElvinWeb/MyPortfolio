import React from "react";
import logoImg from "../../assets/images/app-logo.png";
import resume from "../../assets/Elvin-Sarkarov-CV.pdf";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

function Header({ toggle }) {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src={logoImg} alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="certificates">
            Certificates
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href={resume}
            download="cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
}

export default Header;

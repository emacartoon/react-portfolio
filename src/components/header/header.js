import React from "react";
import { Link } from "react-router-dom";

import logo from "../../imgs/Studios_Logo_redBlack.png";
import Container from "../container/container";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="navbar navbar-expand-lg navbar-light">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Em2a Studios" className="logo" />
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Work"
                  className={
                    window.location.pathname === "/work"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  className={
                    window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;

import { Link, useLocation } from "react-router-dom";
import "../sass/layout/nav.scss";
import { useState } from "react";
import Menu from "./UI/Menu/Menu";

export default function Nav() {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="nav">
        <picture>
          <source media="(min-width:415px)" srcSet="./images/logo.svg" />
          <img
            src="./images/logo-mobile.svg"
            className="logo-mobile"
            alt="logo"
          />
        </picture>

        {menu ? (
          <img
            src="./images/icon-close.svg"
            className="hamburger"
            alt="close"
            onClick={() => setMenu(false)}
          />
        ) : (
          <img
            src="./images/icon-hamburger.svg"
            className="hamburger"
            alt="hamburger"
            onClick={() => setMenu(true)}
          />
        )}
        <div className="linie" />
        <section className="nav-container">
          <Link
            to="/"
            className={`${location.pathname === "/" ? "link active" : "link"}`}
          >
            <div>
              <p className="nav_text">
                <span>00 </span>HOME
              </p>
            </div>
          </Link>

          <Link
            to="/destination"
            className={`${
              location.pathname === "/destination" ? "link active" : "link"
            }`}
          >
            <div>
              <p className="nav_text">
                <span>01 </span>DESTINATION
              </p>
            </div>
          </Link>
          <Link
            to="/crew"
            className={`${
              location.pathname === "/crew" ? "link active" : "link"
            }`}
          >
            <div>
              <p className="nav_text">
                <span>02 </span>CREW
              </p>
            </div>
          </Link>
          <Link
            to="/technology"
            className={`${
              location.pathname === "/technology" ? "link active" : "link"
            }`}
          >
            <div>
              <p className="nav_text">
                <span>03 </span>TECHNOLOGY
              </p>
            </div>
          </Link>
        </section>
      </div>
      {menu && (
        <Menu>
          <div className="close">
            <img
              src="./images/icon-close.svg"
              alt="close"
              onClick={() => setMenu(false)}
            />
          </div>
          <Link className="menu-link" to="/">
            <h5>
              <span>00 </span>HOME
            </h5>
          </Link>
          <Link className="menu-link" to="/destination">
            <h5>
              <span>01 </span>DESTINATION
            </h5>
          </Link>
          <Link className="menu-link" to="/crew">
            <h5>
              <span>02 </span>CREW
            </h5>
          </Link>
          <Link className="menu-link" to="/technology">
            <h5>
              <span>03 </span>TECHNOLOGY
            </h5>
          </Link>
        </Menu>
      )}
    </>
  );
}

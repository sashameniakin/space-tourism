import { Link, useLocation } from "react-router-dom";
import "../sass/layout/nav.scss";

export default function Nav() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className="nav">
      <img src="./images/logo.svg" alt="logo" />
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
  );
}

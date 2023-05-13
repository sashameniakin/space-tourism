import { Link } from "react-router-dom";
import "../sass/layout/nav.scss";

export default function Nav() {
  return (
    <div>
      <Link to="/">HOME</Link>

      <div className="">
        <Link to="/crew" className="nav">
          CREW
        </Link>
        <Link to="/destination" className="">
          DESTINATION
        </Link>
        <Link to="/technology" className="">
          TECHNOLOGY
        </Link>
      </div>
    </div>
  );
}

import "../sass/pages/technology.scss";
import Nav from "../components/Nav";
import Launch from "../components/Technology/Launch";

export default function Technology() {
  return (
    <div className="back-technology">
      <Nav />
      <h5>
        <span>03</span> SPACE LAUNCH 101
      </h5>
      <Launch />
    </div>
  );
}

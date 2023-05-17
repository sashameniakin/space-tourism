import "../sass/pages/technology.scss";
import Nav from "../components/Nav";

export default function Technology() {
  return (
    <div className="back-technology">
      <Nav />
      <section>
        <div>
          <h5>
            <span>03</span> SPACE LAUNCH 101
          </h5>
        </div>
        <img
          src="./images/technology/image-launch-vehicle-portrait.jpg"
          alt="launch"
        />
      </section>
    </div>
  );
}

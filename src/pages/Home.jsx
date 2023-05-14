import "../sass/pages/home.scss";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="back-home">
      <Nav />
      <div className="main-part">
        <div>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p className="body_text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="circle" />
      </div>
    </div>
  );
}

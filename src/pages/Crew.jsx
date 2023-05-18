import "../sass/pages/crew.scss";
import Nav from "../components/Nav";
import Member from "../components/Crew/Member";

export default function Crew() {
  return (
    <div className="back-crew">
      <Nav />
      <h5>
        <span>02</span> MEET YOUR CREW
      </h5>
      <Member />
    </div>
  );
}

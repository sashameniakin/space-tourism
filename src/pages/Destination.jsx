import "../sass/pages/destination.scss";
import Nav from "../components/Nav";
import Planet from "../components/Destination/Planet";

export default function Destination() {
  return (
    <div className="back-destination">
      <Nav />
      <h5 className="name">01 PICK YOUR DESTINATION</h5>
      <Planet />
    </div>
  );
}

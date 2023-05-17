import "../sass/pages/destination.scss";
import Nav from "../components/Nav";
import Planet from "../components/Destination/Planet";

export default function Destination() {
  return (
    <div className="back-destination">
      <Nav />
      <Planet />
    </div>
  );
}

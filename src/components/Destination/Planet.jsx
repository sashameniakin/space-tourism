import { useState } from "react";

export default function Planet() {
  const [moon, setMoon] = useState(true);
  const [mars, setMars] = useState(false);
  const [europa, setEuropa] = useState(false);
  const [titan, setTitan] = useState(false);

  function handleMoon() {
    setMoon(true);
    setEuropa(false);
    setMars(false);
    setTitan(false);
  }
  function handleMars() {
    setMoon(false);
    setEuropa(false);
    setMars(true);
    setTitan(false);
  }
  function handleEuropa() {
    setMoon(false);
    setEuropa(true);
    setMars(false);
    setTitan(false);
  }
  function handleTitan() {
    setMoon(false);
    setEuropa(false);
    setMars(false);
    setTitan(true);
  }

  return (
    <section className="container">
      <div className="planet-container">
        <h5>
          <span>01</span> PICK YOUR DESTINATION
        </h5>
        <img
          src={`${
            moon
              ? "./images/destination/image-moon.webp"
              : mars
              ? "./images/destination/image-mars.webp"
              : europa
              ? "./images/destination/image-europa.webp"
              : "./images/destination/image-titan.webp"
          }`}
          alt="planet"
        />
      </div>
      <section className="mini-container">
        <div className="list nav_text">
          <p className={`${moon ? "active-home" : ""}`} onClick={handleMoon}>
            MOON
          </p>
          <p className={`${mars ? "active-home" : ""}`} onClick={handleMars}>
            MARS
          </p>
          <p
            className={`${europa ? "active-home" : ""}`}
            onClick={handleEuropa}
          >
            EUROPA
          </p>
          <p className={`${titan ? "active-home" : ""}`} onClick={handleTitan}>
            TITAN
          </p>
        </div>
        <article>
          <h2>{moon ? "MOON" : mars ? "MARS" : europa ? "EUROPA" : "TITAN"}</h2>
          <p className="text body_text">
            {moon
              ? "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
              : mars
              ? "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
              : europa
              ? "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
              : "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."}
          </p>
          <div className="container-down">
            <div>
              <p className="sub_h2">AVG. DISTANCE</p>
              <p className="sub_h1">
                {moon
                  ? "384,400 KM"
                  : mars
                  ? "225 MIL. KM"
                  : europa
                  ? "628 MIL. KM"
                  : "1.6 BIL. KM"}
              </p>
            </div>
            <div>
              <p className="sub_h2">EST. TRAVEL TIME</p>
              <p className="sub_h1">
                {moon
                  ? "3 DAYS"
                  : mars
                  ? "9 MONTHS"
                  : europa
                  ? "3 YEARS"
                  : "7 YEARS"}
              </p>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}

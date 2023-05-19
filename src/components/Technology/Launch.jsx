import { useState } from "react";

export default function Launch() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  function handleFirst() {
    setFirst(true);
    setSecond(false);
    setThird(false);
  }
  function handleSecond() {
    setFirst(false);
    setSecond(true);
    setThird(false);
  }
  function handleThird() {
    setFirst(false);
    setSecond(false);
    setThird(true);
  }

  return (
    <section className="container-launch">
      <div>
        <div className="small-container-left">
          <div className="button-container">
            <div
              className={`${first ? "active-circle" : ""}`}
              onClick={handleFirst}
            />
            <div
              className={`${second ? "active-circle" : ""}`}
              onClick={handleSecond}
            />
            <div
              className={`${third ? "active-circle" : ""}`}
              onClick={handleThird}
            />
          </div>
          <article>
            <p className="nav_text">THE TERMINOLOGY...</p>
            <h3>{`${
              first ? "LAUNCH VEHICLE" : second ? "SPACEPORT" : "SPACE CAPSULE"
            }`}</h3>
            <p className="body_text descr">
              {`${
                first
                  ? "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                  : second
                  ? "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                  : "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
              }`}
            </p>
          </article>
        </div>
      </div>
      <div className="resp-image-container">
        <picture>
          <source
            media="(min-width:769px)"
            srcSet={`${
              first
                ? "./images/technology/image-launch-vehicle-portrait.jpg"
                : second
                ? "./images/technology/image-spaceport-portrait.jpg"
                : "./images/technology/image-space-capsule-portrait.jpg"
            }`}
          />
          <img
            src={`${
              first
                ? "./images/technology/image-launch-vehicle-landscape.jpg"
                : second
                ? "./images/technology/image-spaceport-landscape.jpg"
                : "./images/technology/image-space-capsule-landscape.jpg"
            }`}
            alt="technology-bild"
          />
        </picture>
      </div>
    </section>
  );
}

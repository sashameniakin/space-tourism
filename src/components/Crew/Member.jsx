import { useState } from "react";

export default function Member() {
  const [commander, setCommander] = useState(true);
  const [spec, setSpec] = useState(false);
  const [pilot, setPilot] = useState(false);
  const [engineer, setEngineer] = useState(false);

  function handleCommander() {
    setCommander(true);
    setSpec(false);
    setPilot(false);
    setEngineer(false);
  }
  function handleSpec() {
    setCommander(false);
    setPilot(false);
    setSpec(true);
    setEngineer(false);
  }
  function handlePilot() {
    setCommander(false);
    setPilot(true);
    setSpec(false);
    setEngineer(false);
  }
  function handleEngineer() {
    setCommander(false);
    setPilot(false);
    setSpec(false);
    setEngineer(true);
  }

  return (
    <section className="crew">
      <div>
        <h5>
          <span>02</span> MEET YOUR CREW
        </h5>
        <h4>{`${
          commander
            ? "COMMANDER"
            : spec
            ? "MISSION SPECIALIST"
            : pilot
            ? "PILOT"
            : "FLIGHT ENGINEER"
        }`}</h4>
        <h3>{`${
          commander
            ? "DOUGLAS HURLEY"
            : spec
            ? "MARK SHUTTLEWORTH"
            : pilot
            ? "VICTOR GLOVER"
            : "ANOUSHEH ANSARI"
        }`}</h3>
        <p className="body_text">
          {`${
            commander
              ? "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
              : spec
              ? "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
              : pilot
              ? "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
              : "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
          }`}
        </p>
        <section className="switch">
          <div
            className={`${commander ? "active-crew" : "not-active-crew"}`}
            onClick={handleCommander}
          />
          <div
            className={`${spec ? "active-crew" : "not-active-crew"}`}
            onClick={handleSpec}
          />
          <div
            className={`${pilot ? "active-crew" : "not-active-crew"}`}
            onClick={handlePilot}
          />
          <div
            className={`${engineer ? "active-crew" : "not-active-crew"}`}
            onClick={handleEngineer}
          />
        </section>
      </div>
      {/*   <div className="foto"> */}
      <img
        src={`${
          commander
            ? "./images/crew/image-douglas-hurley.webp"
            : spec
            ? "./images/crew/image-mark-shuttleworth.webp"
            : pilot
            ? "./images/crew/image-victor-glover.webp"
            : "./images/crew/image-anousheh-ansari.webp"
        }`}
        alt="crew member"
      />
      {/*   </div> */}
    </section>
  );
}

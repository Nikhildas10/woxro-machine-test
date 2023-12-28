import React, { useState } from "react";
import heroImage from "../assets/fortnite-pictures-b5kfcchwazwiz3cs 1.png";
import close from "../assets/close.svg";
const Hero = () => {

  return (
    <div className="hero">
      <div className="closeBtn-wrapper">
        <div
         
          className="closeBtn" 
        >

        <img src={close} alt="" />
        </div>
      </div>
      <h3>
        {" "}
        Epic Games : An American video game and software developer and publisher
        based in Cary, North Carolina.
      </h3>
      <div className="heroImg">
        {" "}
        <img src={heroImage} alt="" />
      </div>
      <div className="heroDetails">
        <p>
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
        <button>Visit Website</button>
      </div>
    </div>
  );
};

export default Hero;

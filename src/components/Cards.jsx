import React from 'react'
import cardOne from "../assets/Fortnite_20180630171046 1.png";
import cardTwo from "../assets/5daa24d7cc4a0a62650c6b28 1.png";
import cardThree from "../assets/maxresdefault 1.png";
const Cards = () => {
  return (
    <>
      <div className="cards-wrapper">
        <div>
          <img src={cardOne} alt="" />
          <p>
            Explore large, destructible environments where no two games are ever
            the same.
          </p>
        </div>
        <div>
          <img src={cardTwo} alt="" />
          <p>
            Team up with friends by sprinting, climbing and smashing your way to
            earn your Victory Royale
          </p>
        </div>
        <div>
          <img src={cardThree} alt="" />
          <p>
            Discover even more ways to play across thousands of creator-made
            game genres
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards
import React from "react";
import { Link } from "react-router-dom";
import character from "../img/character.png";
import dontknow from "../img/몰루2.gif";
import solru from "../img/솔루.gif";
import solru2 from "../img/솔루2.gif";
import solru3 from "../img/솔루3.gif";

const Home = () => {
  return (
    <div>
      <div className="Card1">
        <img className="Image" alt="character" src={solru} />
        <img className="Image" alt="character" src={solru2} />
        <img className="Image" alt="character" src={solru3} />
        <img className="Image" alt="character" src={dontknow} />
      </div>
      <br />
      <h2>제작자</h2>
      <div className="Card1">
        <img
          className="Image"
          alt="character"
          src={character}
          onClick={() =>
            window.open(
              "https://maple.gg/u/%EC%82%AC%EB%9E%91%EB%B2%95%EC%82%AC",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
};

export default Home;

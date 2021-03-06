import React from "react";
import character from "../img/character.png";
import character2 from "../img/character2.png";
import character3 from "../img/character3.png";

const Home = () => {
  return (
    <div>
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
        <img
          className="Image"
          alt="character2"
          src={character2}
          onClick={() =>
            window.open(
              "https://maple.gg/u/%EC%82%AC%EB%9E%91%EB%B0%94%ED%8D%BC",
              "_blank"
            )
          }
        />
        <img
          className="Image"
          alt="character"
          src={character3}
          onClick={() =>
            window.open(
              "https://maple.gg/u/%EC%82%AC%EB%9E%91%EC%B2%B4%EB%9D%BC",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
};

export default Home;

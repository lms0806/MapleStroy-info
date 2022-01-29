import React from "react";
import { Link } from "react-router-dom";
import character from "../img/character.png";
const Home = () => {
  return (
    <div>
      <h1>안녕하세요 메이플스토리 잡정보 사이트입니다.</h1>
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

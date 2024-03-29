import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Link to="/MapleStroy-info" className="navbar-brand">
          메잘알
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/MapleStroy-info/Potion" className="nav-link">
              비약
            </Link>
            <Link to="/MapleStroy-info/Hunt" className="nav-link">
              사냥
            </Link>
            <Link to="/MapleStroy-info/Boss" className="nav-link">
              보스
            </Link>
            <Link to="/MapleStroy-info/LinkAndUnion" className="nav-link">
              링크 & 유니온
            </Link>
            <Link to="/MapleStroy-info/Symbol" className="nav-link">
              심볼
            </Link>
            <Link to="/MapleStroy-info/Jobs" className="nav-link">
              직업별
            </Link>
            <Link to="/MapleStroy-info/Weapon" className="nav-link">
              무기
            </Link>
            <Link to="/MapleStroy-info/Murng" className="nav-link">
              무릉
            </Link>
            <Link to="/MapleStroy-info/Skills" className="nav-link">
              스킬
            </Link>
            <Link to="/MapleStroy-info/Info" className="nav-link">
              정리
            </Link>
            <Link to="/MapleStroy-info/Video" className="nav-link">
              추천 영상
            </Link>
            <Link to="/MapleStroy-info/Showcase" className="nav-link">
              쇼케이스 영상들
            </Link>
            <Link to="/MapleStroy-info/Event" className="nav-link">
              이벤트
            </Link>
            <Link to="/MapleStroy-info/Cube" className="nav-link">
              큐브
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;

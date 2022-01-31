import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

const Video = () => {
  const links = [
    "https://youtu.be/4bU3c3GQPEY",
    "https://youtu.be/thn1efLw7-Y",
    "https://youtu.be/rgjhkrfa_Vg",
    "https://youtu.be/xCZHnmItIiQ",
  ];
  const titles = [
    "별빛 심포니 온라인 콘서트",
    "메이플스토리 세계를 확장하는 사람들, 콘텐츠 프로그래머",
    "MapleStory DESTINY Live Talk - 못다 한 이야기",
    "메이플스토리 앰배시더 | 김재덕 선수 딴짓 인터뷰",
  ];
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <ReactPlayer key={idx} url={links[idx]} controls />
              <Card.Body>
                <Card.Title key={idx}>{titles[idx]}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Video;

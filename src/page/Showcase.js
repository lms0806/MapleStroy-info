import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

const Showcase = () => {
  const links = [
    "https://youtu.be/1hsdULyBzws",
    "",
    "https://youtu.be/7WzwoDB6zZ8",
    "https://youtu.be/ZJCni-1vD34",
    "https://youtu.be/zkMHkWrAOmg",
    "https://youtu.be/OfMBtKm4qck",
    "https://youtu.be/p_CLiy58K8c",
  ];
  const titles = [
    "메이플스토리 GLORY 티저영상 (2019)",
    "RISE",
    "2020 SUMMER UPDATE PREVIEW",
    "[메이플스토리 NEO] 메이플 뉴스",
    "MapleStory DESTINY SHOWCASE",
    "2022 SUMMER - MapleStory IGNITION Showcase",
    "2022 WINTER SHOWCASE - SAVIOR",
  ];
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: links.length }).map((_, idx) => (
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

export default Showcase;

import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

const Video = () => {
  const links = [
    "https://youtu.be/4bU3c3GQPEY",
    "https://youtu.be/thn1efLw7-Y",
    "https://youtu.be/rgjhkrfa_Vg",
    "https://youtu.be/xCZHnmItIiQ",
    "https://youtu.be/1UYYJXayeQ4",
    "https://youtu.be/LukNNXzqTwM",
    "https://youtu.be/vdN38jgmbcQ",
    "https://youtu.be/zOk8GTvF1Yg",
    "https://youtu.be/d5MnogZ2U5Y",
    "https://youtu.be/EgwnMrx8rRI",
    "https://youtu.be/Yw73WDgBUd0",
    "https://youtu.be/dMppKJ9eIIc",
    "https://youtu.be/90n8S4vshLU",
    "https://youtu.be/zkMHkWrAOmg",
    "https://youtu.be/OfMBtKm4qck",
  ];
  const titles = [
    "별빛 심포니 온라인 콘서트",
    "메이플스토리 세계를 확장하는 사람들, 콘텐츠 프로그래머",
    "MapleStory DESTINY Live Talk - 못다 한 이야기",
    "메이플스토리 앰배시더 | 김재덕 선수 딴짓 인터뷰",
    "[미공개영상] 업데이트 정보센터 (요정 웡키ver) - 20211230",
    "금손 어워즈 심사영상 [메이플스토리]",
    "[댓글 읽기] 2022년도 다들 행복하세요! 강원기 총괄 디렉터의 새해 덕담 댓글 읽기❤",
    "메이플 용사의 로그오프 라이프 | 블랙핑크 지수 편 - EP.01",
    "메이플 용사의 로그오프 라이프 | 블랙핑크 지수 편 - EP.02",
    "팡이vs글자 메린이 육성대전 1화 | 메이플스토리",
    "팡이vs글자 메린이 육성대전 2화 | 메이플스토리",
    "메이플스토리 개발진이 용사님들께 쓰는 편지 | 2022 MapleStory",
    "2022 MAPLE LIVE TALK, 용사님들께 진심이었던 하루 비하인드 | 2022 MapleStory",
    "MapleStory DESTINY SHOWCASE",
    "2022 SUMMER - MapleStory IGNITION Showcase",
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

export default Video;

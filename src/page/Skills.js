import React from "react";
import { Card, Tab, Table, Tabs } from "react-bootstrap";

const Skills = () => {
  const jobs = [
    "히어로",
    "팔라딘",
    "다크나이트",
    "보우마스터",
    "신궁",
    "패스파인더",
    "아크메이지(불,독)",
    "아크메이지(썬,콜)",
    "비숍",
    "새도어",
    "나이트로드",
    "듀얼블레이드",
    "캡틴",
    "바이퍼",
    "캐논슈터",
    "소울마스터",
    "미하일",
    "윈드브레이커",
    "플레임위자드",
    "나이트워커",
    "스트라이커",
    "아란",
    "메르세데스",
    "에반",
    "루미너스",
    "팬텀",
    "은월",
    "블래스터",
    "데몬슬레이어",
    "와일드헌터",
    "배틀메이지",
    "메카닉",
    "카이저",
    "엔젤릭버스터",
    "카데나",
    "키네시스",
    "아크",
    "아델",
    "일리음",
    "호영",
    "데몬어벤져",
    "제로",
    "제논",
  ];

  const wind = [
    65, 65, 66, 66, 65, 65, 66, 65, 66, 68, 68, 68, 66, 68, 65, 68, 68, 68, 67,
    68, 68, 68, 66, 66, 65, 66, 65, 68, 68, 68, 66, 67, 65, 65, 68, 65, 68, 68,
    66, 68, 66, 65, 66,
  ];
  const combat = [
    65, 68, 66, 66, 65, 66, 65, 65, 65, 67, 66, 66, 65, 66, 66, 67, 66, 66, 66,
    67, 66, 66, 66, 67, 66, 66, 65, 65, 67, 67, 66, 65, 66, 66, 65, 65, 67, 66,
    67, 65, 67, 68, 67,
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="useskill"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="useskill" title="쓸만한 스킬">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>쓸만한 스킬들 효율표</Card.Title>
              <Card.Text>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>직업</th>
                      <th>쓸윈부</th>
                      <th>쓸컴뱃</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: jobs.length }).map((_, index) => (
                      <tr>
                        <td key={index}>{jobs[index]}</td>
                        <td key={index}>{String.fromCharCode(wind[index])} </td>
                        <td key={index}>
                          {String.fromCharCode(combat[index])}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Skills;

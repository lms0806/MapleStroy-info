import React from "react";
import { Card, Tab, Table, Tabs } from "react-bootstrap";

const Jobs = () => {
  const jobs = ["아크메이지(썬, 콜)", "아크메이지(불, 독)", "바이퍼"];
  const fulldealexplain = [
    "",
    "포이즌 리전 -> 플레임 헤이즈 -> 미스트 이럽션 -> 플레임헤이즈 -> 포이즌 노바 -> 도트 퍼니셔 -> 포이즌 체인 -> 미스트 이럽션 -> 퓨리 오브 이프리트 -> 메기도 플레임 -> 메테오",
    "서펜트 스크류 -> 전함 노틸러스 -> 라이트닝 폼 -> 3번 발사 -> 퓨리어스 차지 6번 -> 하울링 피스트",
  ];
  const invincibility = [
    "프리징 브레스(바인드)",
    "",
    "라이트닝 폼 원기옥, 하울링 피스트 찌르기",
  ];

  const good = [
    "바인드에 방깍이 들어가 있음<br/>수많은 장판기로 사냥이 편리함",
    "몹이 어디있든 떄릴 수 있는 5차기",
    "서펜트 1틱사냥시 사냥 편함",
  ];
  const bad = ["살짝 아쉬운 체라 전이율", "무적기가 없음", "아쉬운 극딜기"];
  return (
    <div>
      <Tabs
        defaultActiveKey="deal"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="deal" title="극딜 & 무적기">
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>직업별 극딜 & 무적기</Card.Title>
              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>직업</th>
                    <th>극딜 순서</th>
                    <th>무적기</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: jobs.length }).map((_, index) => (
                    <tr>
                      <td key={index}>{jobs[index]}</td>
                      <td key={index}>{fulldealexplain[index]}</td>
                      <td key={index}>{invincibility[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="goodbad" title="장점 & 단점">
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>장점 & 단점</Card.Title>
              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>직업</th>
                    <th>장점</th>
                    <th>단점</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: jobs.length }).map((_, index) => (
                    <tr>
                      <td key={index}>{jobs[index]}</td>
                      <td key={index}>
                        <div
                          dangerouslySetInnerHTML={{ __html: good[index] }}
                        />
                      </td>
                      <td key={index}>
                        <div dangerouslySetInnerHTML={{ __html: bad[index] }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Jobs;
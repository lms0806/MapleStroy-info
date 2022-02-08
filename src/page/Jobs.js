import React from "react";
import { Card, Tab, Table, Tabs } from "react-bootstrap";

const Jobs = () => {
  const jobs = [
    "아크메이지(썬, 콜)",
    "아크메이지(불, 독)",
    "나이트로드",
    "바이퍼",
  ];
  const fulldealexplain = [
    "썬더 스피어설치 -> 아이스 오라 설치 -> 프로즌 오브 -> 스피릿 오브 스노우 -> 아이스 에이지 -> 썬더 브레이크 -> 주피터 썬더 -> 프로즌 오브 -> 라이트닝 스피어 -> 블리자드",
    "포이즌 리전 -> 플레임 헤이즈 -> 미스트 이럽션 -> 플레임헤이즈 -> 포이즌 노바 -> 도트 퍼니셔 -> 포이즌 체인 -> 미스트 이럽션 -> 퓨리 오브 이프리트 -> 메기도 플레임 -> 메테오",
    "스로우 블래스팅 -> 에픽 어드벤쳐 -> 블리딩 톡신 -> 메이플 여신의 축복 -> 스프레드 스로우 -> 얼티밋 다크 사이트 -> 다크로드의 비전서 -> (레디투다이 2번 -> 소울 컨트랙트 (지속시간 더 긴 스킬을 사용))",
    "서펜트 스크류 -> 전함 노틸러스 -> 라이트닝 폼 -> 3번 발사 -> 퓨리어스 차지 6번 -> 하울링 피스트",
  ];
  const invincibility = [
    "프리징 브레스(바인드)",
    "",
    "",
    "라이트닝 폼 원기옥, 하울링 피스트 찌르기",
  ];

  const good = [
    "바인드에 방어율 무시가 들어가 있음<br/>수많은 장판기로 사냥이 편리함",
    "몹이 어디있든 때릴 수 있는 5차 스킬",
    "가장 강력한 극딜기",
    "서펜트 원킬 사냥시 편한 사냥",
  ];
  const bad = [
    "살짝 아쉬운 체라 전이율",
    "생존기 없음",
    "생존기 없음",
    "아쉬운 극딜기",
  ];
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
              <Card.Title>직업 자체 장점 & 단점</Card.Title>
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

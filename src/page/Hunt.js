import React from "react";
import { Card, Tab, Table, Tabs } from "react-bootstrap";

const Hunt = () => {
  const combo = ["50 ~ 300", "350 ~ 700", "750 ~ 1950", "2000 ~"];
  const combocolor = ["파란", "보라", "빨강", "노란"];

  const multikillExperience = [3.0, 8.0, 15.0, 19.8, 25.2, 31.2, 37.8, 45.0];
  const multikillExperiencepercent = [1, 2, 3, 3.3, 3.6, 3.9, 4.2, 4.5];

  const outbreakkind = [
    "엘리트 몬스터/엘리트 챔피언 (1/2/3)마리 처치!",
    "필드에 생성된 룬 1회 발동",
    "필드 몬스터 사냥 (100/200/300)콤보 달성!",
    "몬스터 사냥 멀티킬 (15/25/50)회 발동",
    "레벨 범위 몬스터 (100/200/300)마리 처치!",
    "버닝 필드 찾아가기",
    "불꽃늑대 소굴 1회 다녀오기",
    "필드 내 숨겨진 포탈 1회 이용하기",
    "폴로 & 프리토 1회 도와주기",
  ];
  const outbreakreward = [
    "주문의 흔적 100/200/300장",
    "수상한 큐브 1개",
    "장인의 큐브 1개",
    "명장의 큐브 1개",
    "강력한 환생의 불꽃 1개",
    "영원한 환생의 불꽃 1개",
    "10만 ~ 1억 메소",
    "마일리지 500",
    "슬롯 4칸 확장권",
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="combo"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="combo" title="콤보킬">
          <Card style={{ width: "38rem" }}>
            <Card.Body>
              <Card.Title>콤보킬</Card.Title>
              <Card.Text>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>콤보 달성량</th>
                      <th>색깔</th>
                      <th>경험치</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <tr>
                        <td key={index}>{combo[index]} 콤보</td>
                        <td key={index}>{combocolor[index]}색 구슬</td>
                        <td key={index}>
                          (필드 몬스터 최저 레벨 기본 경험치) x {5 + index * 2}
                          배
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="multikill" title="멀티킬">
          <Card style={{ width: "38rem" }}>
            <Card.Body>
              <Card.Title>멀티킬</Card.Title>
              <Card.Text>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>멀티킬</th>
                      <th>추가 경험치</th>
                      <th>마리당 경험치 비율</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <tr>
                        <td key={index}>{3 + index} </td>
                        <td key={index}>{multikillExperience[index]}%</td>
                        <td key={index}>
                          {multikillExperiencepercent[index]}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="outbreak" title="돌발 미션">
          <Card style={{ width: "38rem" }}>
            <Card.Body>
              <Card.Title>돌발 미션</Card.Title>
              <Card.Text>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>종류</th>
                      <th>보상(랜덤)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <tr>
                        <td key={index}>{outbreakkind[index]} </td>
                        <td key={index}>{outbreakreward[index]}</td>
                        <td key={index}></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="hunt" title="사냥터">
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title>유니온 사냥터 정리</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                - 유니온용 기본템 필수
              </Card.Subtitle>
              <Card.Text>
                1~10 - 튜토리얼 진행
                <br />
                10~25 - 엘로딘 : 깊어지는숲 [깊은숲 위습]
                <br />
                25~30 - 커닝시티 : 방황의 늪 [주니어네키] 전직
                <br />
                30~35 커닝시티 : 깊은수렁 [새싹진흙괴물]
                <br />
                35~42 페리온 : 와일드보어의 땅 [와일드보어]
                <br />
                42~46 페리온 : 제 1군영 [머미독]
                <br />
                46~60 슬리피우드 : 조용한습지 [드레이크] 전직
                <br />
                60~64 오르비스 : 하늘계단1 [그류핀]
                <br />
                64~70 에델슈타인 : 갱도4 [경비로봇L]
                <br />
                70~78 니할사막 : 잠자는사막 [모래두더지]
                <br />
                78~84 니할사막 :관계자 외 출입금지
                <br />
                84~89 미나르숲 : 서쪽경계 [다크레쉬]
                <br />
                89~100 미나르숲 : 산양의골짜기1 [듀얼버크] 전직
                <br />
                100~110 미나르숲 : 산양의 골짜기2
                <br />
                110~120 루디브리엄 : 잊혀진회랑 [타나토스]
                <br />
                120~130 엘나스 : 폐광4 [마이너 좀비]
                <br />
                130~140 엘나스 : 시련의 동굴3 [파이어독]
                <br />
                140~160 커닝타워 : 2층카페 4 [커피머신]
                <br />
                160~180 지구방위본부 : 스타포스존
                <br />
                180~190 황혼의 페리온 : 버려진 발굴지역
                <br />
                190~200 헤이븐 : 상하차or기계무덤1~4
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Hunt;

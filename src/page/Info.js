import React from "react";
import { Card, Table } from "react-bootstrap";

const Info = () => {
  const hp = [
    "6,000,000,000(60억)",
    "15,000,000,000(150억)",
    "150,000,000,000(1500억)",
    "1,500,000,000,000(1.5조)",
    "10,500,000,000,000(10.5조)",
    "900,000,000,000,000(900조)",
  ];

  const flagname = ["아이젠 착용", "하이 점프", "러시", "함계 달려요"];
  const flagexplain = [
    "사용 시 빙판에서 미끄러지지 않는다. 재사용 시 효과를 ON/OFF 할 수 있다. 단, 아이젠 장비 아이템을 착용하면 스킬의 ON/OFF와 관계없이 미끄럼 방지 효과가 적용된다.",
    "사용 시 통상의 점프보다 높은 점프가 1회 발동된다.",
    "사용 시 짧은 거리를 빠르게 이동한다.",
    "사용 시 자신을 포함한 주변 캐릭터의 이동속도가 빨라진다. 최대 6명까지 적용된다.",
  ];

  const remakejob = ["모험가", "시그너스"];
  const remakeday = ["2022-01-27", ""];

  return (
    <div>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>수로</Card.Title>
          <Card.Text>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>단계</th>
                  <th>HP</th>
                  <th>방어율</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, index) => (
                  <tr>
                    <td key={index}>{1 + index}단계</td>
                    <td key={index}>{hp[index]}</td>
                    <td key={index}>{50 * (index + 1)}%</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>플래그 스킬</Card.Title>
          <Card.Text>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>효과</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 4 }).map((_, index) => (
                  <tr>
                    <td key={index}>{flagname[index]}</td>
                    <td key={index}>{flagexplain[index]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>리메이크 일자</Card.Title>
          <Card.Text>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>날짜</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 1 }).map((_, index) => (
                  <tr>
                    <td key={index}>{remakejob[index]}</td>
                    <td key={index}>{remakeday[index]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>불편한 점</Card.Title>
          <Card.Text>
            1. 룬 쿨타임 중일때 서든미션으로 룬관련 미션이 나옴
            <br />
            2. 파풀라투스 몹 잡을 때 파풀라투스가 발판보다 위에서 잡히면
            아이템이 발판위로 떨어져 먹기힘들어짐
            <br />
            3. 마일리지 꾸러미를 사용할 수 없는데 엘몬에서 계속 드랍되어 습득됨
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Info;

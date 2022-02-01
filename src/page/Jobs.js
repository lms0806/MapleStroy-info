import React from "react";
import { Card, Table } from "react-bootstrap";

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
  return (
    <div>
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
    </div>
  );
};

export default Jobs;

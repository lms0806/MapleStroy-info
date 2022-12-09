import React from "react";
import { Card, Tab, Table, Tabs } from "react-bootstrap";

const Symbol = () => {
  const levelsize = [
    12, 15, 20, 27, 36, 47, 60, 75, 92, 111, 132, 155, 180, 207, 236, 267, 300,
    335, 372,
  ];

  const levelsize2 = [29, 76, 141, 224, 325, 444, 581, 736, 909, 1100, "MAX"];
  return (
    <div>
      <Tabs
        defaultActiveKey="level"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="level" title="아케인 심볼">
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>아케인 심볼</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>레벨</th>
                    <th>ARC</th>
                    <th>일반 스탯 증가량</th>
                    <th>제논 스탯 증가량</th>
                    <th>데벤져 스탯 증가량</th>
                    <th>필요 성장치</th>
                    <th>여로</th>
                    <th>츄츄</th>
                    <th>레헬른</th>
                    <th>아르카나 ~ 에스페라</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 19 }).map((_, index) => (
                    <tr>
                      <td key={index}>{1 + index}</td>
                      <td key={index}>{30 + index * 10}</td>
                      <td key={index}>{300 + index * 100}</td>
                      <td key={index}>{144 + index * 48}</td>
                      <td key={index}>
                        {(6300 + index * 2100).toLocaleString("ko-KR")}
                      </td>
                      <td key={index}>{levelsize[index]}</td>
                      <td key={index}>
                        {(7070000 + index * 3960000).toLocaleString("ko-KR")}
                      </td>
                      <td key={index}>
                        {(10840000 + index * 4620000).toLocaleString("ko-KR")}
                      </td>
                      <td key={index}>
                        {(14610000 + index * 5280000).toLocaleString("ko-KR")}
                      </td>
                      <td key={index}>
                        {(17136000 + index * 5940000).toLocaleString("ko-KR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="link" title="어센틱 심볼">
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>에센틱 심볼</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>레벨</th>
                    <th>ARC</th>
                    <th>일반 스탯 증가량</th>
                    <th>제논 스탯 증가량</th>
                    <th>데벤져 스탯 증가량</th>
                    <th>필요 성장치</th>
                    <th>세르니움</th>
                    <th>아르크스</th>
                    <th>오디움</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 11 }).map((_, index) => (
                    <tr>
                      <td key={index}>{1 + index}</td>
                      <td key={index}>{10 + index * 10}</td>
                      <td key={index}>{500 + index * 200}</td>
                      <td key={index}>{240 + index * 96}</td>
                      <td key={index}>
                        {(10500 + index * 4200).toLocaleString("ko-KR")}
                      </td>
                      <td key={index}>{levelsize2[index]}</td>
                      <td key={index}>
                        {index < 1
                          ? 0
                          : (185400000 + (index - 1) * 88500000).toLocaleString(
                              "ko-KR"
                            )}
                      </td>
                      <td key={index}>
                        {index < 1
                          ? 0
                          : (203900000 + (index - 1) * 97300000).toLocaleString(
                              "ko-KR"
                            )}
                      </td>
                      <td key={index}>
                        {index < 1
                          ? 0
                          : (
                              224500000 +
                              (index - 1) * 107100000
                            ).toLocaleString("ko-KR")}
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

export default Symbol;

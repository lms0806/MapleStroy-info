import React from "react";
import { Card, Tab, Table, Tabs } from "react-bootstrap";
import Link from "./Link";
import Unions from "./Unions";

const LinkAndUnion = () => {
  const coin = [
    "(최초 등급)",
    120,
    140,
    150,
    160,
    170,
    430,
    450,
    470,
    490,
    510,
    930,
    960,
    1000,
    1030,
    1060,
    2200,
    2300,
    2350,
    2400,
  ];

  const num = [
    9, 10, 11, 12, 13, 18, 19, 20, 21, 22, 27, 28, 29, 30, 31, 36, 37, 38, 39,
    40,
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="level"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="level" title="유니온 레벨">
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>유니온 레벨</Card.Title>
              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>레벨</th>
                    <th>요구 코인</th>
                    <th>대원 수</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <tr>
                      <td key={index}>{500 + index * 500}</td>
                      <td key={index}>{coin[index]}</td>
                      <td key={index}>{num[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="link" title="링크">
          <Link />
        </Tab>
        <Tab eventKey="union" title="유니온">
          <Unions />
        </Tab>
      </Tabs>
    </div>
  );
};

export default LinkAndUnion;

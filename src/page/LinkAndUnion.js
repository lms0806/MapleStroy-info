import React from "react";
import { Card, Tab, Table, Tabs } from "react-bootstrap";
import Link from "./Link";
import Unions from "./Unions";

const LinkAndUnion = () => {
  const level = [
    500,
    1000,
    1500,
    2000,
    2500,
    3000,
    3500,
    4000,
    4500,
    5000,
    5500,
    6000,
    6500,
    7000,
    7500,
    "8000(메린이 탈출)",
    8500,
    9000,
    9500,
    10000,
  ];

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
              <Card.Title>유니온</Card.Title>
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
                      <td key={index}>{level[index]}</td>
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

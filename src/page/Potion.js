import React from "react";
import { Card, CardGroup, Container, Nav, Table } from "react-bootstrap";

const Potion = () => {
  const level = [250];
  const limit = [
    47.774, 47.301, 46.833, 46.369, 45.91, 45.455, 45.005, 44.56, 44.118,
    43.682, 21.625, 21.41, 21.198, 20.989, 20.781, 20.575, 20.371, 20.17, 19.97,
    19.772, 9.788, 9.691, 9.595, 9.5, 9.406, 4.657, 4.233, 3.848, 3.499, 3.181,
    1.575, 1.431, 1.301, 1.183, 1.075, 0.532, 0.484, 0.44, 0.4, 0.364, 0.18,
    0.164, 0.149, 0.135, 0.123, 0.061, 0.055, 0.005, 0.046, 0.03,
  ];

  const Typhoon = [
    62.5, 60.68, 58.912, 57.196, 55.53, 42.716, 41.472, 40.264, 39.091, 37.952,
    18.131, 17.952, 17.774, 17.598, 17.424, 17.251, 17.081, 16.911, 16.744,
    16.578, 8.207, 8.126, 8.045, 7.966, 7.887, 7.809, 7.731, 7.655, 7.579,
    7.504, 3.715, 3.678, 3.642, 3.606, 3.57, 1.767, 1.607, 1.461, 1.328, 1.207,
    0.598, 0.543, 0.494, 0.449, 0.408, 0.202, 0.184, 0.167, 0.152, 0.138, 0.068,
    0.062, 0.056, 0.051, 0.047, 0.023, 0.021, 0.019, 0.017, 0.012,
  ];
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>극성비</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>레벨</th>
                  <th>극성비</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 50 }).map((_, index) => (
                  <tr>
                    <td key={index}>{level[0] + index}</td>
                    <td key={index}>{limit[index]}%</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>태성비</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>레벨</th>
                  <th>태성비</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 60 }).map((_, index) => (
                  <tr>
                    <td key={index}>{level[0] - 10 + index}</td>
                    <td key={index}>{Typhoon[index]}%</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Potion;

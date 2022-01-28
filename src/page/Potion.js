import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const Potion = () => {
  return (
    <div>
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>인피 무한 유지(확실x)</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            모법만 해당됨
          </Card.Subtitle>
          <Card.Text>
            벞지 110% -> 인피 86.1초 -> 59% 확률
            <br />
            벞지 120% -> 인피 90.2초 -> 69% 확률
            <br />
            벞지 140% -> 인피 98.4초 -> 84% 확률
            <br />
            벞지 180% -> 인피 114.8초 -> 94% 확률
            <br />
            벞지 200% -> 인피 123초 -> 99% 확률
            <br />
            벞지 220% -> 인피 131.2초 -> 100% 확률
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Potion;

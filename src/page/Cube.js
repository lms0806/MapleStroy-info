import React, { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";

const Cube = () => {
  const [data, setData] = useState({
    count: 0,
    dates: "",
    key: "",
  });
  const [getData, setgetData] = useState({});
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  const submitData = (e) => {
    e.preventDefault();
    console.log(data.count);
    console.log(data.dates);
    console.log(PROXY);
    fetch(
      "https://lms0806.github.io/public.api.nexon.com/openapi/maplestory/v1/cube-use-results?count=" +
        data.count +
        "&date=" +
        data.dates,
      {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: data.key,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log(res.cube_histories);
        setgetData(res.cube_histories.reverse());
        console.log(getData);
      });
  };

  const changeValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>개수</Form.Label>
          <Form.Control
            type="count"
            placeholder="Enter count"
            name="count"
            onChange={changeValue}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>날짜</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="dates"
            onChange={changeValue}
          />
          <Form.Group>
            <Form.Label>API 키</Form.Label>
            <Form.Control
              type="key"
              placeholder="Enter key"
              name="key"
              onChange={changeValue}
            />
          </Form.Group>
        </Form.Group>
        <br />
        <Button variant="dark" type="submit" onClick={submitData}>
          큐브 사용 내역 조회
        </Button>
      </Form>
      <br />
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>큐브 사용 내역 조회</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>횟수</th>
                <th>닉네임</th>
                <th>사용 시간</th>
                <th>사용한 큐브</th>
                <th>사용한 아이템 종류</th>
                <th>사용한 아이템 레벨</th>
                <th>사용한 아이템</th>
                <th>잠재능력 등급</th>
                <th>에디셔널 등급</th>
                <th>이전 옵션</th>
                <th>이후 옵션</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: getData.length }).map((_, index) => (
                <tr>
                  <td key={index}>
                    {index + 1}
                    {getData[index].miracle_time_flag ? "★" : ""}
                  </td>
                  <td key={index}>{getData[index].character_name}</td>
                  <td key={index}>{getData[index].create_date}</td>
                  <td key={index}>{getData[index].cube_type}</td>
                  <td key={index}>{getData[index].item_equip_part}</td>
                  <td key={index}>{getData[index].item_level}</td>
                  <td key={index}>{getData[index].target_item}</td>
                  <td key={index}>{getData[index].potential_option_grade}</td>
                  <td key={index}>
                    {getData[index].additional_potential_option_grade}
                  </td>
                  <td key={index}>
                    {console.log(
                      getData[index].before_additional_potential_options.length
                    )}
                    {console.log(
                      "----------------------------------------------"
                    )}
                    {console.log(
                      getData[index].before_potential_options.length
                    )}
                    {getData[index].before_potential_options.length === 0
                      ? Array.from({
                          length:
                            getData[index].before_additional_potential_options
                              .length,
                        }).map((_, idx) => (
                          <ul key={idx}>
                            {"에디셔널 : "}
                            {
                              getData[index]
                                .before_additional_potential_options[idx].grade
                            }
                            -
                            {
                              getData[index]
                                .before_additional_potential_options[idx].value
                            }
                          </ul>
                        ))
                      : Array.from({
                          length:
                            getData[index].before_potential_options.length,
                        }).map((_, idx) => (
                          <ul key={idx}>
                            {"잠재능력 : "}
                            {getData[index].before_potential_options[idx].grade}
                            -
                            {getData[index].before_potential_options[idx].value}
                          </ul>
                        ))}
                  </td>
                  <td key={index}>
                    {getData[index].after_potential_options.length === 0
                      ? Array.from({
                          length:
                            getData[index].after_additional_potential_options
                              .length,
                        }).map((_, idx) => (
                          <ul key={idx}>
                            {"에디셔널 : "}
                            {
                              getData[index].after_additional_potential_options[
                                idx
                              ].grade
                            }
                            -
                            {
                              getData[index].after_additional_potential_options[
                                idx
                              ].value
                            }
                          </ul>
                        ))
                      : Array.from({
                          length: getData[index].after_potential_options.length,
                        }).map((_, idx) => (
                          <ul key={idx}>
                            {"잠재능력 : "}
                            {getData[index].after_potential_options[idx].grade}-
                            {getData[index].after_potential_options[idx].value}
                          </ul>
                        ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cube;

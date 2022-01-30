import React from "react";
import { Card } from "react-bootstrap";

const Hunt = () => {
  return (
    <div>
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
    </div>
  );
};

export default Hunt;
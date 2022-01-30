import React from "react";
import { Card, Table } from "react-bootstrap";

const LinkAndUnion = () => {
  const jobs = [
    "히어로",
    "팔라딘",
    "다크나이트",
    "아크메이지(불, 독)",
    "아크메이지(썬, 콜)",
    "비숍",
    "보우마스터",
    "패스파인더",
    "신궁",
    "나이트로드",
    "새도어",
    "듀얼블레이드",
    "캡틴",
    "바이퍼",
    "캐논슈터",
    "소울마스터",
    "플레임위자드",
    "윈드브레이커",
    "나이트워커",
    "스트라이커",
    "미하일",
    "블래스터",
    "배틀메이지",
    "와일드헌터",
    "메카닉",
    "제논",
    "데몬슬레이어",
    "데몬어벤져",
    "아란",
    "에반",
    "루미너스",
    "메르세데스",
    "팬텀",
    "은월",
    "카이저",
    "카인",
    "카데나",
    "엔젤릭버스터",
    "아델",
    "일리움",
    "아크",
    "라라",
    "호영",
    "제로",
    "키네시스",
  ];
  const link = [
    "현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 23% 회복. 재발동 대기시간 370초",
    "현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 29% 회복. 재발동 대기시간 290초",
    "현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 210초",
    "공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 17% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 1%, 방어율 무시 1% 증가",
    "공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 21% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 2%, 방어율 무시 2% 증가",
    "공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 25% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가",
    "몬스터 컬렉션 등록 확률 15%, 크리티컬 확률 4% 증가",
    "몬스터 컬렉션 등록 확률 25%, 크리티컬 확률 7% 증가",
    "몬스터 컬렉션 등록 확률 35%, 크리티컬 확률 10% 증가",
    "적에게 상태이상을 적용시키면 10초 동안 데미지 6% 증가 재발동 대기시간 20초",
    "적에게 상태이상을 적용시키면 10초 동안 데미지 12% 증가 재발동 대기시간 20초",
    "적에게 상태이상을 적용시키면 10초 동안 데미지 18% 증가 재발동 대기시간 20초",
    "힘 30, 민첩 30, 지력 30, 운 30, 최대 HP 525, 최대 MP 525, 피격 데미지 7% 감소",
    "힘 50, 민첩 50, 지력 50, 운 50, 최대 HP 875, 최대 MP 875, 피격 데미지 11% 감소",
    "힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 피격 데미지 15% 감소",
    "공격력과 마력 9, 상태 이상 내성 3, 모든 속성 내성 3% 증가",
    "공격력과 마력 13, 상태 이상 내성 6, 모든 속성 내성 6% 증가",
    "공격력과 마력 17, 상태 이상 내성 9, 모든 속성 내성 9% 증가",
    "공격력과 마력 21, 상태 이상 내성 12, 모든 속성 내성 12% 증가",
    "공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가",
    "15초 동안 상태 이상 내성 100 증가. 재사용 대기시간 120초",
    "부활 시 2초 동안 무적 상태, 맵 이동 시 해제",
    "부활 시 4초 동안 무적 상태, 맵 이동 시 해제",
    "부활 시 6초 동안 무적 상태, 맵 이동 시 해제",
    "부활 시 8초 동안 무적 상태, 맵 이동 시 해제",
    "모든 능력치 10% 증가",
    "보스 몬스터 공격시 데미지 15% 증가",
    "데미지 10% 증가",
    "영구적으로 콤보킬 구슬 경험치 획득량 650% 추가 획득",
    "해방된 룬의 힘 지속시간 50% 증가",
    "적 공격 시 방어율 무시 15% 적용",
    "사용 시 에우렐로 귀환 재사용 대기시간 1800초 추가효과 : 영구적으로 경험치 15% 추가 획득",
    "크리티컬 확률 15% 증가",
    "사망에 이르는 공격을 당할 시, 10% 확률로 생존",
    "HP 15% 증가",
    "적 8명 처치, 혹은 보스 몬스터에게 5번 공격 적중 시 사전 준비 1번 완료, 사전 준비를 5번 마치면 20초 동안 데미지 17% 증가 재발동 대기시간 40초",
    "캐릭터보다 레벨이 낮은 몬스터 공격 시 데미지 6% 증가, 상태 이상에 걸린 몬스터 공격 시 데미지 6% 증가",
    "발동 시 10초 동안 데미지 45% 증가 재사용 대기시간 90초",
    "같은 맵에 있는 자신을 포함한 파티원 1명 당 데미지 2% 증가, 최대 8%까지 증가. 파티를 하지 않았을 때는 자신만 파티한 것으로 취급. 보스 몬스터 공격 시 데미지 4% 증가",
    "일정 거리 이동 시 발동되며 최대 6회 중첩가능, 지속시간 5초 각 중첩당 데미지 2% 증가",
    "전투 상태가 5초 지속되면 발동되며 최대 5회 중첩 가능, 지속시간 5초[A] 발동 시 데미지 1% 증가, 각 중첩당 데미지 2% 증가",
    "데미지 5% 증가 일반 몬스터 20명 처치 시 자연의 도움 발동, 자연의 도움 발동 시 30초 동안 일반 몬스터 공격 시 데미지 11% 증가 재발동 대기시간 30초",
    "방어율 무시 10% 추가, HP가 100%인 몬스터 공격 시 데미지 14% 증가",
    "받는 데미지 15% 감소, 공격 시 대상의 방어율 10% 무시 (스토리퀘 깨야함)",
    "크리티컬 데미지 4% 증가",
  ];
  const union = [
    "STR 10/20/40/80/100 증가",
    "STR 10/20/40/80/100 증가",
    "최대 HP 2/3/4/5/6% 증가",
    "최대 MP 2/3/4/5/6% 증가",
    "INT 10/20/40/80/100 증가",
    "INT 10/20/40/80/100 증가",
    "DEX 10/20/40/80/100 증가",
    "DEX 10/20/40/80/100 증가",
    "크리티컬 확률 1/2/3/4/5% 증가",
    "크리티컬 확률 1/2/3/4/5% 증가",
    "LUK 10/20/40/80/100 증가",
    "LUK 10/20/40/80/100 증가",
    "소환수 지속 시간 4/6/8/10/12% 증가",
    "STR 10/20/40/80/100 증가",
    "STR 10/20/40/80/100 증가",
    "최대 HP 250/500/1000/2000/2500 증가",
    "INT 10/20/40/80/100 증가",
    "DEX 10/20/40/80/100 증가",
    "LUK 10/20/40/80/100 증가",
    "STR 10/20/40/80/100 증가",
    "최대 HP 250/500/1000/2000/2500 증가",
    "방어율 무시 1/2/3/4/5/6% 증가",
    "INT 10/20/40/80/100 증가",
    "공격 시 20% 확률로 데미지 4/8/12/16/20% 증가",
    "버프 지속 시간 5/10/15/20/25% 증가",
    "STR·DEX·LUK 각각 5/10/20/40/50 증가",
    "모든 상태 이상 저한 1/2/3/4/5 증가",
    "보스 공격 시 데미지 1/2/3/5/6% 증가",
    "적 타격 시 70%의 확률로 순수 HP의 2/4/6/8/10% 회복 발동 시 다음 발동 확률이 감소하지만 효과가 2배 (10초마다 1번)",
    "적 타격 시 70%의 확률로 순수 MP의 2/4/6/8/10% 회복 발동 시 다음 발동 확률이 감소하지만 효과가 2배 (10초마다 1번)",
    "INT 10/20/40/80/100 증가",
    "스킬 재사용 대기시간 2/3/4/5/6% 감소 (1초 미만으로 줄어들지 않음)",
    "메소 획득량 1/2/3/4/5% 증가",
    "크리티컬 데미지 1/2/3/4/5/6% 증가",
    "STR 10/20/40/80/100 증가",
    "DEX 10/20/40/80/100 증가",
    "INT 10/20/40/80/100 증가",
    "LUK 10/20/40/80/100 증가",
    "STR 10/20/40/80/100 증가",
    "INT 10/20/40/80/100 증가",
    "STR 10/20/40/80/100 증가",
    "INT 10/20/40/80/100 증가",
    "LUK 10/20/40/80/100 증가",
    "경험치 획득량 4/6/8/10/12% 증가",
    "INT 10/20/40/80/100 증가",
  ];
  return (
    <div>
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>링크 & 유니온</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>직업</th>
                <th>링크</th>
                <th>유니온</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 45 }).map((_, index) => (
                <tr>
                  <td key={index}>{jobs[index]}</td>
                  <td key={index}>{link[index]}</td>
                  <td key={index}>{union[index]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LinkAndUnion;

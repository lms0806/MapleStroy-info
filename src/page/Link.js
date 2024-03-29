import React from "react";
import { Card, Table } from "react-bootstrap";

const Link = () => {
  const jobs = [
    "모험가 전사",
    "모험가 법사",
    "모험가 궁수",
    "모험가 도적",
    "모험가 해적",
    "시그너스",
    "미하일",
    "레지스탕스",
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
    "현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 20/23/26/29/32/35% 회복. 재발동 대기시간 410/370/330/290/250/210초",
    "공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 15/17/19/21/23/25% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 1/1/2/2/3/3%, 방어율 무시 1/1/2/2/3/3% 증가",
    "몬스터 컬렉션 등록 확률 10/15/20/25/30/35%, 크리티컬 확률 3/4/6/7/9/10% 증가",
    "적에게 상태이상을 적용시키면 10초 동안 데미지 3/6/9/12/15/18% 증가 재발동 대기시간 20초",
    "힘 20/30/40/50/60/70, 민첩 20/30/40/50/60/70, 지력 20/30/40/50/60/70, 운 20/30/40/50/60/70, 최대 HP 350/525/700/875/1050/1225, 최대 MP 350/525/700/875/1050/1225, 피격 데미지 5/7/9/11/13/15% 감소",
    "공격력과 마력 7/9/11/13/15/17/19/21/23/25, 상태 이상 내성 1/3/4/6/7/9/10/12/13/15, 모든 속성 내성 1/3/4/6/7/9/10/12/13/15% 증가",
    "15초 동안 상태 이상 내성 100 증가. 재사용 대기시간 120초",
    "부활 시 1/2/3/4/5/6/7/8초 동안 무적 상태, 맵 이동 시 해제",
    "모든 능력치 5/10% 증가",
    "보스 몬스터 공격시 데미지 10/15% 증가",
    "데미지 5/10% 증가",
    "영구적으로 콤보킬 구슬 경험치 획득량 400/650% 추가 획득",
    "해방된 룬의 힘 지속시간 30/50% 증가",
    "적 공격 시 방어율 무시 10/15% 적용",
    "사용 시 에우렐로 귀환 재사용 대기시간 1800초 추가효과 : 영구적으로 경험치 10/15% 추가 획득",
    "크리티컬 확률 10/15% 증가",
    "사망에 이르는 공격을 당할 시, 5/10% 확률로 생존",
    "HP 10/15% 증가",
    "적 8명 처치, 혹은 보스 몬스터에게 5번 공격 적중 시 사전 준비 1번 완료, 사전 준비를 5번 마치면 20초 동안 데미지 9/17% 증가 재발동 대기시간 40초",
    "캐릭터보다 레벨이 낮은 몬스터 공격 시 데미지 3/6% 증가, 상태 이상에 걸린 몬스터 공격 시 데미지 3/6% 증가",
    "발동 시 10초 동안 데미지 30/45% 증가 재사용 대기시간 90초",
    "같은 맵에 있는 자신을 포함한 파티원 1명 당 데미지 1/2% 증가, 최대 8%까지 증가. 파티를 하지 않았을 때는 자신만 파티한 것으로 취급. 보스 몬스터 공격 시 데미지 2/4% 증가",
    "일정 거리 이동 시 발동되며 최대 6회 중첩가능, 지속시간 5초 각 중첩당 데미지 1/2% 증가",
    "전투 상태가 5초 지속되면 발동되며 최대 5회 중첩 가능, 지속시간 5초[A] 발동 시 데미지 1% 증가, 각 중첩당 데미지 1/2% 증가",
    "데미지 3/5% 증가 일반 몬스터 20명 처치 시 자연의 도움 발동, 자연의 도움 발동 시 30초 동안 일반 몬스터 공격 시 데미지 7/11% 증가 재발동 대기시간 30초",
    "방어율 무시 5/10% 추가, HP가 100%인 몬스터 공격 시 데미지 9/14% 증가",
    "받는 데미지 3/6/9/12/15% 감소, 공격 시 대상의 방어율 2/4/6/8/10% 무시 (스토리퀘 깨야함)",
    "크리티컬 데미지 2/4% 증가",
  ];

  const linkimg = [
    "https://cdn.maple.gg/images/maplestory/skills/links/invincible_belief.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/empirical_knowledge.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/adventurer_curious.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/thief_cunning.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/pirate_blessing.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/cygnus_blessing.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/knights_watch.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/spirit_of_freedom.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/hybrid_logic.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/fury_unleashed.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/wild_rage.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/combo_kill_advantage.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/rune_persistence.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/light_wash.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/eleven_blessing.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/phantom_instinct.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/elementalism.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/iron_will.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/kain.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/intensive_insult.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/terms_and_conditions.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/nobless.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/flow_of_battle.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/ecstasy.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/lara.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/bravado.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/rhinne_blessing.png",
    "https://cdn.maple.gg/images/maplestory/skills/links/judgement.png",
  ];
  return (
    <div>
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>링크</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>직업</th>
                <th>링크</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 28 }).map((_, index) => (
                <tr>
                  <td key={index}>
                    <img className="Image" src={linkimg[index]} />
                    {jobs[index]}
                  </td>
                  <td key={index}>
                    <div
                      dangerouslySetInnerHTML={{ __html: link[index] }}
                    ></div>
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

export default Link;

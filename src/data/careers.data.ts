import { CareersDetailProps } from "../interface/careers.interface";

export const careersDetail: CareersDetailProps[] = [
  {
    id: 3,
    name: "DOUBLE NC",
    role: "WEB DEVELOPER ",
    period: "2022.12 - 2023.12",
    description: [
      "Slow Query 튜닝으로 기존(30s 중반) 대비 성능을 1s 이내(96%)로 개선하였습니다.",
      "성능 개선에도 close가 된 작업 상황을 주변에 공유함으로써 추가적인 자원 낭비를 줄였습니다.",
      "REST API 신규 개발과 시스템 내 중요 버그(푸시 알림 중복 전송, 쿠폰 설명 부족, 매입 보류 쿠폰의 지속적인 매입 등)를 해결하였습니다.",
      "기존 백오피스(Vue.js, GraphQL, Apollo) 유지 보수의 어려움을 해결하기 위해, ‘재사용성’, ‘중복 방지’를 기준으로 삼아 13개의 기능을 이관(Next.js, Express.js)하였습니다.",
      "사내 문서화 부재로 ‘업무 공유의 필요성’에 대한 의견을 제시, ‘개발 낙서장' 시스템이 도입되면서 동료가 업무의 히스토리를 파악하는 데 도움이 되었습니다.",
    ],
  },
  {
    id: 2,
    name: "진학사",
    role: "DEV INTERNSHIP ",
    period: "2022.05 - 2022.07",
    description: [
      "동료들과 JavaScript 스터디를 진행하고, 업무 자동화를 위해 대학 정보 관리 서비스(NestJS, TypeORM)를 만들었습니다.",
      "인턴십 종료 후, 테스트 코드의 필요성을 느껴 따로 학습하였습니다.",
    ],
  },
  {
    id: 1,
    name: "42 SEOUL",
    role: "Member",
    period: "2020.05 - Present",
    description: [
      "교수, 교재, 학비 없이 자기 주도 및 동료학습으로 총 23개의 UNIX 기반 프로젝트를 수행(PBL: Project Based Learning)했습니다.",
      "C, C++를 활용하여 CS 개념을 직접 구현하면서, 이론을 빠르게 체득할 수 있었습니다.",
    ],
  },
];

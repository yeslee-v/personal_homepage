import {
  AWS_LOGO_URL,
  CSS_LOGO_URL,
  DJANGO_LOGO_URL,
  DJANGO_REST_LOGO_URL,
  DOCKER_LOGO_URL,
  HEROKU_LOGO_URL,
  HTML5_LOGO_URL,
  JAVASCRIPT_LOGO_URL,
  NESTJS_LOGO_URL,
  NEXTJS_LOGO_URL,
  POSTGRESQL_LOGO_URL,
  PYTHON_LOGO_URL,
  REACT_LOGO_URL,
  SOCKETIO_LOGO_URL,
  TYPESCRIPT_LOGO_URL,
  VERCEL_LOGO_URL,
} from "../app/constants";
import { ProjectsDetailProps } from "../interface/projects.interface";

export const projectsDetail: ProjectsDetailProps[] = [
  {
    id: 4,
    title: "yeslee-world",
    description: "개인 포트폴리오용 웹 사이트",
    period: "2024.08",
    skills: [
      TYPESCRIPT_LOGO_URL,
      REACT_LOGO_URL,
      NEXTJS_LOGO_URL,
      VERCEL_LOGO_URL,
    ],
    position: "FULL-STACK",
    roles: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
    githubUrl: "https://github.com/yeslee-v/personal_homepage",
  },
  {
    id: 3,
    title: "maseraT_pong_game",
    description: "Pong 게임 웹 사이트",
    period: "2022.06 - 2022.08",
    skills: [
      TYPESCRIPT_LOGO_URL,
      REACT_LOGO_URL,
      NESTJS_LOGO_URL,
      POSTGRESQL_LOGO_URL,
      SOCKETIO_LOGO_URL,
      DOCKER_LOGO_URL,
      AWS_LOGO_URL,
    ],
    position: "BACKEND DEVELOPMENT",
    roles: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
    githubUrl: "https://github.com/Maserati-Quattroporte/maseraT_pong_game",
  },
  {
    id: 2,
    title: "제철42",
    description: "제철 과채소 기반 온라인 커뮤니티 웹 서비스",
    period: "2021.08 - 2021.11",
    skills: [
      PYTHON_LOGO_URL,
      DJANGO_LOGO_URL,
      DJANGO_REST_LOGO_URL,
      POSTGRESQL_LOGO_URL,
      HEROKU_LOGO_URL,
    ],
    position: "BACKEND DEVELOPMENT",
    roles: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
    githubUrl: "https://github.com/GwaChaePah/jecheol42_backend",
  },
  {
    id: 1,
    title: "LifeOn42",
    description: "42 Seoul 개발자 성향 테스트",
    period: "2020.11 - 2020.12",
    skills: [HTML5_LOGO_URL, CSS_LOGO_URL, JAVASCRIPT_LOGO_URL],
    position: "FRONTEND DEVELOPMENT",
    roles: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
    deployUrl: "https://seohee-choi.github.io/LifeOn42/",
    githubUrl: "https://github.com/seohee-choi/LifeOn42",
  },
];

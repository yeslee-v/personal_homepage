import styles from "../../../../styles/project-info.module.css";

interface ProjectProps {
  params: { id: number };
}

interface ProjectDetailProps {
  id: number;
  name: string;
  title: string;
  description: string;
  githubUrl: string;
}

const projectDetails: ProjectDetailProps[] = [
  {
    id: 1,
    name: "LifeOn42",
    title: "42 Seoul 개발자 성향 테스트",
    description:
      "JavaScript 학습을 위해 if(kakao) 2020 행사에서 아이디어를 얻어 시작했습니다. 페어 프로그래밍으로 진행하면서, 7개의 질문 페이지와 각각의 결과 이미지를 쌓는 기능을 구현했습니다. 해상도에 따라 레이아웃이 깨지는 문제를 겪으면서 레이아웃의 통일성에 대해 고민해볼 수 있었습니다.",
    githubUrl: "https://github.com/seohee-choi/LifeOn42",
  },
  {
    id: 2,
    name: "제철 42",
    title: "제철 과채소 기반 온라인 커뮤니티 웹 서비스",
    description:
      "42서울 오픈 프로젝트 대회에 참여한 프로젝트입니다. 설계부터 배포까지, 웹 개발의 전체 사이클을 경험해보기 위해 시작, 러닝커브가 비교적 낮은 Python과 Django, Heroku를 선택했습니다. 메인 페이지 작업에 일정의 1/3이 소요되는 위기가 있었으나, 업무 재배분을 통해 일정 내에 프로젝트를 완성시킬 수 있었습니다.",
    githubUrl: "https://github.com/GwaChaePah/jecheol42_backend",
  },
  {
    id: 3,
    name: "Univ-Management-App",
    title: "대학 정보 관리 서비스",
    description:
      "업무 담당자 관리 자동화를 위해 시작한 프로젝트로 프론트엔드 3명, 백엔드 2명이 작업했습니다. 개발 환경 구축부터 DB 설계, RESTful API 구현 등 처음부터 끝까지 프로젝트의 전 과정을 진행했습니다. Query Builder와 TypeORM를 비교하면서 상황에 따라 어떤 도구가 적합한지 생각할 수 있었습니다.",
    githubUrl: "",
  },
  {
    id: 4,
    name: "ft_trancendence",
    title: "Pong 게임 웹 사이트",
    description:
      "pong game과 상대방과의 채팅 기능이 구현된 프로젝트로 프론트엔드 1명, 백엔드 2명이 작업했습니다. Build 시간을 줄이기 위해 AWS EC2에 배포하였습니다. 42 API와 JWT를 활용해 로그인과 게임 방에 출입하는 소켓을 구현하였습니다. JWT 저장 위치에 대해 상의하고, Django와 비교해가면서 NestJS만의 특징에 대해 학습하였습니다.",
    githubUrl: "https://github.com/Maserati-Quattroporte/maseraT_pong_game",
  },
];

const getProject = (id: number) => {
  return projectDetails.find((project) => {
    return project.id === id;
  });
};

const ProjectDetail = ({ params: { id } }: ProjectProps) => {
  const selectProject = getProject(Number(id));

  return (
    <div key={id} className={styles.container}>
      <h1>{selectProject.name}</h1>
      <h2>{selectProject.title}</h2>
      {selectProject.githubUrl.length > 0 && (
        <a href={selectProject.githubUrl}>github repository</a>
      )}
      <p>{selectProject.description}</p>
    </div>
  );
};

export default ProjectDetail;

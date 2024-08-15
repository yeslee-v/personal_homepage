import styles from "../../../../styles/project-info.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectsDetail } from "../../../../data/projects.data";
import { ProjectProps } from "../../../../interface/projects.interface";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const getProject = (id: number) => {
  return projectsDetail.find((project) => {
    return project.id === id;
  });
};

const ProjectDetail = ({ params: { id } }: ProjectProps) => {
  const selectProject = getProject(Number(id));

  return (
    <div key={id} className={styles.container}>
      <h1>{selectProject.title}</h1>
      <h2>{selectProject.description}</h2>
      {selectProject.githubUrl.length > 0 && (
        <a
          href={selectProject.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      )}
      {selectProject.skills.map((skill) => (
        <img src={skill} width={30} />
      ))}

      <ul>
        {selectProject.roles.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;

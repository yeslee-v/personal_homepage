import styles from "../../../../styles/project-info.module.css";

import { projectsDetail } from "../../../../data/projects.data";
import { ProjectProps } from "../../../../interface/projects.interface";

const getProject = (id: number) => {
  return projectsDetail.find((project) => {
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

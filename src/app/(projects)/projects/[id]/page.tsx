import styles from "../../../../styles/project-info.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectsDetail } from "../../../../data/projects.data";
import { ProjectProps } from "../../../../interface/projects.interface";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Metadata } from "next";

const getProject = (id: number) => {
  return projectsDetail.find((project) => {
    return project.id === id;
  });
};

export const generateMetadata = async ({
  params: { id },
}: ProjectProps): Promise<Metadata> => {
  const project = await getProject(Number(id));

  return {
    title: project.title,
  };
};

const ProjectDetail = ({ params: { id } }: ProjectProps) => {
  const selectProject = getProject(Number(id));

  return (
    <section key={id} className={styles.container}>
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
        <img key={id} src={skill} width={30} />
      ))}

      <div>
        <ul>
          {selectProject.roles.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetail;

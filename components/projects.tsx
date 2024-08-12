import Link from "next/link";
import styles from "../styles/projects.module.css";

interface ProjectDetailProps {
  id: number;
  name: string;
}

const projectDetails: ProjectDetailProps[] = [
  {
    id: 1,
    name: "LifeOn42",
  },
  {
    id: 2,
    name: "제철 42",
  },
  { id: 3, name: "Univ-Management-App" },
  {
    id: 4,
    name: "ft_trancendence",
  },
];

const Projects = () => {
  return (
    <div className={styles.project}>
      {projectDetails.map((project) => (
        <Link prefetch href={`projects/${project.id}`}>
          <div key={project.id} className={styles.projectBox}>
            {project.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;

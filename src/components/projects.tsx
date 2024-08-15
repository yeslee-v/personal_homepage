import Link from "next/link";
import styles from "../styles/projects.module.css";
import { projectsDetail } from "../data/projects.data";

const Projects = () => {
  return (
    <section className={styles.project}>
      {projectsDetail.map((project) => (
        <Link prefetch href={`projects/${project.id}`}>
          <div key={project.id} className={styles.projectBox}>
            {project.name}
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Projects;

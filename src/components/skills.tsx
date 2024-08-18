import styles from "../styles/skills.module.css";

import { skillList } from "../data/skills.data";

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className={styles.skillBox}>
        {skillList.map((skill, index) => (
          <img key={`${index}-${skill}`} src={skill} width={50} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

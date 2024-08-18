import { Metadata } from "next";
import styles from "../styles/experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { MEDIUM_URL } from "../app/constants";
import { experienceDetail } from "../data/experience.data";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2>Experience</h2>
      <div>
        {experienceDetail.map((experience, index) => (
          <section
            key={`${index}-${experience.name}`}
            className={styles.experienceBox}
          >
            <div className={styles.experienceTitle}>
              <h3>{experience.name}</h3>
              <a
                href={`${MEDIUM_URL}${experience.blogPostPath}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
              <h5>{experience.period}</h5>
            </div>
            <ul>
              {experience.description.map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Experience;

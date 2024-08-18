import styles from "../styles/education.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { educationDetail } from "../data/education.data";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      <div>
        {educationDetail.map((education, index) => (
          <div
            key={`${index}-${education.name}`}
            className={styles.educationBox}
          >
            <div className={styles.educationTitle}>
              <h3>{education.name}</h3>
              {education.blogPostPath && (
                <a
                  href={`${education.blogPostPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}

              <h5>{education.period}</h5>
            </div>
            <ul>
              {education.role && <li>{education.role}</li>}
              {education.description.map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

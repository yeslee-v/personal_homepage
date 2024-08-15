import { Metadata } from "next";
import styles from "../styles/careers.module.css";
import { careersDetail } from "../data/careers.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { MEDIUM_URL } from "../app/constants";

export const metadata: Metadata = {
  title: "Careers",
};

const Careers = () => {
  return (
    <div className={styles.careers}>
      {careersDetail.map((career, index) => (
        <section key={index} className={styles.careerInfo}>
          <div className={styles.careerTitle}>
            <h2>{career.name}</h2>
            <a
              href={`${MEDIUM_URL}${career.blogPostPath}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
            <h5>{career.period}</h5>
          </div>
          <ul>
            {career.description.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Careers;

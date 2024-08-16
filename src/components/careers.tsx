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
    <section className={styles.careers}>
      <h2>Careers</h2>
      <div>
        {careersDetail.map((career, index) => (
          <section key={index} className={styles.careerBox}>
            <div className={styles.careerTitle}>
              <h3>{career.name}</h3>
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
    </section>
  );
};

export default Careers;

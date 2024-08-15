import styles from "../styles/contacts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { GITHUB_URL, GMAIL, LINKEDIN_URL, MEDIUM_URL } from "../app/constants";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a href={`mailto:${GMAIL}`} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGoogle} size="2x" color="#D14836" />
      </a>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0966C2" />
      </a>
      <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} size="2x" />
      </a>
    </div>
  );
};

export default Contacts;

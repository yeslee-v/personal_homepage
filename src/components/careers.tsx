import { Metadata } from "next";
import styles from "../styles/careers.module.css";
import { careersDetail } from "../data/careers.data";

export const metadata: Metadata = {
  title: "Careers",
};

const Careers = () => {
  return (
    <div className={styles.careers}>
      {careersDetail.map((career, index) => (
        <div key={index} className={styles.careerInfo}>
          {career.name}
          <div className={styles.popup}>
            <h4>{career.period}</h4>
            <ul>
              {career.description.map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ul>
            <p></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Careers;

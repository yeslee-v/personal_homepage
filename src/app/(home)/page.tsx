import { Metadata } from "next";

import Projects from "../../components/projects";
import Contacts from "../../components/contacts";
import styles from "../../styles/home.module.css";
import Careers from "../../components/careers";

export const metadata: Metadata = {
  title: "Home",

};

const Homepage = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>YESHIN LEE</h1>
        <p>Software developer who being positive</p>
      </div>
      <Contacts />
      <hr />
      <Careers />
      <hr />
      <Projects />
    </section>
  );
};

export default Homepage;

import { Metadata } from "next";

import Projects from "../../components/projects";
import Contacts from "../../components/contacts";
import styles from "../../styles/home.module.css";
import Careers from "../../components/careers";
import Education from "../../components/education";

export const metadata: Metadata = {
  title: "Home",
  icons: { icon: "/images/yeslee-world.png" },
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
      <hr />
      <Education />
    </section>
  );
};

export default Homepage;

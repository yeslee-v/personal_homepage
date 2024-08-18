import { Metadata } from "next";

import Home from "../../components/home";
import Contacts from "../../components/contacts";
import Experience from "../../components/experience";
import Projects from "../../components/projects";
import Education from "../../components/education";
import Skills from "../../components/skills";

export const metadata: Metadata = {
  title: "Home",
  icons: { icon: "/images/yeslee-world.png" },
};

const Homepage = () => {
  return (
    <section>
      <Home />
      <Contacts />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Education />
      <hr />
      <Skills />
    </section>
  );
};

export default Homepage;

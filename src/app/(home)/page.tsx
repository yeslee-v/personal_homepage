import { Metadata } from "next";

import Projects from "../../components/projects";
import Contacts from "../../components/contacts";
import Careers from "../../components/careers";
import Education from "../../components/education";
import Home from "../../components/home";
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
      <Careers />
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

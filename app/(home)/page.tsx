import { Metadata } from "next";
import Career from "../../components/career";
import Projects from "../../components/projects";
import Contacts from "../../components/contacts";

export const metadata: Metadata = {
  title: "Home",
};

const Homepage = () => {
  return (
    <div>
      <h1>Hello Everyone, I'm yeshin lee!</h1>
      <h2>Software developer who being positive.</h2>
      <Career />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Homepage;

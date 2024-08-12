import { Metadata } from "next";
import Career from "../../components/career";

export const metadata: Metadata = {
  title: "Home",
};

const Homepage = () => {
  return (
    <div>
      <h1>Hello Everyone, I'm yeshin lee!</h1>
      <h2>Software developer who being positive.</h2>
      <Career />
    </div>
  );
};

export default Homepage;

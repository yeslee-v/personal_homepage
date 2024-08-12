import { Metadata } from "next";
import styles from "../styles/careers.module.css";

export const metadata: Metadata = {
  title: "Careers",
};

interface CareerDetailsProps {
  id: number;
  name: string;
  period: string;
  description: string;
}

const careerDetails: CareerDetailsProps[] = [
  {
    id: 1,
    name: "Greenpeace",
    period: "2016.02 - 2019.06",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    name: "Posco_AI_Course",
    period: "2019.09 - 2019.12",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    name: "42_Seoul",
    period: "2020.05 - Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 4,
    name: "한국방송통신대학교(Knou)",
    period: "2022.08 - Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 5,
    name: "진학사",
    period: "2022.05 - 2022.07",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 6,
    name: "Double nc",
    period: "2022.12 - 2023.12",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

const Careers = () => {
  return (
    <div className={styles.careers}>
      {careerDetails.map((career) => (
        <div className={styles.careerInfo}>
          {career.name}
          <div className={styles.popup}>
            <h6>{career.period}</h6>
            <p>{career.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Careers;

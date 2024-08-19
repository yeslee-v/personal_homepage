import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <h1>Lorem Ipsum</h1>
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      <div className={styles.description}>
        <span>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </span>
        <span>
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
        </span>
        <span>
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur,
          from a Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source.
        </span>
        <span>
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC.
        </span>
      </div>
    </section>
  );
};

export default Home;

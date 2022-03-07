import { useState } from "react";
import styles from "./styles/Steps.module.scss";

const index = ({ steps }) => {
  const [activeSetep, setActiveSetep] = useState(0);

  const handlerChangeStep = (increment) => {
    setActiveSetep((currentState) => currentState + increment);
  };

  return (
    <section className={styles.container}>
      <div className={styles.progress_container}>
        <div
          className={styles.progress}
          style={{ width: `${(activeSetep / (steps.length - 1)) * 100}%` }}
        >
          {" "}
        </div>
        {steps.map((item, idx) => {
          return (
            <div
              key={`step-${idx}`}
              className={`${styles.circle} ${
                activeSetep >= idx ? styles.active : ""
              }`}
            >
              {idx + 1}
            </div>
          );
        })}
      </div>
      <section className={styles.buttons}>
        <button
          onClick={() => handlerChangeStep(-1)}
          className={`${styles.button} ${styles.button_prev}`}
          disabled={activeSetep === 0 ? true : false}
        >
          prev
        </button>
        <button
          onClick={() => handlerChangeStep(1)}
          className={`${styles.button} ${styles.button_next}`}
          disabled={steps.length - 1 === activeSetep ? true : false}
        >
          next
        </button>
      </section>
    </section>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      steps: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
  };
};

export default index;

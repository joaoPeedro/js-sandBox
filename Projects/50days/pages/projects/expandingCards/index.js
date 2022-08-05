import { useState } from "react";
import styles from "./styles/ExpandingCards.module.css";

const index = ({ cards }) => {
  const [activeCard, setActiveCard] = useState(0);

  const handlerChangeCard = (index) => {
    setActiveCard((currentState) => index);
  };

  return (
    <section className={styles.container}>
      {cards.map((item, idx) => {
        return (
          <div
            key={`panel-${idx}`}
            className={`${styles.panel} ${
              activeCard === idx && styles.panelActive
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => handlerChangeCard(idx)}
          >
            <h3
              className={`${styles.title} ${
                activeCard === idx && styles.titleActive
              }`}
            >
              {item.title}
            </h3>
          </div>
        );
      })}
    </section>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      cards: [
        {
          id: 1,
          title: "card one",
          image: "https://loremflickr.com/620/340?random=1",
        },
        {
          id: 2,
          title: "card two",
          image: "https://loremflickr.com/620/340?random=2",
        },
        {
          id: 3,
          title: "card three",
          image: "https://loremflickr.com/620/340?random=3",
        },
        {
          id: 4,
          title: "card four",
          image: "https://loremflickr.com/620/340?random=4",
        },
        {
          id: 5,
          title: "card five",
          image: "https://loremflickr.com/620/340?random=5",
        },
      ],
    },
  };
};

export default index;

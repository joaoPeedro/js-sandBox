import { useState } from "react";
import styles from "./styles/Steps.module.scss";

const index = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handlerChangeMenuActive = () => {
    setActiveMenu((currentState) => !currentState);
  };

  return <section className={styles.container}></section>;
};

export default index;

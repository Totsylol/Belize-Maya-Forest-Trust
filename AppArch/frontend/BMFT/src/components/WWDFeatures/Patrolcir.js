import React from "react";
import styles from '../styles/patrolcir.module.css';
import Hand from "../assets/Hand.jpg";
import Fist from "../assets/Fist.jpg";
import Tree from "../assets/Tree.jpg";

const Patrolcir = () => {
  const bubbleData = [
    { title: "Protect", image: Fist },
    { title: "Preserve", image: Tree },
    { title: "Inspire", image: Hand },
  ];

  return (
    <div className={styles.bubbleContainer}>
      {bubbleData.map((bubble, index) => (
        <div key={index} className={styles.bubble}>
          <img src={bubble.image} alt={bubble.title} className={styles.bubbleImage} />
          <h3 className={styles.bubbleTitle}>{bubble.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Patrolcir;

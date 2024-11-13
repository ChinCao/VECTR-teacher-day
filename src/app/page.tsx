"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [card, setCard] = useState(Math.floor(Math.random() * 6) + 1);

  const randomNumber = () => {
    if (card < 6) {
      setCard(card + 1);
    } else {
      setCard(1);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("/Card${card}/background.jpeg")`,
      }}
      className={styles.page}
    >
      <div className="container">
        <Image
          src={`/Card${card}/letter.png`}
          height={736}
          width={525}
          alt="letter"
          className={styles.letter}
        />
        <Image
          src={`/Card${card}/envelope.png`}
          height={512}
          width={365}
          alt="letter"
          className={styles.envelope}
        />
      </div>
      <button onClick={randomNumber}>Skibidi</button>
    </div>
  );
}

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { ENGLISH_PROMPT, VIETNAMESE_PROMPT } from "@/constants/promp";

export default function Home() {
  const number_of_cards = 5;
  const number_of_prompts = ENGLISH_PROMPT.length;
  const [card, setCard] = useState(1);
  const [prompt, setPrompt] = useState(1);

  useEffect(() => {
    setCard(Math.floor(Math.random() * number_of_cards) + 1);
    setPrompt(Math.floor(Math.random() * number_of_prompts) + 1);
  }, [number_of_prompts]);

  const nextElement = () => {
    if (card < number_of_cards) {
      setCard(card + 1);
    } else {
      setCard(1);
    }
    if (prompt < number_of_prompts) {
      setPrompt(card + 1);
    } else {
      setPrompt(1);
    }
  };
  const adjustCSS = (property: "width" | "top" | "left") => {
    const cardType = card === 2 || card === 4 || card === 5;

    const styles = {
      width: cardType ? "58%" : "50%",
      top: cardType ? "30%" : "18%",
      left: cardType ? "31%" : "25%",
    };

    return styles[property];
  };

  return (
    <div
      style={{
        backgroundImage: `url("/Card${card}/background.jpeg")`,
      }}
      className={styles.page}
    >
      <div className={styles.container}>
        <div className={styles.letter_container}>
          <Image
            src={`/Card${card}/letter.png`}
            height={707}
            width={504}
            alt="letter"
            className={styles.letter}
          />
          <div
            className={styles.text_container}
            style={{
              width: adjustCSS("width"),
              top: adjustCSS("top"),
              left: adjustCSS("left"),
            }}
          >
            <p className={styles.vietnamese}>{VIETNAMESE_PROMPT[prompt]}</p>
            <p className={styles.english}>{ENGLISH_PROMPT[prompt]}</p>
          </div>
        </div>
        <div className={styles.envelope_container}>
          <Image
            src={`/Card${card}/envelope.png`}
            height={614}
            width={438}
            alt="letter"
            className={styles.envelope}
          />
          <button onClick={nextElement} className={styles.switch_button}>
            Đổi/Change{" "}
            <Image
              src={`/vectr.png`}
              height={20}
              width={20}
              alt="VECTR LOGO"
              className={styles.logo}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

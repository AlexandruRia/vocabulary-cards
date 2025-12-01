"use client"

import { Word } from "@/types/word"
import styles from "../styles/WordCard.module.css";
import { useState } from "react";


interface WordCardProps {
    word: Word;
    hidden: boolean
}

export default function WordCard({word, hidden}: WordCardProps) {

    const [hiddenCard, setHiddenCard] = useState(hidden)
    const [translateInput, setTranslateInput] = useState("")

      const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shake, setShake] = useState(false);

   function verifySubmission(value: string) {
    const correct = value.trim().toLowerCase() === word!.name!.toLowerCase();

    if (correct) {
      setIsCorrect(true);
      setShake(false);
    } else {
      setIsCorrect(false);

      // Trigger shake animation
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }

   if (hiddenCard) {
    return (
      <div className={styles.hiddenCard}>
        <p className={styles.translation}>{word.translation}</p>

        <input
          type="text"
          value={translateInput}
          onChange={(e) => {
            setTranslateInput(e.target.value);
            setIsCorrect(null); // reset result
          }}
          placeholder="Translate ?"
          className={`${styles.input} ${shake ? styles.errorShake : ""}`}
        />

        {/* Success message */}
        {isCorrect === true && (
          <div className={styles.success}>
            <span className={styles.checkmark}>✓</span>
            Correct!
          </div>
        )}

        <div className={styles.buttonRow}>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => verifySubmission(translateInput)}
          >
            Submit
          </button>

          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={() => setHiddenCard(false)}
          >
            Reveal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <p className={styles.titleRow}>
        {word.translation}
        <span className={styles.subtitle}> – {word.name}</span>
      </p>

      <p className={styles.description}>{word.description}</p>
      <p className={styles.example}>{word.example}</p>

      <button className={styles.concealBtn} onClick={() => setHiddenCard(true)}>
        Conceal
      </button>
    </div>
  );
}
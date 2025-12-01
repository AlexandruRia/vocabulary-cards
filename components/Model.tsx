"use client";
import React, { ReactNode, useState } from "react";
import styles from "../styles/Modal.module.css";
import { supabase } from "@/lib/supabase";
import { Word } from "@/types/word";


interface ModalProps {
  openModal: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export default function Modal() {
 
    const [open, setOpen] = useState<boolean>(false);

    const [name, setName] = useState<string>("");
    const [translation, setTranslation] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [example, setExample] = useState<string>("");


      async function addNewWord() {
        const word: Word = {
            name: name,
            translation: translation,
            description: description,
            example: example
        }

        await supabase.from("Word").insert(word)

        setOpen(false)
    }


  if (!open) return (
    <div className={styles.addNewWordContainer}>
        <button className={styles.addNewWord} onClick={() => setOpen(true)} type="button">Add a new Word</button>
    </div>
     

  );

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={() => setOpen(false)} className={styles.closeButton}>
          ✕
        </button>

        <div className={styles.field}>
          <p className={styles.label}>Name</p>
          <input value={name} onChange={e => setName(e.target.value)} type="text" className={styles.input} />
        </div>

        <div className={styles.field}>
          <p className={styles.label}>Translation</p>
          <input value={translation}  onChange={e => setTranslation(e.target.value)} type="text" className={styles.input} />
        </div>

        <div className={styles.field}>
          <p className={styles.label}>Example Sentence (Optional)</p>
          <input value={description} onChange={e => setDescription(e.target.value)} type="text" className={styles.input} />
        </div>

        <div className={styles.field}>
          <p className={styles.label}>Description (Optional)</p>
          <input value={example} onChange={e => setExample(e.target.value)} type="text" className={styles.input} />
        </div>

        <button type="submit" onClick={() => addNewWord() } className={styles.submitButton}>
          Create
        </button>
      </div>
    </div>
  );
}

import { Word } from "@/types/word";
import { DeleteRowButton } from "./DeleteRowButton";
import styles from "../styles/Vocabulary.module.css";


interface ListAllWordsProps {
    word: Word[] | null
}

export async function ListAllWords({word}:ListAllWordsProps) {
  

  return(
      <ul className={styles.wordList}>
      {word?.map((item) => (
        <li key={item.id} className={styles.wordItem}>
          <span className={styles.wordText}>
            {item.name} - {item.translation}
          </span>
          <DeleteRowButton id={item.id!} />
        </li>
      ))}
    </ul>
  )
}
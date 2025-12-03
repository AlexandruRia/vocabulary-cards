
export const dynamic = "force-dynamic";

import { ListAllWords } from "@/components/ListAllWords";
import Modal from "@/components/Model";
import styles from "../../styles/Vocabulary.module.css";

export default async function Vocabulary() {

  return (
    <div className={styles.vocabularyPage}>
      <h1>Vocabulary Page</h1>
      <Modal></Modal>
      <ListAllWords></ListAllWords>
    </div>
    )
}

export const dynamic = "force-dynamic";

import { ListAllWords } from "@/components/ListAllWords";
import Modal from "@/components/Model";
import { supabase } from "@/lib/supabase";
import styles from "../../styles/Vocabulary.module.css";

export default async function Vocabulary() {

   const { data, error } = await supabase
    .from("Word")
    .select("*");
  
  return (
    <div className={styles.vocabularyPage}>
      <h1>Vocabulary Page</h1>
      <ListAllWords word={data}></ListAllWords>
      <Modal></Modal>
    </div>
    )
}
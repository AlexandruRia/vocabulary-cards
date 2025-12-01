
export const dynamic = "force-dynamic";

import AddWord from "@/components/AddWord";
import { ListAllWords } from "@/components/ListAllWords";
import Modal from "@/components/Model";
import { supabase } from "@/lib/supabase";
import { Word } from "@/types/word";

export default async function Vocabulary() {
   const { data, error } = await supabase
    .from("Word")
    .select("*");
  
  return (
    <div>
      <h1>Vocabulary Page</h1>
        <ListAllWords word={data}></ListAllWords>
     <AddWord></AddWord>
      <Modal></Modal>
    </div>
    )
}
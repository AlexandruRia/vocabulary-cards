
import AddWord from "@/components/AddWord";
import { ListAllWords } from "@/components/ListAllWords";
import Modal from "@/components/Model";

export default function Vocabulary() {

  return (
    <div>
      <h1>Vocabulary Page</h1>
        <ListAllWords></ListAllWords>
     <AddWord></AddWord>
      <Modal></Modal>
    </div>
    )
}
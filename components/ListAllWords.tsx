
import { Word } from "@/types/word";

interface ListAllWordsProps {
    word: Word[] | null
}

export async function ListAllWords({word}:ListAllWordsProps) {
  

  return(
     <ul>
        {word?.map((item) => (
          <li key={item.id}>{item.name} - {item.transaltion}</li>
        ))}
      </ul>
  )
}
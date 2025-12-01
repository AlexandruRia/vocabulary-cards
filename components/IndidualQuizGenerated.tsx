import { Word } from "@/types/word"
import WordCard from "./WordCard"

interface IndividualQuizGeneratedProps {
    words: Word[]
}

export default function IndividualQuizGenerated({words}: IndividualQuizGeneratedProps) {
  return (
    <ul >
        {words.map((word) => (
            <li key={word.id}><WordCard word={word} hidden={true}></WordCard></li>
        ))}
    </ul>

  ) 
  
}
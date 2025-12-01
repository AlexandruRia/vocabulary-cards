import IndividualQuizGenerated from "@/components/IndidualQuizGenerated";
import { supabase } from "@/lib/supabase";
import { Word } from "@/types/word";

interface IndividualQuizPageProps {
  params: {
    cardNumber: number;
  };
}

export default async function IndividualQuiz({ params }: IndividualQuizPageProps) {
   const { cardNumber } = await params;
    const { data } = await supabase.from("Word").select("*");
    const randomizedData = randomizeArray(data!)

    

 function randomizeArray(words: Word[]): Word[] {
       return words!.sort(() => 0.5 - Math.random())
        .slice(0, cardNumber)
    }
   


  return (
    <div>
      <IndividualQuizGenerated words={randomizedData}></IndividualQuizGenerated>
    </div>
  ) 
  
}
"use client"

import { useState } from 'react';
import styles from '../styles/CardTestPage.module.css'
import { FaCirclePlay } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

export default function AmountQuestion() {
    const router = useRouter()

    const [amount, setAmount] = useState<string>("")
  
    const goToQuiz = (val: string) => {
        router.push(`/card-test/individual-quiz/${val}`)
    }

  return (
    <div>
        <div className={styles.amountQueestionContainer}>
          <p>Select the amount of cards to generate:</p>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type='text'></input>
        </div>
        <button onClick={() => {goToQuiz(amount)}} className={styles.generateButton}>Generate<FaCirclePlay  size={20} />
</button>

    </div>
        
    
  ) 
  
}
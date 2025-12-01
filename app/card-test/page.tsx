import AmountQuestion from '@/components/AmountQuestion';
import styles from '../../styles/CardTestPage.module.css'
import { FaCirclePlay } from "react-icons/fa6";

export default function CardTest() {

  

  return (
    <div className={styles.cardTestGeneral} >
      <div className={styles.cardTestPage}>
        <h1>Card Test Page</h1>
        <AmountQuestion></AmountQuestion>
      </div>
    </div>
  ) 
  
}
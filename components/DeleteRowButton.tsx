"use client"

import { supabase } from '@/lib/supabase'
import styles from '../styles/DeleteRowButton.module.css'
import { MdDelete } from "react-icons/md";



export function DeleteRowButton({id}: {id:string}) {
    
    async function deleteWord() {
        const { error } = await supabase.from("Word").delete().eq("id", id);
    }

  return(
     <button onClick={() => {deleteWord()}} className={styles.deleteButton}><MdDelete color='red' size={24}/></button>
  )
}
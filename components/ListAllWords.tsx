"use client"

import { Word } from "@/types/word";
import { DeleteRowButton } from "./DeleteRowButton";
import styles from "../styles/Vocabulary.module.css";
import { SearchBar } from "./SearchBar";
import { useEffect, useState } from "react";


export function ListAllWords() {

    const [wordsArr, setWordArr] = useState<Word[]>([])
    // const [ searchQuery, setSearchQuery] = useState('')

     const searchEndointRes = async (searchValue: string) => {
        
        fetch(`/api/search?q=${searchValue}`)
            .then((res) => 
                (res.json()
                    .then(
                        res2 => {
                            // setSearchQuery(searchValue)
                            setWordArr(res2)
                        }
                    )
                )
            )
    }
    
    useEffect(() => {
        searchEndointRes('')
    }, [])
    


  return(
    <div>
        <SearchBar words={searchEndointRes}></SearchBar>
      <ul className={styles.wordList}>
      {wordsArr?.map((item) => (
        <li key={item.id} className={styles.wordItem}>
          <span className={styles.wordText}>
            {item.name} - {item.translation}
          </span>
          <DeleteRowButton id={item.id!} />
        </li>
      ))}
    </ul>
    </div>
   
  )
}
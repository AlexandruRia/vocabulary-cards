
"use client"

import { useState } from 'react'
import styles from '../styles/Vocabulary.module.css'

interface SearchBarProps {
    words: (query: string) => void 
}

export function SearchBar({words}: SearchBarProps) {

    const [searchValue, setSearchValue] = useState('')

    function sendSearchValue(query: string) {
        setSearchValue(query)
        words(query)
    }


    return (
        <div className={styles.searchBarContainer}>
            <input value={searchValue} onChange={(e) => sendSearchValue(e.target.value)} type="text" placeholder="Search words...."/>
        </div>
    )

}
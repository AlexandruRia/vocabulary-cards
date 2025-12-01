"use client";

import { supabase } from "@/lib/supabase";
import { Word } from "@/types/word";

export default function AddWord() {
    
      async function addNewWord(word: Word) {
        await supabase.from("Word").insert(word)
        return
      }

    return (
         <button onClick={() => addNewWord({name: "test"})} style={{
          padding: "8px 12px",
          background: "#0070f3",
          border: "none",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
        }} type="button">Add a new Word</button>
    )
}
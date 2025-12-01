"use client"

import { supabase } from "@/lib/supabase";



export async function ListAllWords() {
   const { data, error } = await supabase
    .from("Word")
    .select("*");

  return(
     <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.name} - {item.transaltion}</li>
        ))}
      </ul>
  )
}
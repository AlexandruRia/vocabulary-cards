import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";


export async function GET() {

    const getCountofAllWords = await supabase.from("Word")
                    .select("*" , { head: true, count: "exact"})

   return NextResponse.json(getCountofAllWords);
}
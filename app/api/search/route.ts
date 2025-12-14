import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";




export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || '';

    const supabase =  createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

      const { data, error } = await supabase
    .from("Word")
    .select("*")
    .ilike("name", `%${query}%`)
    .limit(10);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json(data);

}
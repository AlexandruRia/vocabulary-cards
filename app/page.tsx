import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>{process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY}</div>
  );
}

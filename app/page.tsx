import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#03031F] text-white">
      <Hero />
      <Problem />
    </main>
  );
}
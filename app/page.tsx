import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Method from "../components/sections/Method";
import Dashboard from "../components/sections/Dashboard";
import Management from "../components/sections/Management";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#03031F] text-white">
      <Hero />
      <Problem />
      <Method />
      <Dashboard />
      <Management />
    </main>
  );
}
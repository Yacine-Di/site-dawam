import Hero from "@/components/sections/Hero"
import Organization from "../components/sections/Organization"
import Dashboard from "../components/sections/Dashboard"
import System from "../components/sections/System"
import Accounting from "../components/sections/Accounting"
import Method2 from "../components/sections/Method2"
import BeforeAfter from "../components/sections/BeforeAfter"
import Timing from "../components/sections/Timing"
import FinalCta from "../components/sections/FinalCta"


export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#03031F] text-white">
      <Hero />
      <Organization />
      <Dashboard />
      <System />
      <Accounting />
      <Method2 />
      <BeforeAfter />
      <Timing />
      <FinalCta />
    </main>
  );
}
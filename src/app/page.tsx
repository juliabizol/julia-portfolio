import { StickyNav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <StickyNav />
      <main>
        <Hero />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

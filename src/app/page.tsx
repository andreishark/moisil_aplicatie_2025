import Image from "next/image";
import { Component } from  "@/components/ui/line-chart";

export default function Home() {
  return (
    <div>
     <div className="grid grid-flow-row items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src="/nasa-earth.jpg"
        alt="Earth photo"
        fill={true}
      />
      <h1 className="mb-36 bg-clip-border border-slate-300 rounded-xl p-2 bg-gradient-to-r from-teal-500 to-indigo-600 text-6xl text-center font-semibold z-10 drop-shadow-2xl">Poți face o schimbare.</h1>
    </div>
    <div className="grid grid-flow-row items-center justify-items-center min-h-screen">
      <Component/>
    </div>
    </div>
  );
}

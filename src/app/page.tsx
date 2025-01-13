import { getForestPercentPerYear } from "@/datasets/dataProcessing";
import Image from "next/image";
import { Component } from "@/components/ui/line-chart";

export default function Home() {
  //console.log(getForestPercentPerYear());

  return (
    <div className="grid grid-rows-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src="/nasa-earth.jpg" alt="Earth photo" fill={true} />
      <h1 className="text-6xl text-center font-semibold z-10 drop-shadow-2xl">
        Poți face o schimbare.
      </h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <div className="grid grid-flow-row items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="mt-36">
          <Image src="/nasa-earth.jpg" alt="Earth photo" fill={true} />
          <h1 className="mb-36 bg-clip-border border-slate-300 rounded-xl p-2 bg-gradient-to-r from-teal-500 to-indigo-600 text-6xl text-center font-semibold z-10 drop-shadow-2xl">
            Poți face o schimbare.
          </h1>
        </div>

        <article className="mt-28 mx-24 z-10 bg-slate-700 p-3">
          <h2 className="text-lg font-semibold">
            Pentru o planetă mai sănătoasă
          </h2>
          <p className="text-wrap">
            A growing global population and economic shift towards more
            resource-intensive consumption patterns means that global freshwater
            use has increased approximately six-fold since 1900. Freshwater use
            includes freshwater withdrawals for agriculture, industry, and
            municipal uses. This is shown in the chart. Rates of global
            freshwater use increased sharply from the 1950s onwards but since
            2000 appear to be plateauing, or at least slowing.
          </p>
        </article>

        <div className="grid grid-flow-row items-center justify-items-stretch min-h-screen mx-36">
          <Component />
        </div>
      </div>
    </div>
  );
}

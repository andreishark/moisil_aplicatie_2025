import { getForestPercentPerYear } from "@/datasets/dataProcessing";
import Image from "next/image";

export default function Home() {
  console.log(getForestPercentPerYear());

  return (
    <div className="grid grid-rows-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src="/nasa-earth.jpg" alt="Earth photo" fill={true} />
      <h1 className="text-6xl text-center font-semibold z-10 drop-shadow-2xl">
        Poți face o schimbare.
      </h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
    </div>
  );
}

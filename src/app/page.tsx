import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salvăm resursele naturale"
}

export default function Home() {
  // console.log(getForestPercentPerYear());

  return (
        <div className="grid grid-flow-row items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
          <div>
            <Image
              src="/nasa-earth.jpg"
              alt="Earth photo"
              fill={true}
            />
          <h1 className="mt-24 mb-36 bg-clip-border border-slate-300 rounded-xl p-2 bg-gradient-to-r from-teal-500 to-indigo-600 text-5xl text-center font-semibold z-10 drop-shadow-2xl">
            Poți face o schimbare.</h1>
          </div>
        
          <Link className="text-sm underline justify-self-start text-slate-300 z-10"
              href="https://images.nasa.gov/details/iss036e005964"
          >Poză: Nasa - Earth Observation </Link>
        
          <article className="mt-28 mx-24 z-10 bg-slate-700 p-5">
          <h2 className="text-xl font-semibold mb-2">Pentru o planetă mai sănătoasă</h2>
          <p className="text-wrap indent-4">
            Resursele naturale sunt fundația vieții de pe Pământ, formând ecosisteme, alimentându-ne casele și industriile. 
            Aceste resurse - apă, pământ, minerale și păduri - sunt finite și de neînlocuit. 
            Economisirea este crucială pentru prezervarea acestora pe termen lung. Așa ne putem proteja planeta în timp ce construim un viitor mai sustenabil. 
            Cele mai importante resurse merită cea mai mare grijă a noastră. Fă o diferență.
            </p>
          </article>

          <Link className="bg-sky-500 hover:bg-sky-700 p-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            href="./compilation/page" >
            Mai multe detalii
          </Link>

        </div>
  );
}

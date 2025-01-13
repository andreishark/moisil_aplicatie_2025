import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // console.log(getForestPercentPerYear());

  return (
      <div className="grid grid-flow-row items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <div className="grid grid-flow-row items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <div>
            <Image
              src="/nasa-earth.jpg"
              alt="Earth photo"
              fill={true}
            />
          <h1 className="mt-24 mb-36 bg-clip-border border-slate-300 rounded-xl p-2 bg-gradient-to-r from-teal-500 to-indigo-600 text-6xl text-center font-semibold z-10 drop-shadow-2xl">
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

        </div>
      </div>
  );
}

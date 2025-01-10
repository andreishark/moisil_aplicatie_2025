import Image from "next/image";

export default function Home(){
    return(
        <div className="grid grid-rows-4 items-center justify-items-stretch min-h-screen px-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-arial)]">
            <h1>Hello</h1>
            <div className="flex flex-row">
                <div className = "basis-1/6">a</div>
                <div className = "basis-1/3">b</div>
                <div className = "basis-1/2">c</div>
            </div>
            <Image
                className="dark:invert"
                src="/globe.svg"
                alt="Globe icon"
                width={50}
                height={60}
            />
            <p>This was made by <b>Sofia</b></p>
            <a
                    className="rounded-lg border border-double border-transparent transition-colors flex items-center justify-center bg-background text-foreground gap-2 hover:bg-[#77097a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    href="https://www.wikipedia.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert"
                      src="/vercel.svg"
                      alt="Vercel logomark"
                      width={20}
                      height={20}
            />Begin your journey
            </a>
        </div>
    );

}
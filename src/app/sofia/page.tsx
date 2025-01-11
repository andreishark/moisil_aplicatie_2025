import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:"Sofia's page"
}

export default function Home(){
    return(
        <div className="grid grid-rows-9 items-center justify-items-stretch min-h-screen px-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-arial)]">
            <h1 className="bg-purple-700 border-solid border-2 border-purple-500 rounded text-center text-lg italic font-medium">Hello</h1>
            <div className="flex flex-row">
                <div className = "bg-indigo-500 border-dashed hover:border-solid border-4 border-slate-300 rounded-full text-center text-xl font-extrabold basis-1/6">
                    a</div>
                <div className = "bg-violet-700 border-dashed hover:border-solid border-4 border-slate-300 rounded-full text-center text-xl font-bold basis-1/3">
                    b</div>
                <div className = "bg-fuchsia-500 border-dashed hover:border-solid border-4 border-slate-300 rounded-full text-center text-xl font-semibold basis-1/2">
                    c</div>
            </div>
            <Image
                className="dark:invert"
                src="/globe.svg"
                alt="Globe icon"
                width={100}
                height={100}
            />
            <p>This was made by <b>Sofia</b></p>
            <Link
                    className={buttonVariants({variant: "destructive", size: "lg"})}
                    href="https://www.wikipedia.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert"
                      src="/vercel.svg"
                      alt="Vercel logomark"
                      width={30}
                      height={30}
            />Begin your journey
            </Link>
        </div>
    );

}
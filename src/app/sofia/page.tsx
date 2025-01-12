import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";
import { Input } from "@/components/ui/input"


export const metadata: Metadata = {
    title:"Sofia's page"
}

export default function Home(){
    return(
        <div className="grid grid-rows-9 items-center justify-items-center min-h-screen px-20 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-arial)]">
            <h1 className="w-3/5 bg-purple-700 border-solid border-2 border-purple-500 rounded text-center text-lg italic font-medium">Hello</h1>
            
            <Input className="w-1/3" placeholder="Enter your email"/>

            <div className="flex flex-row items-stretch grow h-16 w-4/5 gap-x-0">
                <div className = "pt-3 bg-indigo-500 border-dashed hover:border-solid border-4 border-slate-700 rounded-full text-center text-xl font-extrabold basis-1/3 hover:basis-1/2">
                    Option A</div>
                <div className = "pt-3 bg-violet-700 border-dashed hover:border-solid border-4 border-slate-700 rounded-full text-center text-xl font-extrabold basis-1/3 hover:basis-1/2">
                    Option B</div>
                <div className = "pt-3 bg-fuchsia-600 border-dashed hover:border-solid border-4 border-slate-700 rounded-full text-center text-xl font-extrabold basis-1/3 hover:basis-1/2">
                    Option C</div>
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
                className={buttonVariants({variant: "default", size: "lg"})}
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
                    />
            Begin your journey
            </Link>

        </div>
    );

}
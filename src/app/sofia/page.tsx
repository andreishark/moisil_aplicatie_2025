import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { DropdownMenuRadioGroupDemo } from "./menu";

export const metadata: Metadata = {
    title:"Sofia's page"
}

export default function Home(){
    return(
        <div className="grid grid-rows-9 items-center justify-items-center min-h-screen px-20 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-arial)]">
            <h1 className="w-3/5 bg-purple-700 border-solid border-2 border-purple-500 rounded text-center text-xl italic font-medium">Hello</h1>
            
            <Input className="w-1/3" placeholder="Enter your email"/>

            <div className="flex flex-row items-stretch grow h-16 w-4/5 gap-x-0">
                <div className = "pt-3 bg-indigo-500 border-dashed hover:border-solid border-4 border-slate-700 rounded-full text-center text-xl font-extrabold basis-1/3 hover:basis-1/2">
                    Option A</div>
                <div className = "pt-3 bg-violet-700 border-dashed hover:border-solid border-4 border-slate-700 rounded-full text-center text-xl font-extrabold basis-1/3 hover:basis-1/2">
                    Option B</div>
                <div className = "pt-3 bg-fuchsia-600 border-dashed hover:border-solid border-4 border-slate-700 rounded-full text-center text-xl font-extrabold basis-1/3 hover:basis-1/2">
                    Option C</div>
            </div>
            
            <p>This was made by <b>Sofia</b></p>
            
            <DropdownMenuRadioGroupDemo/>

            <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-44 h-12 place-items-center bg-orange-600 hover:bg-orange-800 border rounded-lg border-full border-2 border-orange-900"
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
            Search wiki
            </Link>
        </div>
    );

}
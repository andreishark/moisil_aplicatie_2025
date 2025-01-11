import Image from "next/image";
import Liking from "./like-Button";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-changer";
import { Metadata } from "next";
import { DropdownMenuDemo } from "./Menu";
export const metadata: Metadata = {
    title: "Dedsec",
    description: "sdasdwdasdw",

}
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-primary">
      <header className="flex flex-col items-center gap-4">
        <ModeToggle/>
        <Image
         className="dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={50}
          priority
        />
        <h1 className="text-2xl font-bold">Welcome!</h1>
                <Button>

                </Button>
      </header>

      <main className="flex flex-col items-center gap-6 mt-10">
        <p className="text-center ">This is my basic webpage.</p>
        <Liking />
      </main>
      <footer className="mt-16 text-sm">
        <p className="text-center">End!</p><br />
        <p className="text-center">More!</p>
        <DropdownMenuDemo />
      </footer>
    </div>
  );
}


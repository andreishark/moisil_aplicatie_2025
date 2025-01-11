import Image from "next/image";
import Liking from "./like-Button";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-changer";
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 text-gray-900">
            <header className="flex flex-col items-center gap-4">
                <ModeToggle/>
                <title>
                    DedSec
                </title>
                <Image
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
                <p className="text-center text-gray-700">
                    This is my basic webpage.
                </p>
                <Liking/>
            </main>
            <footer className="mt-16 text-sm text-gray-500">
                <p className="text-center text-gray-700">
                    End!
                </p>
            </footer>
        </div>
    )
}
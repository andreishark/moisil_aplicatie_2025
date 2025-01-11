import Image from "next/image";
import Liking from "./like-Button";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <header className="flex flex-col items-center gap-4">
        <title>DedSec</title>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={50}
          priority
        />
        <h1 className="text-2xl font-bold">Welcome!</h1>
      </header>

      <main className="flex flex-col items-center gap-6 mt-10">
        <p className="text-center ">This is my basic webpage.</p>
        <Liking />
      </main>
      <footer className="mt-16 text-sm">
        <p className="text-center">End!</p>
      </footer>
    </div>
  );
}


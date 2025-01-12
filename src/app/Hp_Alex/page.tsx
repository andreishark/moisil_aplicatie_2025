import { Metadata } from "next"
import { CarouselStart } from "./Carousel"
import { DropdownMenuLogin } from "./dropdown_menu"


export const metadata: Metadata = {
  title: "About us!",
  description: "This is DedSec!"
}

export default function home()
{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-primary">
      <header className="flex flex-col items-center gap-4">
      </header>
      <main className="flex flex-col items-center gap-6 mt-10">
        <CarouselStart/>
      </main>
      <footer>
        <DropdownMenuLogin/>
      </footer>
    </div>
  )
}
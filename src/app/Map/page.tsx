import TooltipMap from "@/components/big-ui/map-with-tooltip";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuDemo } from "./dropdown";

export default function Page(){
  return(
    <div>
      <header>
        <h1>
          <DropdownMenuDemo/>
        </h1>
      </header>
      <main className="p-20">
        <TooltipMap />
      </main>
    </div>
  )
}
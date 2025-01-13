"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (message: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{message}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Selectează graficul.</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              setMessage("apa");
            }}
          >
            <button>Apă potabilă</button>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setMessage("electric");
            }}
          >
            <button>Consum de energie electrică</button>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setMessage("fosil");
            }}
          >
            <button>Consum de combustibil fosil</button>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setMessage("materii");
            }}
          >
            <button>Materii prime</button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


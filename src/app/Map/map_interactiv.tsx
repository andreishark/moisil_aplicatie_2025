"use client";

import TooltipMap from "@/components/big-ui/map-with-tooltip";
import { DropdownMenuDemo } from "./dropdown";
import { useState } from "react";

export default function MapInteractiv() {
  const [selection, setSelection] = useState("Selectie");

  return (
    <div>
      <h1>
        <DropdownMenuDemo message={selection} setMessage={setSelection} />
      </h1>
      <main className="p-20">
        <TooltipMap selection={selection} />
      </main>
    </div>
  );
}

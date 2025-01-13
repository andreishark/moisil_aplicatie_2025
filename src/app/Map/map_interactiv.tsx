"use client";

import TooltipMap from "@/components/big-ui/map-with-tooltip";
import { DropdownMenuDemo } from "./dropdown";
import { useState } from "react";

export default function MapInteractiv() {
  const [selection, setSelection] = useState("Selectie");

  return (
    <div>
      <div className="flex justify-center align-middle">
        <h1>
          <DropdownMenuDemo message={selection} setMessage={setSelection} />
        </h1>
      </div>
      <main>
        <TooltipMap selection={selection} />
      </main>
    </div>
  );
}

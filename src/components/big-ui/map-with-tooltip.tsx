"use client";

import { useState } from "react";
import MapUI from "../ui/map";
import { Tooltip } from "react-tooltip";
import { Component } from "./chart";

export default function TooltipMap() {
  const [content, setContent] = useState("");

  return (
    <div>
      <MapUI setTooltipContent={setContent} />
      <Tooltip id="map-tooltip">
        <Component content={content}/>
      </Tooltip>
    </div>
  );
}


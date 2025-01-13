"use client";

import { useState } from "react";
import MapUI from "../ui/map";
import { Tooltip } from "react-tooltip";
import { Component } from "./chart";

export default function TooltipMap() {
  const [content, setContent] = useState("");
  const [countryCode, setCountryCode] = useState("");

  return (
    <div>
      <MapUI setTooltipContent={setContent} setCountryCode={setCountryCode} />
      <Tooltip id="map-tooltip">
        <Component content={content} countryCode={countryCode} />
      </Tooltip>
    </div>
  );
}

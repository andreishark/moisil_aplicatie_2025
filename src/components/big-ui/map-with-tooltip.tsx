"use client"

import { useState } from "react"
import MapUI from "../ui/map";
import { Tooltip } from "react-tooltip";

export default function TooltipMap() {
    const [content, setContent] = useState("");

    return (
        <div>
            <MapUI setTooltipContent={setContent} />
            <div className="Test"></div>
            <Tooltip offset={45} className="Tooltip-test">{content}</Tooltip>
        </div>
    )
}
'use client'

import * as React from "react";
import Autoplay from 'embla-carousel-autoplay'



import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Liking from "./Like-button";

export function CarouselStart() {
  // Array of custom strings for the carousel slides
  const customTextArray = ["Bine ati venit pe pagina noastra web! Suntem foarte bucurosi!", "Slide Two", "Slide Three", "Slide Four", <Liking/>];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel className="w-full max-w-lg"       plugins={[plugin.current]}
    onMouseEnter={plugin.current.stop}
    onMouseLeave={() => plugin.current.play()}>
      <CarouselContent>
        {customTextArray.map((text, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* Display custom text */}
                  <span className="text-4xl font-semibold">{text}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
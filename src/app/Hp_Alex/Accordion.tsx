import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionStart() {
    return (
      <Accordion type="single" collapsible className="w-full max-w-lg">
        <AccordionItem className="w-full max-w-lg" value="item-1">
          <AccordionTrigger className="w-full max-w-lg"><span>Is it accessible?</span></AccordionTrigger>
          <AccordionContent className="w-full max-w-lg">
            Yes. It is very well priced and totally worth it!.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="w-full max-w-lg">Is it good?</AccordionTrigger>
          <AccordionContent className="w-full max-w-lg">
            Yes. It is very good.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="w-full max-w-lg">Do you actualy learn?</AccordionTrigger>
          <AccordionContent className="w-full max-w-lg">
            Yes. Our classes are very well taught and you can learn a lot!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
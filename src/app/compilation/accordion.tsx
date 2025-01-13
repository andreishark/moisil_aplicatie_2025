import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import Link from 'next/link'
  
  export function AccordionStart({ title, content, link} : {title: string, content:string, link:string}) {
    return (
      <Accordion type="single" collapsible className="w-full max-w-lg">
        <AccordionItem className="w-full max-w-lg" value="item-1">
          <AccordionTrigger className="w-full max-w-lg"><span>{title}</span></AccordionTrigger>
          <AccordionContent className="w-full max-w-lg">
            {content}
            <br/>
            <br/>
            <Link className="text-blue-600" href={link}>Link to their page!</Link>
          </AccordionContent>
        </AccordionItem>
    </Accordion>
    )
  }
  
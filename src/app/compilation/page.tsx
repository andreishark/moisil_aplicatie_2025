import { Metadata } from "next";
import { AccordionStart} from "./accordion";

export const metadata: Metadata = {
    title: "Ways to help!",
    description: "A compilation of people who can help!",
  };
  
export default function Page()
{
    return(
        <div className="flex flex-col items-left min-h-screen p-8 text-primary">
        <main className="flex flex-col items-left gap-6 mt-10">
            <p>
                Water:
            </p>
            <AccordionStart title="Compamie 1" content="Description" link="https://www.veolia.ro/ro"/>
            <br/>
            <p>
                Energy:
            </p>
            <AccordionStart title="Companie 2" content="Description" link="idk"/>
            
        </main>
    </div>
    )
}
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
            <AccordionStart title="Veolia" content="Veolia este lider mondial în gestionarea resurselor de apă, deșeurilor și energiei. În România, compania oferă soluții integrate pentru optimizarea consumului de apă și reducerea pierderilor. Printre serviciile lor se numără tratarea și reciclarea apei, precum și implementarea de tehnologii moderne pentru monitorizarea consumului și întreținerea infrastructurii. Veolia sprijină orașele și industriile în a deveni mai sustenabile printr-o abordare circulară a resurselor naturale." link="https://www.veolia.ro/ro"/>
            <AccordionStart title="L'Oréal Professionnel" content="L'Oréal Professionnel a introdus dispozitivul Water Saver, dezvoltat în parteneriat cu startup-ul Gjosa. Acest cap de duș utilizează tehnologia de fragmentare a apei, reducând consumul în saloanele de coafură cu până la 69%. Water Saver creează picături de apă de 10 ori mai mici decât cele standard, asigurând o clătire eficientă cu un consum redus de apă." link="https://www.lorealprofessionnel.ro/water-saver"/>
            <AccordionStart title="Xylem Inc." content="Xylem Inc. este o companie americană specializată în tehnologiile de apă, având sediul central în Rye Brook, New York. Compania dezvoltă și furnizează soluții inovatoare pentru transportul, tratarea, testarea și utilizarea eficientă a apei în diverse industrii și comunități. Prin produsele și serviciile sale, Xylem contribuie la reducerea risipei de apă, optimizarea consumului și asigurarea sustenabilității resurselor de apă la nivel global." link="https://www.xylem.com/en-us/"/>
            <br/>
            <p>
                Energy:
            </p>
            <AccordionStart title="Companie 2" content="Description" link="idk"/>
            
        </main>
    </div>
    )
}
import { Metadata } from "next";
import { AccordionStart} from "./accordion";

export const metadata: Metadata = {
    title: "Companii",
    description: "Persoane care ajută!",
  };
  
export default function Page()
{
    return(
        <div className="flex flex-col items-stretch min-h-screen p-4 text-primary">
        <main className="flex flex-col items-center gap-6 mt-2">
            <p className="text-xl font-semibold">
                Apă:
            </p>
            <AccordionStart title="Veolia" content="Veolia este lider mondial în gestionarea resurselor de apă, deșeurilor și energiei. În România, compania oferă soluții integrate pentru optimizarea consumului de apă și reducerea pierderilor. Printre serviciile lor se numără tratarea și reciclarea apei, precum și implementarea de tehnologii moderne pentru monitorizarea consumului și întreținerea infrastructurii. Veolia sprijină orașele și industriile în a deveni mai sustenabile printr-o abordare circulară a resurselor naturale." link="https://www.veolia.ro/ro"/>
            <AccordionStart title="L'Oréal Professionnel" content="L'Oréal Professionnel a introdus dispozitivul Water Saver, dezvoltat în parteneriat cu startup-ul Gjosa. Acest cap de duș utilizează tehnologia de fragmentare a apei, reducând consumul în saloanele de coafură cu până la 69%. Water Saver creează picături de apă de 10 ori mai mici decât cele standard, asigurând o clătire eficientă cu un consum redus de apă." link="https://www.lorealprofessionnel.ro/water-saver"/>
            <AccordionStart title="Xylem Inc." content="Xylem Inc. este o companie americană specializată în tehnologiile de apă, având sediul central în Rye Brook, New York. Compania dezvoltă și furnizează soluții inovatoare pentru transportul, tratarea, testarea și utilizarea eficientă a apei în diverse industrii și comunități. Prin produsele și serviciile sale, Xylem contribuie la reducerea risipei de apă, optimizarea consumului și asigurarea sustenabilității resurselor de apă la nivel global." link="https://www.xylem.com/en-us/"/>
            <br/>
            <p className="text-xl font-semibold">
                Energie:
            </p>
            <AccordionStart title="Enel X" content="Enel X este o divizie a grupului Enel, specializată în soluții inovatoare pentru eficiența energetică și managementul energiei. Compania oferă sisteme inteligente de iluminat, platforme digitale pentru monitorizarea consumului energetic și soluții de management al energiei pentru companii. Prin implementarea acestor tehnologii, Enel X ajută organizațiile să reducă pierderile de energie, să optimizeze consumul și să îmbunătățească sustenabilitatea operațiunilor lor." link="https://www.enelx.com/"/>
            <AccordionStart title="Siemens AG" content="Siemens AG este o companie globală de tehnologie cu sediul în Germania, specializată în diverse domenii, inclusiv energie, automatizări și digitalizare. Compania oferă soluții avansate pentru eficiența energetică, cum ar fi sisteme inteligente de management al energiei, automatizări industriale și tehnologii pentru rețele electrice inteligente (smart grids). Aceste soluții ajută la optimizarea consumului de energie și la reducerea pierderilor în diverse sectoare industriale și infrastructuri urbane." link="https://www.siemens.com/global/en.html"/>
            <AccordionStart title="Schneider Electric" content="Schneider Electric este o companie multinațională cu sediul în Franța, specializată în managementul energiei și automatizări. Compania dezvoltă soluții pentru eficiența energetică, inclusiv sisteme de monitorizare și control al consumului de energie, soluții pentru clădiri inteligente și tehnologii pentru optimizarea proceselor industriale. Prin aceste inovații, Schneider Electric contribuie la reducerea pierderilor de energie și la promovarea sustenabilității." link="https://www.se.com/ww/en/"/>
            <br/>
            <p className="text-xl font-semibold">
                Combustibil fosil:
            </p>
            <AccordionStart title="ExxonMobil" content="ExxonMobil este una dintre cele mai mari companii petroliere și de gaze naturale din lume, care implementează tehnologii avansate pentru reducerea pierderilor de energie în procesul de extracție și rafinare a combustibililor fosili. Compania investește în soluții pentru captarea și stocarea carbonului (CCS) și în tehnologii pentru îmbunătățirea eficienței proceselor energetice, cu scopul de a minimiza impactul negativ asupra mediului." link="https://www.exxonmobilchemical.com/en"/>
            <AccordionStart title="Royal Dutch Shell" content="Royal Dutch Shell este o companie globală care activează în domeniul combustibililor fosili și energiei regenerabile. Shell se concentrează pe reducerea pierderilor în procesul de extracție și rafinare a petrolului și gazelor naturale, implementând tehnologii moderne pentru monitorizarea și controlul fluxului de combustibili. De asemenea, compania investește în soluții pentru reducerea emisiilor de carbon și în optimizarea eficienței operațiunilor de extracție a combustibililor fosili. Shell se implică activ în promovarea unui model de afaceri mai sustenabil în sectorul combustibililor fosili." link="https://www.shell.com/"/>
            <AccordionStart title="BP (Brittish Petroleum)" content="BP este una dintre cele mai mari companii de petrol și gaze naturale din lume. Compania se axează pe extracția și rafinarea combustibililor fosili și investește în soluții pentru prevenirea pierderilor în aceste procese. BP utilizează tehnologii avansate pentru a preveni scurgerile de combustibil și pentru a asigura o mai bună eficiență în exploatarea resurselor. De asemenea, BP promovează inițiative pentru reducerea emisiilor de carbon și pentru implementarea unui management mai sustenabil al resurselor naturale." link="https://www.bp.com/"/>
            <br/>
            <p className="text-xl font-semibold">
                Materii prime:
            </p>
            <AccordionStart title="Rio Tinto" content="Rio Tinto este o companie globală minieră care extrage și furnizează materii prime esențiale, cum ar fi minereuri de fier, cupru, aluminiu și diamante. Compania pune un accent deosebit pe reducerea pierderilor în procesul de extracție a materiilor prime și pe utilizarea tehnologiilor inovative pentru a spori eficiența operațiunilor sale. De asemenea, Rio Tinto se angajează să minimizeze impactul asupra mediului prin implementarea de soluții pentru reciclarea și reutilizarea materialelor și pentru reducerea consumului de apă și energie în minele sale." link="https://www.riotinto.com/"/>
            <AccordionStart title="ArcelorMittal" content="ArcelorMittal este cel mai mare producător de oțel din lume și extrage materii prime esențiale pentru producția de oțel, cum ar fi minereurile de fier și cărbunele. Compania investește constant în tehnologii pentru a îmbunătăți eficiența proceselor de extracție și pentru a reduce pierderile de materiale în timpul producției. ArcelorMittal promovează utilizarea sustenabilă a resurselor și aplică soluții de reciclare a oțelului pentru a reduce dependența de extracția de materii prime naturale." link="https://corporate.arcelormittal.com/"/>
            <AccordionStart title="BASF" content="BASF este una dintre cele mai mari companii chimice din lume și un important furnizor de materii prime pentru industria chimică, incluzând produse petroliere, metale și minerale. Compania investește în soluții care permit utilizarea mai eficientă a materiilor prime și reducerea risipei în producția chimică. BASF se concentrează pe dezvoltarea de tehnologii care îmbunătățesc procesele de producție, reduc consumul de energie și minimizează impactul asupra mediului, iar o parte importantă a activității sale include reciclarea materiilor prime și promovarea unui model circular în industrie." link="https://www.basf.com/ro/ro"/>
            <br/>
        </main>
    </div>
    )
}
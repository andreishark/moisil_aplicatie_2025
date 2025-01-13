import { Metadata } from "next";
import MapInteractiv from "./map_interactiv";

export const metadata: Metadata = {
  title: "Pagina principală",
  description: "Aici este pagina noastra principală!",
};

export default function Page() {
  return (
    <div>
      <MapInteractiv />
    </div>
  );
}

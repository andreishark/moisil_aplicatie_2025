import { nanoid } from "nanoid";

type navPath = { id: string; title: string; path: string };

type otherNavPath = { id: string; title: string; route: string };

const navBarConfig: (
  | navPath
  | { id: string; title: string; paths: otherNavPath[] }
)[] = [
  {
    id: nanoid(),
    title: "Hartă",
    path: "/Alex"
  },
  {
    id: nanoid(),
    title: "Home",
    path: "/",
  },

  {
    id: nanoid(),
    title: "Postari",
    path: "/Forum",
  },

  {
    id: nanoid(),
    title: "Agenții de ajutor",
    path: "/compilation",
  },
  /*recrutare: {
    id: nanoid(),
    title: "Recrutare",
    path: "/recrutare",
  }*/
];

export { navBarConfig };

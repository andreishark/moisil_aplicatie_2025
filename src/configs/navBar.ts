import { nanoid } from "nanoid";

type navPath = { id: string; title: string; path: string };

type otherNavPath = { id: string; title: string; route: string };

const navBarConfig: (
  | navPath
  | { id: string; title: string; paths: otherNavPath[] }
)[] = [
  /*ofertaEducationala: {
    id: nanoid(),
    title: "Oferta Educationala",
    paths: [
      {
        id: nanoid(),
        title: "Curs Robotica",
        route: "/cursuri/curs_robotica",
      },
      {
        id: nanoid(),
        title: "Curs CNC",
        route: "/cursuri/curs_cnc",
      },
      {
        id: nanoid(),
        title: "Curs Electronica",
        route: "/cursuri/curs_electronica",
      },
    ],
  },*/

  {
    id: nanoid(),
    title: "Home",
    path: "/",
  },

  {
    id: nanoid(),
    title: "Postari",
    path: "/posts",
  },

  {
    id: nanoid(),
    title: "Despre Noi",
    path: "/about_us",
  },
  /*recrutare: {
    id: nanoid(),
    title: "Recrutare",
    path: "/recrutare",
  }*/
];

export { navBarConfig };

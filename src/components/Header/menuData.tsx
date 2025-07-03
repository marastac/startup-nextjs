import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Servicios",
    path: "/servicios", // Asegúrate de crear esta página
    newTab: false,
  },
  {
    id: 3,
    title: "Nosotros",
    path: "/nosotros", // Asegúrate de crear esta página
    newTab: false,
  },
  {
    id: 4,
    title: "Contacto",
    path: "/contacto", // Asegúrate de crear esta página
    newTab: false,
  },
  // Se eliminan los submenús y otros enlaces no deseados
];
export default menuData;
// src/app/page.tsx
// Eliminada la metadata de esta página, ya definida en layout.tsx

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact"; // Mantener para la sección de Contacto
import Features from "@/components/Features"; // Para la sección de Servicios
import Hero from "@/components/Hero"; // Para la sección principal
import ClientLogos from "@/components/ClientLogos"; // ¡Nueva importación para los logos de clientes!

// Eliminadas importaciones de componentes no utilizados:
// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />         {/* Sección principal de inicio */}
      <ClientLogos />  {/* ¡Nueva sección: Logos de clientes! */}
      <Features />     {/* Sección de Servicios */}
      {/* Añadiremos la sección "Nosotros" en un archivo separado y la importaremos aquí,
          o la adaptaremos de un componente existente si lo encontramos. */}
      <Contact />      {/* Sección de Contacto */}
      {/* Eliminadas otras secciones:
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      */}
    </>
  );
}
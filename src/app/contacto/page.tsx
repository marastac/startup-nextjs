// src/app/contact/page.tsx
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Vértice Agency",
  description: "Contáctanos para impulsar tu negocio digital con IA y automatizaciones estratégicas en Perú y España.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contáctanos"
        description="Estamos listos para ayudarte a escalar tu negocio digital. Envíanos un mensaje o agenda una mini-auditoría."
      />

      {/* El componente Contact se encargará del formulario y los enlaces */}
      <Contact />
    </>
  );
};

export default ContactPage;
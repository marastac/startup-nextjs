// src/app/servicios/page.tsx

import Features from "@/components/Features"; // Importa el componente de servicios
import SectionTitle from "@/components/Common/SectionTitle"; // Importa el título de sección
import ScrollUp from "@/components/Common/ScrollUp"; // Para el botón de "volver arriba"

export default function ServiciosPage() {
  return (
    <>
      <ScrollUp /> {/* Mantener el botón de scroll hacia arriba */}

      <section id="servicios" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Nuestros Servicios de Marketing e IA"
            paragraph="Descubre cómo Vértice Agency impulsa tu negocio digital con estrategias de marketing avanzadas y el poder de la inteligencia artificial."
            center
          />
        </div>
      </section>

      {/* Aquí renderizamos el componente de Features (que ya tiene tus 4 servicios) */}
      <Features />

      {/* Si quieres añadir más contenido específico para la página de servicios aquí, lo puedes hacer */}
    </>
  );
}
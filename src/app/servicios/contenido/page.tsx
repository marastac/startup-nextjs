// src/app/servicios/contenido/page.tsx

import SectionTitle from "@/components/Common/SectionTitle";
import ScrollUp from "@/components/Common/ScrollUp";
import Image from "next/image"; // Para imágenes específicas de esta página
import Link from "next/link"; // ¡Añadida esta línea para importar el componente Link!

export default function ContenidoEstrategicoPage() {
  return (
    <>
      <ScrollUp />

      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Contenido Estratégico con IA: Impulsa tu Marketing y SEO Digital"
            paragraph="En Vértice Agency, transformamos tu estrategia de contenido para escalar tu presencia online. Con inteligencia artificial avanzada, creamos materiales de marketing que no solo cautivan a tu audiencia objetivo en Perú y España, sino que también generan conversiones reales y posicionan tu negocio en la cima."
            center
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Bloque de Texto - Descripción Detallada */}
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Cómo el Contenido Inteligente Impulsado por IA Transforma tu Negocio
                </h3>
                <p className="text-lg text-gray-400 mb-6">
                  En Vértice Agency, sabemos que el **marketing de contenidos** es esencial, pero la creación constante puede ser un desafío para emprendedores y creadores de contenido. Nuestra **estrategia de contenido impulsada por IA** no solo duplica tu producción, sino que cada pieza está diseñada para conectar con tu audiencia y mejorar tu **posicionamiento SEO en buscadores**.
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  Nuestras **herramientas de IA para marketing digital** te asisten en la generación de ideas de temas de alto valor, redacción de borradores optimizados para blogs, creación de publicaciones impactantes para redes sociales, guiones de video persuasivos y secuencias de correos electrónicos efectivos en tiempo récord. Así, tú puedes dedicarte a la estrategia principal, a fortalecer tu comunidad y a las ventas de tu infoproducto o servicio.
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  <li>Investigación y **generación de ideas de contenido** y **palabras clave SEO** de alto impacto.</li>
                  <li>Creación de **borradores de contenido optimizados para SEO y conversión**.</li>
                  <li>Desarrollo de múltiples **variantes de copy para tus anuncios y textos** (A/B testing).</li>
                  <li>**Optimización continua del contenido** para maximizar el engagement, la interacción y las conversiones.</li>
                  <li>**Soporte en la producción de contenido visual** con IA (imágenes y videos básicos).</li>
                  <li>**Automatización de flujos de contenido** para distribución eficiente.</li>
                </ul>
              </div>

              {/* Bloque de Imagen/Ilustración */}
              <div className="relative flex justify-center items-center">
                {/* Aquí puedes añadir una imagen que represente la creación de contenido con IA */}
                <Image
                  src="/images/services/ai-content-creation.svg" // Cambia a la ruta de tu imagen real
                  alt="Creación de Contenido con IA"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Sección de Beneficios / Cómo Funciona (Opcional) */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                Beneficios Clave de Nuestro Servicio de Contenido con IA
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Escala tu Producción</h4>
                  <p className="text-gray-400">Genera más contenido en menos tiempo sin sacrificar la calidad.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Contenido Relevante</h4>
                  <p className="text-gray-400">La IA analiza tendencias para crear contenido que tu audiencia realmente busca.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Mejora tu SEO</h4>
                  <p className="text-gray-400">Textos optimizados con palabras clave para un mejor ranking en buscadores.</p>
                </div>
              </div>
            </div>

            {/* Llamada a la acción específica para este servicio */}
            <div className="text-center mt-20 pt-10 border-t border-gray-700">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                ¿Listo para Escalar tu Contenido y Visibilidad Online?
              </h3>
              <p className="text-lg text-gray-400 mb-8">
                Agenda una consultoría gratuita y descubre cómo la Inteligencia Artificial puede transformar tu estrategia de contenido y el posicionamiento de tu marca.
              </p>
              <Link
                href="/contacto"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Agenda tu Consultoría Gratuita de Contenido con IA
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
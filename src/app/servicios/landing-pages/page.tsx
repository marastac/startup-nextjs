// src/app/servicios/landing-pages/page.tsx

import SectionTitle from "@/components/Common/SectionTitle";
import ScrollUp from "@/components/Common/ScrollUp";
import Image from "next/image"; // Para imágenes específicas de esta página
import Link from "next/link"; // Para el botón CTA

export default function LandingPagesConversionPage() {
  return (
    <>
      <ScrollUp />

      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Landing Pages de Alta Conversión con IA: Tu Clave para Vender Online en Perú y España"
            paragraph="En Vértice Agency, cada visita a tu sitio web se convierte en una oportunidad de negocio. Diseñamos landing pages profesionales que son altamente persuasivas y están optimizadas para la conversión con el poder de la Inteligencia Artificial, maximizando tus resultados en Perú y España."
            center
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Bloque de Imagen/Ilustración */}
              <div className="relative flex justify-center items-center md:order-2"> {/* order-2 para que la imagen esté a la derecha en desktop */}
                {/* Aquí puedes añadir una imagen que represente una landing page, un embudo, o conversión */}
                <Image
                  src="/images/services/landing-pages-ai.svg" // Cambia a la ruta de tu imagen real
                  alt="Landing Pages con IA"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>

              {/* Bloque de Texto - Descripción Detallada */}
              <div className="md:order-1"> {/* order-1 para que el texto esté a la izquierda en desktop */}
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Landing Pages: Diseño Estratégico e Inteligente para Maximizar tus Conversiones
                </h3>
                <p className="text-lg text-gray-400 mb-6">
                  Tu **landing page** es, sin duda, tu vendedor digital más importante y la piedra angular de cualquier **estrategia de marketing digital exitosa**. En Vértice Agency, nos especializamos en el **diseño de landing pages que no solo cautivan visualmente**, sino que están meticulosamente optimizadas para **convertir visitantes en leads cualificados o ventas directas**. Combinamos la agilidad del desarrollo **semi-code** con el poder de la **Inteligencia Artificial** para potenciar la persuasión de tus textos y la eficacia de cada elemento.
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  La **Inteligencia Artificial** es nuestra aliada estratégica para construir **páginas de aterrizaje de alto rendimiento**. Nos permite analizar patrones de comportamiento de usuario avanzados, optimizar la ubicación estratégica de **llamadas a la acción (CTAs)** y formularios, y generar múltiples variaciones de **titulares y descripciones altamente persuasivas** que resuenan profundamente con tu nicho de mercado. Cada componente de tu landing page es diseñado y optimizado para guiar al visitante de forma fluida hacia la acción deseada, aumentando tu **tasa de conversión**.
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  <li><strong>Estructura y diseño SEO-friendly:</strong> Optimizados para la velocidad, usabilidad y visibilidad en buscadores.</li>
                  <li><strong>Copys persuasivos generados con IA:</strong> Mensajes de alto impacto que conectan y convierten.</li>
                  <li><strong>Optimización de la experiencia de usuario (UX/UI):</strong> Diseños intuitivos que guían al visitante.</li>
                  <li><strong>Llamadas a la acción (CTAs) estratégicas:</strong> Para maximizar leads y ventas.</li>
                  <li><strong>Integración fluida con tus herramientas de marketing y CRM:</strong> Para una gestión de leads eficiente.</li>
                  <li><strong>Testing A/B con IA:</strong> Para identificar las versiones más efectivas de tu página.</li>
                </ul>
              </div>
            </div>

            {/* Sección de Beneficios / Cómo Funciona (Opcional) */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                Beneficios de Nuestras Landing Pages de Conversión
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Convierten Mejor</h4>
                  <p className="text-gray-400">Transforma más visitas en clientes potenciales o ventas.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Mensaje Preciso</h4>
                  <p className="text-gray-400">Comunica tu oferta de forma clara y persuasiva, adaptada a tu nicho.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Rápida Implementación</h4>
                  <p className="text-gray-400">Diseños profesionales y funcionales entregados en menor tiempo.</p>
                </div>
              </div>
            </div>

            {/* Llamada a la acción específica para este servicio */}
            <div className="text-center mt-20 pt-10 border-t border-gray-700">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                ¿Listo para Impulsar tus Ventas con una Landing Page de Alta Conversión?
              </h3>
              <p className="text-lg text-gray-400 mb-8">
                Agenda una sesión gratuita con nosotros. Analizaremos tus objetivos y diseñaremos la estrategia de landing page con IA que tu negocio en Perú o España necesita para convertir más.
              </p>
              <Link
                href="/contacto"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Agenda tu Consultoría Gratuita de Landing Pages con IA
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
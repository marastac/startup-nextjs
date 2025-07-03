// src/app/servicios/publicidad/page.tsx

import SectionTitle from "@/components/Common/SectionTitle";
import ScrollUp from "@/components/Common/ScrollUp";
import Image from "next/image";
import Link from "next/link";

export default function PublicidadPage() {
  return (
    <>
      <ScrollUp />

      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Anuncios que Convierten, Impulsados por IA: Campañas de Publicidad Digital"
            paragraph="En Vértice Agency, creamos y optimizamos campañas de publicidad digital que no solo llegan a tu audiencia ideal, sino que maximizan tu retorno de inversión. Con nuestra metodología impulsada por IA, tus anuncios en Facebook, Instagram y Google se convertirán en verdaderas máquinas de crecimiento."
            center
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Bloque de Texto - Descripción Detallada */}
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Dominando la Publicidad Online con Inteligencia Artificial
                </h3>
                <p className="text-lg text-gray-400 mb-6">
                  La publicidad digital efectiva requiere más que solo buenas intenciones; demanda optimización constante y una comprensión profunda de las audiencias. En Vértice Agency, utilizamos Inteligencia Artificial avanzada para analizar datos de rendimiento, identificar patrones y predecir comportamientos de usuario, lo que nos permite refinar tus campañas publicitarias de manera continua.
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  Nuestra IA va más allá de la segmentación básica. Te ayudamos a crear copys y creativos que resuenan, optimizar pujas en tiempo real y reasignar presupuestos inteligentemente, asegurando que cada euro o sol invertido trabaje al máximo para atraer a tus clientes ideales.
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  <li><strong>Segmentación de Audiencias con IA:</strong> Identificamos y refinamos tus públicos más rentables.</li>
                  <li><strong>Optimización de Creativos y Copys:</strong> Generamos y testeamos variantes que captan la atención y persuaden.</li>
                  <li><strong>Gestión de Pujas Inteligente:</strong> La IA ajusta tus ofertas para conseguir los mejores resultados al menor coste.</li>
                  <li><strong>Análisis de Rendimiento y Reportes:</strong> Monitoreo constante para optimizar y ajustar estrategias en tiempo real.</li>
                  <li><strong>Publicidad en Redes Sociales (Facebook, Instagram):</strong> Campañas dirigidas a tu comunidad y nuevos prospectos.</li>
                  <li><strong>Publicidad en Google Ads:</strong> Visibilidad en los momentos clave de la decisión de compra.</li>
                </ul>
              </div>

              {/* Bloque de Imagen/Ilustración */}
              <div className="relative flex justify-center items-center">
                {/* Aquí puedes añadir una imagen que represente la publicidad con IA */}
                <Image
                  src="/images/services/ai-advertising.svg" // Cambia a la ruta de tu imagen real
                  alt="Publicidad con IA"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Sección de Beneficios / Cómo Funciona (Opcional) */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                ¿Por Qué Elegir la Publicidad con IA de Vértice Agency?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Mayor ROI</h4>
                  <p className="text-gray-400">Invierte de forma más inteligente y obtén el máximo retorno.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Audiencias Precisas</h4>
                  <p className="text-gray-400">Llega solo a quienes realmente están interesados en tu oferta.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Escala tus Ventas</h4>
                  <p className="text-gray-400">Convierte más clics en clientes y acelera tu crecimiento.</p>
                </div>
              </div>
            </div>

            {/* Llamada a la acción específica para este servicio */}
            <div className="text-center mt-20 pt-10 border-t border-gray-700">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                ¿Listo para que tus Anuncios Conviertan como Nunca?
              </h3>
              <p className="text-lg text-gray-400 mb-8">
                Agenda una consultoría estratégica y descubre cómo la IA puede optimizar tu inversión en publicidad digital.
              </p>
              <Link
                href="/contacto"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Agenda tu Consultoría de Publicidad con IA
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
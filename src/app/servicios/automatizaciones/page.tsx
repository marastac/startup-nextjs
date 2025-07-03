// src/app/servicios/automatizaciones/page.tsx

import SectionTitle from "@/components/Common/SectionTitle";
import ScrollUp from "@/components/Common/ScrollUp";
import Image from "next/image"; // Para imágenes específicas de esta página
import Link from "next/link"; // Para el botón CTA

export default function AutomatizacionesEsencialesPage() {
  return (
    <>
      <ScrollUp />

      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Automatizaciones con IA: Escala y Optimiza tu Negocio Digital en Perú y España"
            paragraph="En Vértice Agency, optimizamos tus procesos de marketing y ventas, y personalizamos la experiencia de tus clientes con flujos de trabajo inteligentes. Todo potenciado por la Inteligencia Artificial y herramientas líderes como N8N y Make.com."
            center
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Bloque de Texto - Descripción Detallada */}
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Potencia la Eficiencia y Personalización de tu Emprendimiento con Automatización IA
                </h3>
                <p className="text-lg text-gray-400 mb-6">
                  En el dinámico ecosistema digital actual para emprendedores y creadores de contenido, la automatización ya no es un lujo, es una **ventaja competitiva esencial**. En Vértice Agency, te ayudamos a construir **flujos de trabajo inteligentes y automatizados** que te permiten escalar tu negocio sin añadir complejidad. Utilizamos potentes plataformas no-code/low-code como **N8N y Make.com**, integrándolas estratégicamente con **Inteligencia Artificial** para llevar la eficiencia y la personalización de tu marca a un nivel superior.
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  Desde la **automatización de la captura de leads** y el **seguimiento de clientes personalizado por email**, hasta la **gestión inteligente de citas** y la sincronización de datos entre tus herramientas de marketing digital favoritas (CRM, email marketing, redes sociales), nuestras automatizaciones liberan tu tiempo. Esto te permite enfocarte en el crecimiento estratégico de tu negocio online y en ofrecer un valor excepcional a tus clientes. La **IA generativa** y contextual, por su parte, potencia estos flujos con decisiones inteligentes y respuestas adaptadas, transformando la interacción con tu audiencia.
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  <li><strong>Automatización de captura de leads y CRM:</strong> Para nutrir tu embudo de ventas.</li>
                  <li><strong>Secuencias de email y mensajes personalizadas con IA:</strong> Para una comunicación relevante y automática.</li>
                  <li><strong>Sincronización de datos entre plataformas:</strong> Centraliza tu información para una visión 360°.</li>
                  <li><strong>Flujos de trabajo personalizados para ventas y atención al cliente:</strong> Mejora la eficiencia y la experiencia del usuario.</li>
                  <li><strong>Gestión de redes sociales automatizada:</strong> Programación y monitoreo inteligente.</li>
                  <li><strong>Automatización de onboarding de clientes:</strong> Para una experiencia de bienvenida fluida y profesional.</li>
                </ul>
              </div>

              {/* Bloque de Imagen/Ilustración */}
              <div className="relative flex justify-center items-center">
                {/* Aquí puedes añadir una imagen que represente flujos, conexiones, o engranajes */}
                <Image
                  src="/images/services/automations.svg" // Cambia a la ruta de tu imagen real
                  alt="Automatizaciones con IA"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Sección de Beneficios / Cómo Funciona (Opcional) */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                Beneficios de Nuestras Automatizaciones con IA
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Eficiencia Operativa</h4>
                  <p className="text-gray-400">Reduce tareas manuales y libera tiempo para actividades estratégicas.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Personalización a Escala</h4>
                  <p className="text-gray-400">Ofrece experiencias únicas a cada cliente sin esfuerzo adicional.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-3">Cero Errores Manuales</h4>
                  <p className="text-gray-400">Reduce fallos y asegura la coherencia en todos tus procesos.</p>
                </div>
              </div>
            </div>

            {/* Llamada a la acción específica para este servicio */}
            <div className="text-center mt-20 pt-10 border-t border-gray-700">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                ¿Listo para Escalar y Automatizar tu Emprendimiento Digital con IA?
              </h3>
              <p className="text-lg text-gray-400 mb-8">
                Contáctanos hoy mismo para diseñar los flujos de automatización inteligentes y personalizados que tu negocio digital en Perú o España necesita para alcanzar su máximo potencial.
              </p>
              <Link
                href="/contacto"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Agenda tu Consultoría de Automatización con IA
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
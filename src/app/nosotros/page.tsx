// src/app/nosotros/page.tsx

import SectionTitle from "@/components/Common/SectionTitle"; // Importa el título de sección
import ScrollUp from "@/components/Common/ScrollUp"; // Para el botón de "volver arriba"
import Image from "next/image"; // Para las imágenes si decides usarlas
import Link from "next/link"; // Para los enlaces de LinkedIn

export default function NosotrosPage() {
  return (
    <>
      <ScrollUp /> {/* Mantener el botón de scroll hacia arriba */}

      <section id="nosotros" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Vértice Agency: Expertos en Marketing Digital e IA para tu Crecimiento"
            paragraph="Conoce la visión y la pasión del equipo que impulsa el crecimiento digital de emprendedores y creadores de contenido. En Vértice Agency, la experiencia estratégica y la Inteligencia Artificial se unen para transformar tus objetivos en resultados medibles."
            center
          />

          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-xl text-gray-400 dark:text-gray-300 mb-8 leading-relaxed">
              En el corazón de <strong>Vértice Agency</strong> estamos <strong>Mario Astonitas</strong> y <strong>Daniela Torres</strong>, sus fundadores y apasionados impulsores de la innovación digital. Combinamos nuestra sólida experiencia en <strong>marketing digital estratégico</strong> y <strong>desarrollo de tecnología con IA</strong> para ofrecer soluciones de vanguardia a <strong>emprendedores y creadores de contenido en Perú y España</strong>. Nuestra misión es ser tu socio estratégico, no solo un proveedor, ayudándote a escalar tu negocio digital de manera eficiente, innovadora y con resultados que realmente importan.
            </p>

            {/* Sección para fotos de perfil */}
            <div className="flex flex-wrap justify-center gap-10 mt-16"> {/* Aumentado el gap y mt */}
              {/* Perfil de Mario Astonitas */}
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 shadow-lg dark:bg-dark-2 transition-all duration-300 hover:scale-105">
                {/* Puedes añadir una imagen aquí. Colócala en `public/images/team/mario.jpg` y ajusta la ruta. */}
                {/* <Image
                  src="/images/team/mario.jpg" // Cambia esto por la ruta de tu imagen
                  alt="Mario Astonitas"
                  width={150}
                  height={150}
                  className="rounded-full shadow-md mb-4 object-cover"
                /> */}
                <h3 className="text-2xl font-bold text-white mb-2">Mario Astonitas</h3>
                <p className="text-gray-400 mb-3">Cofundador & CEO</p>
                <p className="text-gray-400 text-sm">Desarrollador de Software y Especialista en IA</p>
                {/* Descomentar y reemplazar con tu URL real de LinkedIn */}
                {/* <a href="[URL_MARIO_LINKEDIN]" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-3">LinkedIn</a> */}
              </div>

              {/* Perfil de Daniela Torres */}
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 shadow-lg dark:bg-dark-2 transition-all duration-300 hover:scale-105">
                {/* Puedes añadir una imagen aquí. Colócala en `public/images/team/daniela.jpg` y ajusta la ruta. */}
                {/* <Image
                  src="/images/team/daniela.jpg" // Cambia esto por la ruta de la imagen de tu novia
                  alt="Daniela Torres"
                  width={150}
                  height={150}
                  className="rounded-full shadow-md mb-4 object-cover"
                /> */}
                <h3 className="text-2xl font-bold text-white mb-2">Daniela Torres</h3>
                <p className="text-gray-400 mb-3">Co-fundadora & CMO</p> {/* Cambiado a CMO si aplica */}
                <p className="text-gray-400 text-sm">Experta en Estrategia Digital y Marketing de Contenidos</p> {/* Más específico */}
                {/* Descomentar y reemplazar con la URL real de LinkedIn de Daniela */}
                {/* <a href="[URL_DANIELA_LINKEDIN]" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-3">LinkedIn</a> */}
              </div>
            </div>

            {/* Nueva Sección: Nuestra Visión y Valores */}
            <div className="mt-20 pt-10 border-t border-gray-700 text-center">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
                Nuestra Visión y Valores en el Marketing Digital con IA
              </h3>
              <p className="text-lg text-gray-400 dark:text-gray-300 mb-6 leading-relaxed">
                Visualizamos un futuro donde cada emprendedor y creador de contenido, sin importar su tamaño, pueda acceder a las herramientas y estrategias de marketing más avanzadas, potenciadas por la Inteligencia Artificial. Nuestra misión es democratizar el acceso a estas soluciones, permitiendo que las ideas brillantes alcancen la visibilidad y el éxito que merecen.
              </p>
              <p className="text-lg text-gray-400 dark:text-gray-300 mb-8 leading-relaxed">
                Nos guiamos por valores de <strong>innovación constante</strong>, <strong>transparencia total</strong> en cada proceso, <strong>resultados medibles</strong> que superen las expectativas, y una <strong>colaboración genuina</strong> con cada uno de nuestros clientes. Creemos en construir relaciones a largo plazo basadas en la confianza y el crecimiento mutuo.
              </p>
            </div>

            {/* Llamada a la acción final para conectar */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                ¿Listo para Conocer al Equipo Detrás de tu Éxito?
              </h3>
              <p className="text-lg text-gray-400 dark:text-gray-300 mb-8">
                Agenda una consultoría gratuita con Mario y Daniela para empezar a transformar tu negocio digital.
              </p>
              <Link
                href="/contacto"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Agenda una Reunión con Nosotros
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
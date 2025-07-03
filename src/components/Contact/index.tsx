// src/components/Contact/index.tsx
"use client"; // Añadida esta directiva

import NewsLatterBox from "./NewsLatterBox"; // Mantener si usas la caja de newsletter
import Link from "next/link"; // Importar Link para el botón del formulario si lo usaremos como tal

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              {/* Título del Formulario */}
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Agenda tu Consultoría Gratuita con IA para tu Negocio
              </h2>
              {/* Párrafo del Formulario */}
              <p className="mb-12 text-base font-medium text-body-color dark:text-gray-300">
                Completa este breve formulario para solicitar una auditoría gratuita, resolver tus dudas o iniciar tu camino hacia un marketing digital más inteligente y automatizado en Perú o España.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Nombre Completo:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ingresa tu nombre completo"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Email de Contacto:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ejemplo@tuempresa.com"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Número de Teléfono (opcional):
                      </label>
                      <input
                        type="tel" // Cambiado a 'tel' para teléfonos
                        id="phone"
                        name="phone"
                        placeholder="+51 987654321 o +34 612345678" // Ejemplo para Perú y España
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                   <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Asunto o Servicio de Interés:
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Ej: Contenido con IA, Publicidad, etc."
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Cuéntanos sobre tu Proyecto o Necesidad:
                      </label>
                      <textarea
                        name="message"
                        id="message" // Añadido ID
                        rows={5}
                        placeholder="Detalla cómo crees que podemos ayudarte o qué objetivos tienes para tu negocio..."
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit" // Importante para formularios
                      className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center dark:text-gray-400">
                  Nota: Este formulario es solo una maqueta visual. Para que funcione y recibas los mensajes, necesitarás integrarlo con un servicio de backend (como Formspree, Netlify Forms, o una API Route de Next.js).
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* Mantener el componente NewsLatterBox si lo necesitas, o elimínalo si no */}
            <NewsLatterBox /> 

            {/* Información de Contacto Adicional - Email, WhatsApp, LinkedIn */}
            <div className="mb-12 mt-8 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Detalles de Contacto Directo
                </h3>
                <p className="mb-6 text-base font-medium text-body-color dark:text-gray-300">
                    Estamos aquí para ayudarte a escalar tu negocio. No dudes en contactarnos directamente para una respuesta rápida.
                </p>

                {/* Email */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-black dark:text-white">Email Corporativo:</h4>
                    <a href="mailto:contacto@verticeagency.com" className="text-primary hover:underline dark:text-primary">
                        contacto@verticeagency.com
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-black dark:text-white">WhatsApp Directo:</h4>
                    <p className="text-body-color dark:text-gray-300 mb-1">Agenda tu mini-auditoría o consulta rápida:</p>
                    {/* Reemplaza los números de ejemplo con tus números reales */}
                    <a
                        href="https://wa.me/51999888777?text=Hola%20V%C3%A9rtice%20Agency,%20me%20interesan%20sus%20servicios%20de%20IA."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        +51 999 888 777 (Perú)
                    </a>
                    <br /> {/* Salto de línea para el segundo número */}
                    <a
                        href="https://wa.me/34666555444?text=Hola%20V%C3%A9rtice%20Agency,%20me%20interesan%20sus%20servicios%20de%20IA."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        +34 666 555 444 (España)
                    </a>
                    <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">Por favor, usa tus números reales con código de país.</p>
                </div>

                {/* LinkedIn */}
                <div>
                    <h4 className="text-lg font-semibold text-black dark:text-white">Conéctate en LinkedIn:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {/* Aquí se usa <a> en lugar de <Link> para enlaces externos */}
                        <a href="[URL_TU_LINKEDIN]" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Mi LinkedIn
                        </a>
                        <span> / </span>
                        <a href="[URL_SU_LINKEDIN]" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            LinkedIn [Nombre de tu Novia]
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
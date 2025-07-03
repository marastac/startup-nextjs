// src/components/ClientLogos/index.tsx
import Image from "next/image";

const clientLogosData = [
  {
    id: 1,
    name: "La Nuestra", // Reemplaza con tus nombres
    image: "/images/clientes-logos/empresa1.svg", // <-- ¡Cambia estas rutas por las de tus logos!
    width: 120, // Ajusta el ancho según sea necesario
    height: 60, // Ajusta la altura según sea necesario
    link: "#", // Si el logo debe enlazar a algún sitio del cliente
  },
  {
    id: 2,
    name: "Master-G",
    image: "/images/clientes-logos/empresa2.svg", // <-- ¡Asumiendo que este es el logo negro que debe mantenerse claro!
    width: 120,
    height: 60,
    link: "#",
  },
  {
    id: 3,
    name: "Quechuas Expeditions",
    image: "/images/clientes-logos/empresa3.svg", // <-- ¡Cambia estas rutas por las de tus logos!
    width: 120,
    height: 60,
    link: "#",
  },
  {
    id: 4,
    name: "Remax Prime",
    image: "/images/clientes-logos/empresa4.svg", // <-- ¡Cambia estas rutas por las de tus logos!
    width: 120,
    height: 60,
    link: "#",
  },
  // ¡Añade más objetos aquí para cada logo que tengas, siguiendo esta estructura!
  // Asegúrate de usar un 'id' único para cada uno.
];

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
            Empresas que Confían en Nuestros Servicios Digitales
          </h2>
          <p className="text-base text-body-color dark:text-gray-300 mt-4 mx-auto max-w-2xl">
            La prueba de nuestro éxito está en la confianza de quienes ya escalan con nosotros.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10">
          {clientLogosData.map((logo) => (
            <div key={logo.id} className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-[15%] flex justify-center p-2">
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-20 w-full relative group" // Contenedor para el efecto
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={`
                    object-contain transition-all duration-300
                    ${
                      // Estilos por defecto (modo claro): gris, se vuelve color en hover
                      "filter grayscale hover:grayscale-0"
                    }
                    ${
                      // Estilos para modo oscuro:
                      // Por defecto en modo oscuro, los logos se ven blancos/gris claro (invertidos y grises)
                      // Excepto para el logo con id: 2 (Master-G), que en hover en dark mode se mantiene claro.
                      logo.id === 2
                        ? "dark:filter dark:grayscale dark:invert dark:hover:grayscale dark:hover:invert" // Se mantiene blanco/gris claro en hover en modo oscuro
                        : "dark:filter dark:grayscale dark:invert dark:hover:grayscale-0 dark:hover:invert-0" // Vuelve a color en hover en modo oscuro
                    }
                  `}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
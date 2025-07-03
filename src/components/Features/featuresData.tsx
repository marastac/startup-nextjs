// src/components/Features/featuresData.tsx
import { Feature } from "@/types/feature";
import Image from "next/image"; // ¡Asegúrate de que esta línea esté presente!

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // Usando el componente Image de Next.js para cargar el icono SVG desde public/images
      <Image
        src="/images/servicios_iconos/icon-contenido-ia.svg" // <-- ¡VERIFICA QUE ESTA RUTA SEA CORRECTA!
        alt="Icono Contenido IA"
        width={96} // Tamaño del icono para que ocupe bien el contenedor h-32 w-32
        height={96}
        className="w-full h-full object-contain" // Clases cruciales para que el SVG se ajuste
      />
    ),
    title: "Contenido que Vende, Generado con IA: Marketing de Contenidos para Emprendedores",
    paragraph:
      "Duplica tu producción de contenido para tu negocio digital: blogs, posts para redes sociales y emails persuasivos. Nuestra IA acelera la creación de contenido optimizado para tu audiencia y SEO, liberando tu tiempo para que te enfoques en tu crecimiento.",
    path: "/servicios/contenido",
  },
  {
    id: 2,
    icon: (
      <Image
        src="/images/servicios_iconos/icon-publicidad-ia.svg" // <-- ¡VERIFICA QUE ESTA RUTA SEA CORRECTA!
        alt="Icono Publicidad IA"
        width={96}
        height={96}
        className="w-full h-full object-contain"
      />
    ),
    title: "Anuncios que Convierten, Impulsados por IA: Campañas de Publicidad Digital",
    paragraph:
      "Maximizamos el Retorno de Inversión (ROI) de tus campañas de publicidad digital en Facebook, Instagram y Google. La IA optimiza audiencias, creativos y pujas para atraer a tus clientes ideales y aumentar tus ventas.",
    path: "/servicios/publicidad",
  },
  {
    id: 3,
    icon: (
      <Image
        src="/images/servicios_iconos/icon-automatizacion-ia.svg" // <-- ¡VERIFICA QUE ESTA RUTA SEA CORRECTA!
        alt="Icono Automatización IA"
        width={96}
        height={96}
        className="w-full h-full object-contain"
      />
    ),
    title: "Automatiza tu Negocio Digital con IA",
    paragraph:
      "Transforma tus procesos con flujos inteligentes y automatizaciones con IA (N8N/Make.com). Desde la captura y nutrición de leads hasta el seguimiento automatizado, nuestra IA potencia tu eficiencia operativa y la personalización de tu comunicación.",
    path: "/servicios/automatizaciones",
  },
  {
    id: 4,
    icon: (
      <Image
        src="/images/servicios_iconos/icon-landing-page-ia.svg" // <-- ¡VERIFICA QUE ESTA RUTA SEA CORRECTA!
        alt="Icono Landing Page IA"
        width={96}
        height={96}
        className="w-full h-full object-contain"
      />
    ),
    title: "Landing Pages de Alta Conversión con IA: Diseño Web Enfocado en Resultados",
    paragraph:
      "Diseñamos y optimizamos landing pages profesionales con herramientas semi-code y textos persuasivos generados por IA, garantizando que cada visitante se acerque a la conversión y maximice tu tasa de ventas.",
    path: "/servicios/landing-pages",
  },
];
export default featuresData;
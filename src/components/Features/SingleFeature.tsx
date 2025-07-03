// src/components/Features/SingleFeature.tsx
import Link from "next/link";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp group relative overflow-hidden rounded-[20px] bg-white px-8 py-12 shadow-three transition-all duration-300 hover:shadow-two dark:bg-gray-800 dark:shadow-none dark:hover:shadow-sidebarOption" data-wow-delay=".1s">
        {/* Contenedor del Icono: más grande, centrado y redondo */}
        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full">
          {feature.icon}
        </div>
        {/* Título del Servicio: ajustado para modo día/noche */}
        <h3 className="mb-5 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
          {feature.title}
        </h3>
        {/* Párrafo del Servicio: ajustado para modo día/noche */}
        <p className="pr-[10px] text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 text-center">
          {feature.paragraph}
        </p>
        <Link
          href={feature.path}
          className="absolute bottom-0 left-0 right-0 w-full py-4 text-center text-sm font-semibold text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-primary/5"
        >
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
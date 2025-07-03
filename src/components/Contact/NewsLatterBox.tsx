// src/components/Contact/NewsLatterBox.tsx
"use client"; // Asegúrate de que esté marcado como Client Component

import React from 'react'; // Asegúrate de que React esté importado

const NewsLatterBox = () => {
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-xs bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Suscríbete a Nuestro Newsletter
      </h3>
      <p className="mb-11 text-base font-medium text-body-color dark:text-gray-300">
        Recibe tips de marketing digital con IA, noticias y ofertas exclusivas directamente en tu bandeja de entrada.
      </p>
      <form>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Introduce tu nombre"
            className="w-full rounded-xs border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Introduce tu email"
            className="w-full rounded-xs border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <button className="flex w-full items-center justify-center rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
          Suscribirme
        </button>
      </form>

      {/* Shapes de fondo - Adaptados para evitar hidratación mismatch */}
      <span className="absolute left-0 top-0 z-[-1] opacity-30">
        <svg
          width="57"
          height="65"
          viewBox="0 0 57 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
            fill="currentColor" // Cambiado de #4A6CF7 o #fff a currentColor
            className="text-primary/60" // Para aplicar la opacidad y color primario
          />
          <path
            d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z"
            fill="currentColor" // Cambiado a currentColor
            className="text-primary" // Para que tome el color primario
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0.62" /> {/* Cambiado a currentColor */}
              <stop offset="1" stopColor="currentColor" stopOpacity="0" /> {/* Cambiado a currentColor */}
            </linearGradient>
            {/* Otros radialGradient/linearGradient si los hay, asegurarse que usan currentColor */}
          </defs>
        </svg>
      </span>
      {/* Repite el proceso para los otros spans con SVGs */}
      <span className="absolute bottom-0 right-0 z-[-1] opacity-30">
        <svg
          width="39"
          height="32"
          viewBox="0 0 39 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="currentColor" // Cambiado a currentColor
            className="text-primary/60" // Para la opacidad y color primario
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="currentColor" // Cambiado a currentColor
            className="text-primary/60" // Para la opacidad y color primario
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="currentColor" // Cambiado a currentColor
            className="text-primary/60" // Para la opacidad y color primario
          />
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="currentColor" // Cambiado a currentColor
            className="text-primary/60" // Para la opacidad y color primario
          />
          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="currentColor" // Cambiado a currentColor
            className="text-primary" // Para el color primario
          />
          <circle
            cx="220"
            cy="63"
            r="43"
            fill="currentColor" // Cambiado a currentColor
            className="text-white" // Para que el círculo interno sea blanco
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0" /> {/* Cambiado a currentColor */}
              <stop offset="1" stopColor="currentColor" /> {/* Cambiado a currentColor */}
            </linearGradient>
            {/* ... otros gradients si los hay, cambiar también a currentColor */}
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default NewsLatterBox;
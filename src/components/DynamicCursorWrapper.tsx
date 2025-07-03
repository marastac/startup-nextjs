// src/components/DynamicCursorWrapper.tsx
"use client"; // ¡Este componente DEBE ser un Client Component!

import dynamic from 'next/dynamic'; // Importa next/dynamic para la importación dinámica

// Importación dinámica del componente CursorTrail para asegurar que solo se renderice en el cliente
const DynamicCursorTrail = dynamic(() => import('@/components/CursorTrail'), {
  ssr: false, // ¡Ahora ssr: false está permitido porque este es un Client Component!
});

const DynamicCursorWrapper = () => {
  return (
    <DynamicCursorTrail />
  );
};

export default DynamicCursorWrapper;
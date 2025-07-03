// src/app/layout.tsx
// ¡IMPORTANTE! Asegúrate de que esta línea NO ESTÉ DESCOMENTADA: "use client"; // This line is a comment, the actual directive must be in client components.
// import Footer from "@/components/Footer"; // Eliminado
// import Header from "@/components/Header"; // Eliminado
// import ScrollToTop from "@/components/ScrollToTop"; // Eliminado
import { Inter } from "next/font/google";
import "../styles/index.css";
// import DynamicCursorWrapper from "@/components/DynamicCursorWrapper"; // Eliminado

// Importa el nuevo componente envoltorio
import ThemeAndContentWrapper from "@/components/ThemeAndContentWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Vértice Agency | Marketing Estratégico e IA para Emprendedores Digitales',
  description: 'Potenciamos Coaches, Consultores y Creadores de Infoproductos con IA y automatizaciones estratégicas.',
}

// Ya no necesitamos importar Providers aquí, ya que estará dentro de ThemeAndContentWrapper
// import { Providers } from "./providers"; // Comentado/eliminado

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={`bg-gray-50 dark:bg-black ${inter.className}`}>
        {/* Ahora todo el contenido envuelto por ThemeProvider está aquí */}
        <ThemeAndContentWrapper>
          {children}
        </ThemeAndContentWrapper>
      </body>
    </html>
  );
}
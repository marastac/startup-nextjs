// src/components/ThemeAndContentWrapper.tsx
"use client"; // ¡Este componente DEBE ser un Client Component!

import React from 'react';
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import DynamicCursorWrapper from "@/components/DynamicCursorWrapper"; // Tu envoltorio del cursor

const ThemeAndContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
      <DynamicCursorWrapper />
    </ThemeProvider>
  );
};

export default ThemeAndContentWrapper;
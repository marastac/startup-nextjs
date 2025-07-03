// src/components/Features/index.tsx
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData"; // Lo modificaremos a continuación

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Nuestros Servicios Impulsados por IA" // Nuevo título
            paragraph="Potenciamos tu negocio con soluciones de marketing digital estratégicas y automatizadas, diseñadas para emprendedores digitales y creadores de contenido." // Nuevo párrafo
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
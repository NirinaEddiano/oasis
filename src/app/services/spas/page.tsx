// src/app/services/piscine-lagon/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { servicesData } from '@/data/servicesData';
import ServiceHero from '@/components/ServicePage/ServiceHero';
import ServiceContentSection from '@/components/ServicePage/ServiceContentSection';
import ServiceDetailSection from '@/components/ServicePage/ServiceDetailSection';
import ServiceCarousel from '@/components/ServicePage/ServiceCarousel';
import ServiceCTA from '@/components/ServicePage/ServiceCTA';

// Trouver les données spécifiques à ce service
const currentService = servicesData.find(service => service.slug === 'spas');

// Gérer le cas où le service n'est pas trouvé (bien que peu probable avec une génération statique)
if (!currentService) {
  // Optionnel: Rediriger vers une page 404 ou afficher un message d'erreur
  // Pour cet exemple, nous allons lancer une erreur ou utiliser des valeurs par défaut
  throw new Error("Service 'piscine-lagon' not found in servicesData.");
}

// Métadonnées dynamiques pour la page
export const metadata: Metadata = {
  title: currentService.metaTitle,
  description: currentService.metaDescription,
};

const PiscineLagonPage = () => {
  return (
    <>
      <ServiceHero
        title={currentService.title}
        subtitle={currentService.heroSubtitle}
        backgroundImage={currentService.heroImage}
      />
      <ServiceContentSection
        subtitle={currentService.section2Subtitle}
        text={currentService.section2Text}
        image={currentService.section2Image}
        imageOnRight={false} // Image à gauche, texte à droite
      />
      <ServiceDetailSection
        subtitle={currentService.section3Subtitle}
        text={currentService.section3Text}
        image1={currentService.section3Image1}
        image2={currentService.section3Image2}
        imageOnLeft={true} // Images à gauche, texte à droite
      />
      <ServiceCarousel currentServiceSlug={currentService.slug} />
      <ServiceCTA
        ctaText={currentService.ctaText}
        backgroundImage={currentService.heroImage} // Peut être une image différente pour le CTA
        title={currentService.title}
      />
    </>
  );
};

export default PiscineLagonPage;
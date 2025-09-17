// src/data/servicesData.ts
import React from 'react';
import { FaDraftingCompass, FaSyncAlt, FaPalette, FaUserTie, FaWater, FaSwimmingPool, FaHotTub, FaShower } from 'react-icons/fa';

// Définition de l'interface pour un service
export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: React.ReactElement;
  shortDescription: string;
  features: string[]; 
  // Propriétés spécifiques aux pages de service individuelles
  heroImage: string;
  heroSubtitle: string;
  section2Image: string;
  section2Subtitle: string;
  section2Text: string;
  section3Image1: string;
  section3Image2: string;
  section3Subtitle: string;
  section3Text: string;
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: Service[] = [
  {
    id: 'piscine-lagon',
    title: 'Piscine Lagon',
    slug: 'piscine-lagon',
    icon: <FaWater size={24} />,
    shortDescription: "Plongez dans l'exclusivité avec une piscine lagon, un chef-d'œuvre paysager sur mesure.",
    features: [
      "Design organique et intégration naturelle.",
      "Plages de sable fin et entrées progressives.",
      "Matériaux écologiques et durables.",
      "Ambiance tropicale unique.",
    ],
    heroImage: '/images/services/hero-piscine-lagon.jpg', // À remplacer par votre image
    heroSubtitle: "Création d'espaces aquatiques naturels et personnalisés.",
    section2Image: '/images/services/piscine-lagon-details-1.jpg', // À remplacer
    section2Subtitle: "L'art de l'intégration paysagère",
    section2Text: "La piscine lagon est bien plus qu'un simple bassin ; c'est une œuvre d'art vivante, conçue pour s'intégrer harmonieusement à votre environnement. Nous utilisons des rochers naturels, des plages de sable fin et une végétation luxuriante pour recréer une atmosphère tropicale chez vous. Chaque projet est unique, façonné selon vos désirs et les spécificités de votre terrain, garantissant une immersion totale dans la nature. C'est l'ultime évasion, un espace de détente et de convivialité qui valorisera votre propriété et vous offrira des moments inoubliables. Laissez-nous transformer votre jardin en un véritable paradis.",
    section3Image1: '/images/services/piscine-lagon-details-2.jpg', // À remplacer
    section3Image2: '/images/services/piscine-lagon-details-3.jpg', // À remplacer
    section3Subtitle: "Une innovation au service de vos sens",
    section3Text: "Nos piscines lagon sont le fruit d'une expertise technique et d'une passion pour le design. Au-delà de leur esthétique époustouflante, elles sont conçues avec des matériaux durables et des systèmes de filtration performants, assurant une eau cristalline et un entretien facilité. La profondeur progressive, les cascades apaisantes et les coins de relaxation intégrés transforment chaque baignade en une expérience sensorielle unique. Nous vous accompagnons de la conception 3D à la réalisation, en passant par le choix des équipements et des aménagements extérieurs, pour un résultat qui dépasse toutes vos attentes.",
    ctaText: "Prêt à transformer votre espace extérieur en un lagon de rêve ? Demandez votre étude personnalisée dès aujourd'hui et recevez un devis détaillé.",
    metaTitle: "Piscine Lagon sur Mesure | Oasis Évasion : Votre Océan Privé",
    metaDescription: "Conception et construction de piscines lagon uniques au Maroc. Créez un paradis tropical avec des plages de sable et une intégration paysagère exceptionnelle."
  },
  {
    id: 'bassins-classiques',
    title: 'Bassins Classiques',
    slug: 'bassins-classiques',
    icon: <FaSwimmingPool size={24} />,
    shortDescription: "L'élégance intemporelle des piscines classiques, conçues pour durer et embellir votre jardin.",
    features: [
      "Formes élégantes et intemporelles.",
      "Construction robuste et durable.",
      "Personnalisation des revêtements et finitions.",
      "Intégration harmonieuse à votre architecture.",
    ],
    heroImage: '/images/services/hero-bassins-classiques.jpg', // À remplacer
    heroSubtitle: "L'élégance intemporelle de la piscine traditionnelle.",
    section2Image: '/images/services/bassins-classiques-details-1.jpg', // À remplacer
    section2Subtitle: "Design épuré et construction robuste",
    section2Text: "Les bassins classiques incarnent la sophistication et la fonctionnalité. Qu'il s'agisse d'une forme rectangulaire moderne, ovale ou libre, nous veillons à ce que votre piscine s'intègre parfaitement à l'architecture de votre maison et au style de votre jardin. Nous utilisons des techniques de construction éprouvées et des matériaux de haute qualité pour garantir la durabilité et l'étanchéité de votre bassin. Chaque détail est pensé pour créer un espace de nage confortable et esthétiquement plaisant, répondant à vos exigences de performance et de design.",
    section3Image1: '/images/services/bassins-classiques-details-2.jpg', // À remplacer
    section3Image2: '/images/services/bassins-classiques-details-3.jpg', // À remplacer
    section3Subtitle: "Personnalisation et équipements de pointe",
    section3Text: "Au-delà de la forme, nous vous offrons une multitude d'options de personnalisation : revêtements (liner, carrelage, enduit), couleurs, margelles, et systèmes de filtration. Ajoutez des fonctionnalités telles que des cascades, des jets de massage, un système de nage à contre-courant ou un éclairage LED pour transformer votre piscine en un lieu de divertissement et de bien-être. Notre équipe vous conseille pour choisir les équipements les plus adaptés à votre budget et à vos besoins, assurant une expérience de baignade optimale et un entretien simplifié.",
    ctaText: "Envie d'une piscine classique qui allie esthétique et performance ? Contactez-nous pour une étude personnalisée et un devis gratuit.",
    metaTitle: "Construction de Piscines Classiques | Élégance et Durabilité",
    metaDescription: "Concevez et construisez votre piscine classique avec Oasis Évasion. Des designs intemporels, des matériaux de qualité et une intégration parfaite à votre jardin."
  },
  {
    id: 'jacuzzi',
    title: 'Jacuzzi Extérieur',
    slug: 'jacuzzi',
    icon: <FaHotTub size={24} />,
    shortDescription: "Offrez-vous un espace de relaxation ultime avec nos jacuzzis extérieurs sur mesure.",
    features: [
      "Jets hydromassants et bulles apaisantes.",
      "Systèmes de chauffage optimisés.",
      "Éclairage d'ambiance LED.",
      "Intégration paysagère discrète.",
    ],
    heroImage: '/images/services/hero-jacuzzi.jpg', // À remplacer
    heroSubtitle: "Votre bulle de bien-être en plein air.",
    section2Image: '/images/services/jacuzzi-details-1.jpg', // À remplacer
    section2Subtitle: "Détente et thérapie par l'eau",
    section2Text: "Un jacuzzi extérieur est l'investissement parfait pour votre bien-être. Imaginez-vous vous relaxer après une longue journée, enveloppé par les bulles chaudes et les jets massants. Nos jacuzzis sont conçus pour offrir une expérience de relaxation profonde, soulageant les tensions musculaires et favorisant la détente mentale. Nous proposons une gamme variée de modèles, du plus intime au plus convivial, avec des options de sièges ergonomiques, d'éclairage d'ambiance et de systèmes audio intégrés. Laissez-nous vous guider vers le jacuzzi qui transformera vos soirées en moments de pure plénitude.",
    section3Image1: '/images/services/jacuzzi-details-2.jpg', // À remplacer
    section3Image2: '/images/services/jacuzzi-details-3.png', // À remplacer
    section3Subtitle: "Intégration et personnalisation",
    section3Text: "Qu'il soit intégré à votre terrasse, posé sur une plage de piscine ou installé dans un coin discret de votre jardin, votre jacuzzi sera un élément harmonieux de votre extérieur. Nous vous aidons à choisir les matériaux de finition, les couleurs et les boiseries pour qu'il s'accorde parfaitement à votre décor. La performance énergétique est également une priorité, avec des systèmes d'isolation avancés pour réduire les coûts de fonctionnement. Profitez d'un luxe accessible, conçu pour votre confort et adapté à votre style de vie.",
    ctaText: "Envie d'un jacuzzi extérieur pour des moments de détente inoubliables ? Demandez votre devis personnalisé dès maintenant.",
    metaTitle: "Installation de Jacuzzi Extérieur | Oasis Évasion : Détente à Domicile",
    metaDescription: "Créez votre oasis de bien-être avec un jacuzzi extérieur. Relaxation, jets massants et intégration paysagère parfaite par Oasis Évasion."
  },
  {
    id: 'spas',
    title: 'Spas Extérieur',
    slug: 'spas',
    icon: <FaHotTub size={24} />, // Réutilisation de l'icône, ou ajouter une autre si disponible
    shortDescription: "Transformez votre intérieur en un havre de paix avec nos spas haut de gamme.",
    features: [
      "Conception pour l'intimité et le confort.",
      "Isolation phonique et gestion de l'humidité.",
      "Technologies d'hydrothérapie avancées.",
      "Design intégré à votre intérieur.",
    ],
    heroImage: '/images/services/hero-spas.jpg', // À remplacer
    heroSubtitle: "Le luxe et la sérénité à portée de main, chez vous.",
    section2Image: '/images/services/spas-details-1.jpg', // À remplacer
    section2Subtitle: "Confort et intimité garantis",
    section2Text: "Un spa intérieur représente l'apogée du bien-être personnel, accessible à tout moment, quelle que soit la météo. Nous concevons des espaces dédiés où le spa devient le cœur d'une pièce pensée pour la relaxation. Isolation phonique, ventilation adaptée, éclairage tamisé : chaque élément est étudié pour créer une ambiance propice à la détente et à la revitalisation. Choisissez parmi une large sélection de spas, dotés de technologies d'hydrothérapie avancées, de systèmes de chromothérapie et d'options de massage personnalisées pour une expérience sensorielle complète.",
    section3Image1: '/images/services/spas-details-2.jpg', // À remplacer
    section3Image2: '/images/services/spas-details-3.jpg', // À remplacer
    section3Subtitle: "Un design qui s'harmonise à votre intérieur",
    section3Text: "L'intégration esthétique de votre spa est notre priorité. Que vous optiez pour un spa encastré, semi-encastré ou posé, nous nous assurons qu'il s'intègre parfaitement à l'architecture et au style de votre intérieur. Des matériaux nobles aux finitions raffinées, chaque détail contribue à créer une atmosphère de luxe discret. Nos équipes gèrent l'ensemble du projet, de l'étude technique à l'installation, en veillant au respect des normes de sécurité et d'hygiène, pour que vous puissiez profiter de votre havre de paix en toute sérénité.",
    ctaText: "Rêvez-vous d'un spa intérieur pour une relaxation quotidienne ? Contactez Oasis Évasion pour un projet sur mesure.",
    metaTitle: "Installation de Spas Intérieurs | Oasis Évasion : Votre Centre de Bien-Être Privé",
    metaDescription: "Créez votre espace spa privé avec Oasis Évasion. Spas intérieurs haut de gamme pour une relaxation quotidienne, intégrés parfaitement à votre domicile."
  },
  {
    id: 'hammam',
    title: 'Hammam Traditionnel',
    slug: 'hammam',
    icon: <FaShower size={24} />, // Icône pour le hammam
    shortDescription: "Découvrez les bienfaits du hammam traditionnel, une expérience de purification et de détente authentique.",
    features: [
      "Atmosphère de chaleur humide.",
      "Matériaux traditionnels (tadelakt, marbre).",
      "Diffusion d'essences d'eucalyptus.",
      "Purification et relaxation profondes.",
    ],
    heroImage: '/images/services/hero-hammam.jpg', // À remplacer
    heroSubtitle: "Voyage sensoriel au cœur des traditions orientales.",
    section2Image: '/images/services/hammam-details-1.jpg', // À remplacer
    section2Subtitle: "Authenticité et bien-être ancestral",
    section2Text: "Le hammam est bien plus qu'un bain de vapeur ; c'est un rituel de purification et de relaxation profond, ancré dans des siècles de tradition. Nous concevons des hammams qui respectent cette authenticité, en utilisant des matériaux comme le tadelakt, le marbre ou la pierre naturelle, et en intégrant des éléments architecturaux caractéristiques. La chaleur humide, imprégnée d'essences d'eucalyptus, ouvre les pores, nettoie la peau en profondeur et détend les muscles. C'est une invitation à la sérénité, un espace où le temps suspend son vol et où le corps et l'esprit se ressourcent.",
    section3Image1: '/images/services/hammam-details-2.jpeg', // À remplacer
    section3Image2: '/images/services/hammam-details-3.jpg', // À remplacer
    section3Subtitle: "Conception sur mesure et technologies modernes",
    section3Text: "Chaque hammam est une création unique, adaptée à l'espace disponible et à vos préférences esthétiques. Nous combinons le savoir-faire artisanal avec les technologies modernes pour garantir une performance optimale, une sécurité irréprochable et une maintenance facile. Systèmes de génération de vapeur, éclairage d'ambiance, bancs chauffants, douches intégrées : tous les éléments sont pensés pour créer une expérience complète et immersive. Transformez une partie de votre domicile en un sanctuaire de paix, où le bien-être devient un art de vivre.",
    ctaText: "Envie d'un hammam traditionnel chez vous pour une détente inégalée ? Demandez votre étude de projet sur mesure.",
    metaTitle: "Construction de Hammam Traditionnel | Oasis Évasion : Voyage Oriental chez Vous",
    metaDescription: "Créez votre hammam traditionnel avec Oasis Évasion. Authenticité, relaxation profonde et design sur mesure pour une expérience de bien-être unique."
  },
  // Services existants dans Services.tsx, qui auront aussi des pages dédiées
  {
    id: 'conception-construction',
    title: 'Conception & Construction',
    slug: 'conception-construction',
    icon: <FaDraftingCompass size={24} />,
    shortDescription: "De l'idée à la première baignade, nous réalisons votre piscine de rêve avec expertise.",
    features: [
      'Étude personnalisée de vos besoins et du terrain.',
      'Design architectural unique et intégration paysagère.',
      'Sélection de matériaux premium pour durabilité et esthétique.',
      'Maîtrise d\'œuvre complète du début à la fin du projet.',
    ],
    heroImage: '/images/services/hero-service-conception.jpg', // Image de l'ancien code, à adapter
    heroSubtitle: "Votre vision prend forme : design et réalisation de votre piscine.",
    section2Image: '/images/services/service-conception-details-1.jpeg', // À remplacer
    section2Subtitle: "Une approche personnalisée pour chaque projet",
    section2Text: "La création de votre piscine débute par une écoute attentive de vos désirs et une analyse approfondie de votre espace. Notre processus de conception intègre des modélisations 3D pour vous permettre de visualiser votre futur bassin sous tous les angles. Nous sélectionnons les matériaux les plus nobles et les techniques de construction les plus avancées pour garantir la solidité, la durabilité et l'esthétique de votre ouvrage. Notre expertise couvre toutes les phases, du terrassement aux finitions, assurant une parfaite maîtrise d'œuvre.",
    section3Image1: '/images/services/service-conception-details-2.jpg', // À remplacer
    section3Image2: '/images/services/service-conception-details-3.jpg', // À remplacer
    section3Subtitle: "L'excellence au service de la qualité",
    section3Text: "L'engagement d'Oasis Évasion est de vous livrer une piscine qui non seulement répond à vos attentes, mais les dépasse. Chaque étape est soumise à des contrôles qualité rigoureux, de la pose du revêtement à l'installation des systèmes de filtration et de traitement de l'eau. Nous nous entourons d'artisans qualifiés et de fournisseurs de confiance pour vous offrir une installation fiable et pérenne. Faire construire avec nous, c'est choisir la tranquillité d'esprit et l'assurance d'un investissement durable.",
    ctaText: "Prêt à démarrer la construction de votre piscine ? Contactez-nous pour une consultation gratuite et un devis détaillé.",
    metaTitle: "Conception et Construction de Piscines | Oasis Évasion",
    metaDescription: "De la conception à la construction, nous réalisons votre piscine sur mesure au Maroc. Expertise, matériaux de qualité et suivi de projet complet."
  },
  {
    id: 'renovation-transformation',
    title: 'Rénovation & Transformation',
    slug: 'renovation-transformation',
    icon: <FaSyncAlt size={24} />,
    shortDescription: "Donnez une seconde vie à votre piscine avec nos services de rénovation et de modernisation.",
    features: [
      'Diagnostic approfondi de votre bassin existant.',
      'Modernisation esthétique et fonctionnelle pour un nouveau look.',
      'Mise aux normes de sécurité et d\'hygiène en vigueur.',
      'Optimisation des systèmes pour une meilleure performance énergétique.',
    ],
    heroImage: '/images/services/hero-service-renovation.jpeg', // Image de l'ancien code, à adapter
    heroSubtitle: "Modernisez et revitalisez votre bassin existant.",
    section2Image: '/images/services/service-renovation-details-1.jpeg', // À remplacer
    section2Subtitle: "Un nouveau souffle pour votre espace aquatique",
    section2Text: "Votre piscine a besoin d'un coup de jeune ? Nous vous proposons des solutions de rénovation complètes pour transformer et moderniser votre bassin existant. Que ce soit pour remplacer un revêtement usé, améliorer la filtration, installer de nouveaux équipements ou modifier la forme, notre équipe évalue l'état de votre piscine et vous propose les meilleures options. Nous nous engageons à améliorer l'esthétique, la fonctionnalité et la performance énergétique de votre installation, prolongeant ainsi sa durée de vie et votre plaisir de baignade.",
    section3Image1: '/images/services/service-renovation-details-2.jpg', // À remplacer
    section3Image2: '/images/services/service-renovation-details-3.jpg', // À remplacer
    section3Subtitle: "Expertise technique et créativité",
    section3Text: "La rénovation d'une piscine est une opportunité d'améliorer son intégration paysagère et d'y ajouter des fonctionnalités innovantes. Nous pouvons transformer un bassin traditionnel en une piscine connectée, ajouter un système de nage à contre-courant, un éclairage LED multicolore, ou même créer une plage immergée. Notre savoir-faire technique nous permet de gérer les défis structurels et esthétiques, tout en respectant votre budget et les délais. Redécouvrez le plaisir de votre piscine comme au premier jour, ou même mieux !",
    ctaText: "Votre piscine mérite une seconde jeunesse ? Contactez-nous pour un diagnostic et un devis de rénovation.",
    metaTitle: "Rénovation et Modernisation de Piscines | Oasis Évasion",
    metaDescription: "Rénovez et transformez votre piscine existante avec Oasis Évasion. Modernisation esthétique, mise aux normes et optimisation des performances au Maroc."
  },
  {
    id: 'amenagements-exterieurs',
    title: 'Aménagements Extérieurs',
    slug: 'amenagements-exterieurs',
    icon: <FaPalette size={24} />,
    shortDescription: "Créez l'environnement parfait autour de votre piscine avec nos solutions d'aménagement paysager.",
    features: [
      'Conception paysagère intégrée autour de votre piscine.',
      'Création de terrasses, plages de piscine et espaces détente.',
      'Installation d\'éclairages ambiants pour une atmosphère magique.',
      'Sélection et intégration de mobilier et d\'éléments décoratifs.',
    ],
    heroImage: '/images/services/hero-service-amenagement.jpg', // Image de l'ancien code, à adapter
    heroSubtitle: "L'art de sublimer votre espace de vie extérieur.",
    section2Image: '/images/services/service-amenagement-details-1.jpg', // À remplacer
    section2Subtitle: "Harmonie et esthétique autour de l'eau",
    section2Text: "La beauté d'une piscine ne réside pas seulement dans le bassin lui-même, mais aussi dans l'environnement qui l'entoure. Nos services d'aménagements extérieurs sont conçus pour créer une synergie parfaite entre votre piscine et votre jardin. De la conception de terrasses élégantes en bois ou en pierre, à l'intégration de plages de piscine confortables et d'espaces de détente ombragés, nous pensons chaque détail pour transformer votre extérieur en un lieu de vie exceptionnel. L'éclairage paysager, la sélection de mobilier et la végétation adaptée complètent ce tableau idyllique.",
    section3Image1: '/images/services/service-amenagement-details-2.jpg', // À remplacer
    section3Image2: '/images/services/service-amenagement-details-3.jpeg', // À remplacer
    section3Subtitle: "Création d'espaces de vie extérieurs uniques",
    section3Text: "Au-delà de l'aspect purement esthétique, nos aménagements sont pensés pour la fonctionnalité et le confort. Nous créons des chemins d'accès, des douches extérieures, des zones de repas et des coins lounge qui invitent à la convivialité et à la relaxation. Nous sélectionnons des matériaux résistants aux intempéries et faciles d'entretien, garantissant la pérennité de vos installations. Laissez-nous vous aider à concevoir un espace extérieur qui reflète votre personnalité et vous invite à profiter pleinement de chaque saison.",
    ctaText: "Prêt à aménager l'extérieur de vos rêves ? Contactez-nous pour une étude paysagère personnalisée.",
    metaTitle: "Aménagements Extérieurs de Piscines | Oasis Évasion",
    metaDescription: "Créez l'environnement parfait autour de votre piscine avec nos aménagements extérieurs. Terrasses, plages, éclairages et mobilier pour un espace sublime."
  },
  {
    id: 'accompagnement-personnalise',
    title: 'Accompagnement Personnalisé',
    slug: 'accompagnement-personnalise',
    icon: <FaUserTie size={24} />,
    shortDescription: "Un expert dédié à votre projet, de l'idée à la maintenance, pour une tranquillité d'esprit totale.",
    features: [
      'Conseil expert à chaque étape de votre projet piscine.',
      'Suivi de projet dédié par un interlocuteur unique.',
      'Support technique et maintenance pour la pérennité de votre installation.',
      'Garantie de satisfaction et engagement sur la qualité de nos réalisations.',
    ],
    heroImage: '/images/services/hero-service-accompagnement.jpg', // Image de l'ancien code, à adapter
    heroSubtitle: "Votre satisfaction, notre priorité : un suivi dédié à chaque étape.",
    section2Image: '/images/services/service-accompagnement-details-1.jpg', // À remplacer
    section2Subtitle: "Un interlocuteur unique pour votre sérénité",
    section2Text: "Chez Oasis Évasion, nous croyons qu'un projet réussi est le fruit d'un accompagnement sur mesure. Dès le premier contact, un expert dédié vous est assigné pour vous conseiller, répondre à toutes vos questions et assurer la coordination de l'ensemble des étapes de votre projet piscine ou spa. Cet interlocuteur unique garantit une communication fluide, une réactivité optimale et une parfaite compréhension de vos attentes, du design initial à la mise en service de votre installation. Notre objectif est de rendre votre expérience aussi agréable et sans stress que possible.",
    section3Image1: '/images/services/service-accompagnement-details-2.jpeg', // À remplacer
    section3Image2: '/images/services/service-accompagnement-details-3.jpg', // À remplacer
    section3Subtitle: "Support technique et garantie de satisfaction",
    section3Text: "Notre engagement ne s'arrête pas à la livraison de votre projet. Nous vous offrons un support technique complet pour l'entretien et la maintenance de votre piscine, jacuzzi ou hammam. Des conseils personnalisés sur le traitement de l'eau aux services de dépannage, nous sommes là pour assurer la longévité et la performance de votre installation. Toutes nos réalisations sont couvertes par une garantie de satisfaction, témoignant de notre confiance dans la qualité de notre travail et des matériaux que nous utilisons. Faites le choix de l'excellence et de la tranquillité d'esprit avec Oasis Évasion.",
    ctaText: "Bénéficiez d'un accompagnement expert pour votre projet ? Contactez-nous pour en savoir plus sur notre approche personnalisée.",
    metaTitle: "Accompagnement Personnalisé de Projets Piscine | Oasis Évasion",
    metaDescription: "Bénéficiez d'un accompagnement personnalisé pour votre projet piscine ou spa au Maroc. Conseil expert, suivi dédié et support technique par Oasis Évasion."
  },
];
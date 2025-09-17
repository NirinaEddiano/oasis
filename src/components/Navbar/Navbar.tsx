// src/components/Navbar/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { FaPhoneAlt, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { servicesData } from '@/data/servicesData'; // Import des données de services
import { equipmentsData } from '@/data/equipmentsData'; // Import des données d'équipements

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isEquipementsHovered, setIsEquipementsHovered] = useState(false); // Nouvel état pour les équipements
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`;

  return (
    <header className={headerClasses}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/oasis-evasion-logo.png" alt="Oasis Évasion Logo" width={56} height={65} className={`${styles.logo}`} />
          </Link>
        </div>

        <ul className={styles.menu}>
          <li><Link href="/" className={pathname === '/' ? styles.activeLink : ''}>Accueil</Link></li>
          <li><Link href="/a-propos" className={pathname === '/a-propos' ? styles.activeLink : ''} >À propos</Link></li>
          <li
            className={styles.servicesMenuItem}
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <Link href="/services" className={pathname.startsWith('/services') ? styles.activeLink : ''}>
              Services <FaChevronDown size={10} className={`${styles.dropdownArrow} ${isServicesHovered ? styles.rotated : ''}`} />
            </Link>
            {isServicesHovered && (
              <ul className={styles.dropdownMenu}>
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={pathname === `/services/${service.slug}` ? styles.activeDropdownLink : ''}
                      onClick={() => setIsServicesHovered(false)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* NOUVEAU : Menu Équipement avec sous-menu */}
          <li
            className={styles.servicesMenuItem} // Réutilise la même classe de style que les services pour le dropdown
            onMouseEnter={() => setIsEquipementsHovered(true)}
            onMouseLeave={() => setIsEquipementsHovered(false)}
          >
            <Link href="/equipement" className={pathname.startsWith('/equipement') ? styles.activeLink : ''}>
              Équipement <FaChevronDown size={10} className={`${styles.dropdownArrow} ${isEquipementsHovered ? styles.rotated : ''}`} />
            </Link>
            {isEquipementsHovered && (
              <ul className={styles.dropdownMenu}> {/* Réutilise la même classe de style que les services */}
                {equipmentsData.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/equipement/${category.slug}`}
                      className={pathname === `/equipement/${category.slug}` ? styles.activeDropdownLink : ''}
                      onClick={() => setIsEquipementsHovered(false)} // Ferme le menu au clic
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link href="/realisations" className={pathname === '/realisations' ? styles.activeLink : ''}>Réalisations</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? styles.activeLink : ''}>Contact</Link></li>
        </ul>

        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.quoteButton}`}>
            <FaEnvelope size={16} />
            <span>Demander un devis</span>
          </button>
          <a href="tel:+212123456789" className={`${styles.button} ${styles.callButton}`}>
            <FaPhoneAlt size={16} />
            <span>Appeler Maintenant</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
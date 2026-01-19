import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SchemaOrgProps {
  type: 'website' | 'organization' | 'localBusiness';
}

export default function SchemaOrg({ type }: SchemaOrgProps) {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    // Remove existing schema script if any
    const existingScript = document.querySelector('script[data-schema-org]');
    if (existingScript) {
      existingScript.remove();
    }

    let schema = {};

    if (type === 'website') {
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ProA Consultoría",
        "url": siteUrl,
        "description": "Consultoría empresarial y asesoría estratégica para el crecimiento ordenado de tu negocio en Santiago, Chile",
        "inLanguage": "es-CL",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteUrl}/?s={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      };
    }

    if (type === 'organization') {
      schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "ProA Consultoría",
        "alternateName": "ProA Consulting",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "description": "Empresa de consultoría empresarial especializada en asesoría estratégica, optimización de procesos y transformación digital",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Santiago",
          "addressRegion": "RM",
          "addressCountry": "CL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-33.4489",
          "longitude": "-70.6693"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+56-9-9231-8415",
          "contactType": "Customer Service",
          "email": "carolina.castagneto@proaconsulting.cl",
          "availableLanguage": ["Spanish"],
          "areaServed": "CL"
        },
        "sameAs": [
          siteUrl
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$",
        "currenciesAccepted": "CLP",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer"
      };
    }

    if (type === 'localBusiness') {
      schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ProA Consultoría",
        "image": `${siteUrl}/logo.png`,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": "+56-9-9231-8415",
        "email": "carolina.castagneto@proaconsulting.cl",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Santiago",
          "addressRegion": "Región Metropolitana",
          "postalCode": "",
          "addressCountry": "CL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -33.4489,
          "longitude": -70.6693
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "12"
        }
      };
    }

    // Create and append the script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-org', 'true');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-schema-org]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, location.pathname, siteUrl]);

  return null;
}

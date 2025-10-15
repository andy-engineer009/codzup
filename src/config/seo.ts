// SEO Configuration for CodzUp Website
export const siteConfig = {
  name: "CodzUp",
  title: "CodzUp - Professional Web Development & Mobile App Development Services",
  description: "CodzUp delivers premium web development, mobile app development, UI/UX design, and cloud solutions. Transform your business with cutting-edge technology and expert software development services.",
  url: "https://codzup.com", // Update with your actual domain
  ogImage: "/assets/og-image.jpg",
  keywords: [
    "web development company",
    "mobile app development",
    "custom software development",
    "UI UX design services",
    "cloud solutions",
    "React development",
    "Next.js development",
    "software company",
    "web development services",
    "mobile application development",
    "responsive web design",
    "e-commerce development",
    "API development",
    "full stack development",
    "software consulting",
    "digital transformation",
    "enterprise software solutions",
    "startup software development",
    "agile development",
    "DevOps services"
  ],
  author: "CodzUp Team",
  twitterHandle: "@codzup",
  contactEmail: "hello@codzup.com",
  phone: "+62 845-6390-3",
  address: {
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "Your Postal Code",
    addressCountry: "Your Country"
  },
  socialLinks: {
    facebook: "https://www.facebook.com/share/1Jr5arqiv4/",
    instagram: "https://www.instagram.com/codzup?igsh=MXNib2g4eXNrNXEz",
    whatsapp: "https://wa.me/6284563903"
  },
  foundingDate: "2020",
  numberOfEmployees: "10-50"
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/assets/logo.svg`,
    "description": siteConfig.description,
    "email": siteConfig.contactEmail,
    "telephone": siteConfig.phone,
    "foundingDate": siteConfig.foundingDate,
    "numberOfEmployees": siteConfig.numberOfEmployees,
    "address": {
      "@type": "PostalAddress",
      ...siteConfig.address
    },
    "sameAs": [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.instagram
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom websites built with modern technologies, responsive design, and optimized performance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications for iOS and Android with seamless user experience."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Beautiful, intuitive interfaces designed to engage users and drive conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Solutions",
            "description": "Scalable cloud infrastructure, deployment, and management for your applications."
          }
        }
      ]
    }
  }
};


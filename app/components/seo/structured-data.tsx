function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Talk & Bloom",
    alternateName: "Talk and Bloom",
    url: "https://talkandbloom.ca",
    "@id": `https://talkandbloom.ca/#organization`,
    logo: "https://talkandbloom.ca/logo.png",
    image: "https://talkandbloom.ca/og-image.jpg",
    description:
      "Talk and Bloom offers professional speech therapy services for children and adults, blending bilingual care, modern therapeutic strategies, and a compassionate approach to language development.",
    founder: {
      "@type": "Person",
      name: "Rebeca Schvartzman",
    },
    telephone: "+14162746729",
    knowsLanguage: ["en", "es"],
    sameAs: ["https://instagram.com/talkandbloom.ca"],
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1136 Centre St, Unit 206",
        addressLocality: "Thornhill",
        addressRegion: "ON",
        postalCode: "L4J 3M8",
        addressCountry: {
          "@type": "Country",
          name: "CA",
        },
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.80916194244989,
        longitude: -79.46270383421012,
      },
      map: "https://maps.google.com/?q=Talk+and+Bloom",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "http://schema.org/Monday",
          "http://schema.org/Tuesday",
          "http://schema.org/Wednesday",
          "http://schema.org/Thursday",
          "http://schema.org/Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    },
    medicalSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Speech Therapy",
      description:
        "Personalized treatment for speech delays, language disorders, communication development, and more.",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://talkandbloom.ca",
    },
  };
}

// Generate FAQ schema for common questions
function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What age groups does Talk & Bloom work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Talk & Bloom provides speech therapy services for children of all ages, from toddlers to teenagers.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my child needs speech therapy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your child is experiencing difficulties with communication, pronunciation, language comprehension, or social communication skills, they might benefit from speech therapy. We offer free initial consultations to assess your child's needs.",
        },
      },
      {
        "@type": "Question",
        name: "How long does speech therapy typically take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The duration of speech therapy varies depending on the individual needs of each child. Some children may need a few months of therapy, while others might benefit from longer-term support. We create personalized treatment plans for each child.",
        },
      },
    ],
  };
}

interface StructuredDataProps {
  type: "LocalBusiness" | "FAQ" | "both";
  faqData?: any;
  localBusinessData?: any;
}

export default function StructuredData({
  type,
  faqData,
  localBusinessData,
}: StructuredDataProps) {
  // Generate the appropriate schema based on the type
  const generateSchema = () => {
    if (type === "LocalBusiness") {
      return [localBusinessData || generateLocalBusinessSchema()];
    } else if (type === "FAQ") {
      return [faqData || generateFAQSchema()];
    } else if (type === "both") {
      return [
        localBusinessData || generateLocalBusinessSchema(),
        faqData || generateFAQSchema(),
      ];
    }
    return [];
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  );
}

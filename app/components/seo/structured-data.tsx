function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SpeechPathology",
    name: "Talk & Bloom",
    image: "https://talkandbloom.ca/logo.png",
    "@id": `https://talkandbloom.ca/#organization`,
    url: "https://talkandbloom.ca",
    telephone: "+14162746729",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1136 Centre St, Unit 206",
      addressLocality: "Thornhill",
      addressRegion: "ON",
      postalCode: "L4J 3M8",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.80916194244989",
      longitude: "-79.46270383421012",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: ["https://instagram.com/talkandbloom.ca"],
    priceRange: "$$",
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

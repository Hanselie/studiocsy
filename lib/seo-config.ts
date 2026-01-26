// SEO Configuration for Studiocsy
// Centralized SEO constants and helpers for Health & Wellness Performance Creative Agency

export const siteConfig = {
    name: "Studiocsy",
    tagline: "Performance Creative Agency for Health & Wellness",
    url: "https://studiocsy.com",
    locale: "en-US",

    // Social links for schema
    socials: {
        instagram: "https://instagram.com/studiocsy",
        linkedin: "https://linkedin.com/company/studiocsy",
        twitter: "https://twitter.com/studiocsy",
    },

    // Contact info
    contact: {
        email: "csymediaofficial@gmail.com",
    },

    // Default OG image
    ogImage: "/og-image.jpg",
};

// Target keywords by page for internal reference
export const targetKeywords = {
    homepage: [
        "UGC agency for health brands",
        "performance creative agency US UK",
        "VSL production for supplements",
        "increase ROAS supplement brands",
    ],
    aiUgc: [
        "AI UGC video ads for wellness",
        "UGC vs AI UGC for health products",
        "AI generated UGC ads",
    ],
    caseStudies: [
        "best UGC agency for wellness brands",
        "health brand case studies",
        "supplement brand success stories",
    ],
    packages: [
        "performance creative packages",
        "VSL production pricing",
        "UGC ad packages health brands",
    ],
    contact: [
        "book strategy call",
        "free ROAS audit",
        "UGC agency consultation",
    ],
};

// JSON-LD Schema generators
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: "Performance-driven UGC & AI creative agency specializing in Health & Wellness brands. We help supplement and wellness companies achieve 3x ROAS through data-backed video ads, VSLs, and AI UGC.",
        sameAs: [
            siteConfig.socials.instagram,
            siteConfig.socials.linkedin,
            siteConfig.socials.twitter,
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.contact.email,
            contactType: "sales",
            availableLanguage: ["English", "German"],
        },
    };
}

export function generateProfessionalServiceSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: siteConfig.name,
        url: siteConfig.url,
        description: "UGC & AI Creative Agency for Health & Wellness Brands",
        priceRange: "$$$",
        areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Germany" },
        ],
        serviceType: [
            "UGC Video Production",
            "AI UGC Ads",
            "VSL Production",
            "Performance Creative",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Creative Packages",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "UGC Ad Production",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "AI UGC Video Ads",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "VSL Production",
                    },
                },
            ],
        },
    };
}

// Generate page-specific metadata helper
export function generatePageMetadata({
    title,
    description,
    path = "",
    ogImage,
}: {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
}) {
    const url = `${siteConfig.url}${path}`;
    const image = ogImage || siteConfig.ogImage;

    return {
        title,
        description,
        keywords: targetKeywords.homepage,
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        publisher: siteConfig.name,

        openGraph: {
            type: "website",
            locale: "en_US",
            url,
            siteName: siteConfig.name,
            title,
            description,
            images: [
                {
                    url: `${siteConfig.url}${image}`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${siteConfig.url}${image}`],
            creator: "@studiocsy",
        },

        alternates: {
            canonical: url,
            languages: {
                "en-US": url,
                "en-GB": url,
                "de-DE": `${siteConfig.url}/de${path}`,
            },
        },
    };
}

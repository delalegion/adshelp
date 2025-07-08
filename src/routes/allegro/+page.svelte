<script>
    import SvelteSeo from 'svelte-seo';

    // Scroll
    import { smoothScroll } from '$lib/scroll.js';

    // Components
    import Header from '$lib/components/sections/header/Header.svelte';
    import Navbar from '$lib/components/sections/navbar/Navbar.svelte';
    import Facts from '$lib/components/sections/facts/Facts.svelte';
    import Services from '$lib/components/sections/services/Services.svelte';
    import About from '$lib/components/sections/about/About.svelte';
    import Steps from '$lib/components/sections/steps/Steps.svelte';
    import Consulting from '$lib/components/sections/consulting/Consulting.svelte';
    import Contact from '$lib/components/sections/contact/Contact.svelte';
    import Footer from '$lib/components/sections/footer/Footer.svelte';
    import Journey from '$lib/components/sections/journey/Journey.svelte';

    let { form } = $props();
 
</script>

<svelte:head>
    <meta property="og:url" content="https://adshelp.pl/">
    <meta property="url" content="https://adshelp.pl/">
    <meta name="author" content="Adshelp.pl">
    <meta name="language" content="Polish">
    <meta name="dcterms.description" lang="pl" content="Eksperci od Allegro Ads i reklam online. Zwiększ sprzedaż swojej firmy dzięki skutecznym kampaniom reklamowym. Sprawdzone strategie wzrostu sprzedaży. Darmowy miesiąc współpracy.">
    <meta name="dcterms.subject" lang="pl" content="Allegro Ads; google ads; pomoc allegro, kampanie ads allegro, sprzedaż Allegro, reklamy online; kampanie reklamowe; wzrost sprzedaży; marketing e-commerce; agencja reklamowa; optymalizacja kampanii; PPC; digital marketing">
    <meta name="application-name" content="Adshelp - Agencja Allegro Ads">
    <link rel="index" title="Strona główna" href="https://adshelp.pl">

    <script src="./js/lazysizes.min.js" defer async=""></script>
    <script src="./js/ls.unveilhooks.min.js" defer async=""></script>
    <script type="application/ld+json">    
{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://adshelp.pl/",
            "name": "Adshelp.pl",
            "url": "https://adshelp.pl",
            "logo": {
                "@type": "ImageObject",
                "url": "https://adshelp.pl/logo.png"
            },
            "vatID": "PL7952519865",
            "email": "kontakt@adshelp.pl",
            "description": "Eksperci od Allegro Ads i reklam online. Zwiększ sprzedaż swojej firmy dzięki skutecznym kampaniom reklamowym | Adshelp.pl",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48-729-924-002",
                "contactType": "customer service",
                "availableLanguage": ["Polish"]
            },
            "sameAs": [
                "https://www.facebook.com/adshelp.pl",
                "https://www.instagram.com/adshelp.pl",
                "https://x.com/adshelp_pl"
            ],
            "foundingDate": "2024",
            "numberOfEmployees": "3",
            "areaServed": {
                "@type": "Country",
                "name": "Poland"
            },
            "about": [
                {
                    "@type": "Thing",
                    "name": "Allegro Ads",
                    "description": "Zwiększ sprzedaż swojej firmy dzięki skutecznym kampaniom Allegro Ads"
                },
                {
                    "@type": "Thing", 
                    "name": "Kampanie reklamowe",
                    "description": "Profesjonalne zarządzanie kampaniami reklamowymi Allegro Ads"
                },
                {
                    "@type": "Service",
                    "name": "Pomoc Allegro Ads",
                    "description": "Wsparcie techniczne i strategyczne dla kampanii Allegro"
                }
            ]
        },
        {
            "@type": "ItemList",
            "@id": "https://adshelp.pl/#navbar",
            "name": "Główne menu",
            "itemListElement": [
                {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Strona główna",
                "url": "https://adshelp.pl"
                },
                {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "O mnie",
                "url": "https://adshelp.pl/#about"
                },
                {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Dlaczego warto",
                "url": "https://adshelp.pl/#steps"
                },
                {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Usługi",
                "url": "https://adshelp.pl/#services"
                },
                {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "Blog",
                "url": "https://adshelp.pl/blog"
                },
                {
                "@type": "SiteNavigationElement",
                "position": 6,
                "name": "Kontakt",
                "url": "https://adshelp.pl/kontakt"
                }
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://adshelp.pl/",
            "url": "https://adshelp.pl",
            "description": "Eksperci od Allegro Ads i reklam online. Zwiększ sprzedaż swojej firmy dzięki skutecznym kampaniom reklamowym | Adshelp.pl",
            "publisher": {
                "@id": "https://adshelp.pl/"
            },
            "hasPart": [
                {
                    "@type": "WebPage",
                    "@id": "https://adshelp.pl",
                    "name": "Strona główna",
                    "description": "Eksperci od Allegro Ads i reklam online. Zwiększ sprzedaż swojej firmy dzięki skutecznym kampaniom | Adshelp.pl",
                    "url": "https://adshelp.pl"
                },
                {
                    "@type": "WebPage",
                    "@id": "https://adshelp.pl/#about",
                    "name": "O mnie",
                    "description": "Dowiedz się kim jest CEO Adshelp.pl - Ekspert Allegro Ads",
                    "url": "https://adshelp.pl/#about"
                },
                {
                    "@type": "WebPage",
                    "@id": "https://adshelp.pl/#steps",
                    "name": "Dlaczego warto",
                    "description": "Poznaj 4 etapy! Udowodnię Ci, że dzięki nim Twoje konto na Allegro może generować dużo lepsze wyniki!",
                    "url": "https://adshelp.pl/#steps"
                },
                {
                    "@type": "WebPage",
                    "@id": "https://adshelp.pl/#services",
                    "name": "Contact Us",
                    "description": "Poznaj 3 fundamenty naszych usług. Kampanie. Analiza. Optymalizacja.",
                    "url": "https://adshelp.pl/#services"
                },
                {
                    "@type": "WebPage",
                    "@id": "https://adshelp.pl/blog",
                    "name": "Blog",
                    "description": "Artykuły ze świata marketingu - sprawdzone strategie marketingowe, trendy reklamowe.",
                    "url": "https://adshelp.pl/blog"
                },
                {
                    "@type": "WebPage",
                    "@id": "https://adshelp.pl/kontakt",
                    "name": "Kontakt",
                    "description": "Skontaktuj się z wiodącą agencją Allegro Ads w Polsce - Adshelp.pl",
                    "url": "https://adshelp.pl/kontakt"
                }
            ]
        },
        {
            "@type": "ProfessionalService",
            "@id": "https://adshelp.pl/#services",
            "name": "Adshelp.pl - Profesjonalne zarządzanie kampaniami reklamowymi Allegro Ads",
            "image": "https://adshelp.pl/logo.png",
            "telephone": "+48-729-924-002",
            "priceRange": "$-$$",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "Poland",
                "addressLocality": "Przemyśl"
            },
            "additionalType": "https://schema.org/ProfessionalService",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "47",
                "itemReviewed": {
                    "@type": "Service",
                    "name": "Adshelp.pl - Wsparcie techniczne i strategiczne dla kampanii Allegro Ads"
                }
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48-729-924-002",
                "contactType": "customer service",
                "availableLanguage": ["Polish"]
            },
            "sameAs": [
                "https://www.facebook.com/adshelp.pl",
                "https://www.instagram.com/adshelp.pl",
                "https://x.com/adshelp_pl"
            ],
            "foundingDate": "2024",
            "numberOfEmployees": "1-10",
            "review": [
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Hubert Kruk"
                    },
                    "reviewBody": "Profesjonalne podejście i świetna strategia – dzięki AdsHelp nasza sprzedaż na Allegro wzrosła o 270% w 2 miesiące. Polecam każdemu, kto chce realnych efektów!",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                    },
                    "datePublished": "2025-06-27",
                    "itemReviewed": {
                        "@type": "Service",
                        "name": "Adshelp.pl - Optymalizacja Allegro Ads"
                    }
                },
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Joanna Maciąg"
                    },
                    "reviewBody": "Profesjonalne podejście i świetne rezultaty. Polecam każdemu sprzedawcy na Allegro.",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                    },
                    "datePublished": "2025-06-24",
                    "itemReviewed": {
                        "@type": "Service",
                        "name": "Adshelp.pl - Kampanie Allegro Ads"
                    }
                }
            ],
            "offers": [
                {
                    "@type": "Offer",
                    "name": "Pakiet Specjalista",
                    "description": "Pakiet idealny do przetestowania moich usług - Pierwszy darmowy miesiąc",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "0",
                        "priceCurrency": "PLN",
                        "valueAddedTaxIncluded": true
                    },
                    "category": "Promotional",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2025-12-31",
                    "url": "https://www.adshelp.pl/",
                    "seller": {
                        "@id": "https://adshelp.pl/#service"
                    }
                },
                {
                    "@type": "Offer",
                    "name": "Pakiet Manager",
                    "description": "Zaufałeś moim umiejętnościom i chcesz rozwinąć swoją firmę jeszcze bardziej! - Pierwszy darmowy miesiąc",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "0",
                        "priceCurrency": "PLN",
                        "valueAddedTaxIncluded": true
                    },
                    "category": "Promotional",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2025-12-31",
                    "url": "https://www.adshelp.pl/",
                    "seller": {
                        "@id": "https://adshelp.pl/#service"
                    }
                },
                {
                    "@type": "Offer",
                    "name": "Pakiet Dyrektor",
                    "description": "Wiesz, że moje umiejętności rozwiną Twoją firmę do granic możliwości! - Pierwszy darmowy miesiąc",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "0",
                        "priceCurrency": "PLN",
                        "valueAddedTaxIncluded": true
                    },
                    "category": "Promotional",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2025-12-31",
                    "url": "https://www.adshelp.pl/",
                    "seller": {
                        "@id": "https://adshelp.pl/#service"
                    }
                }
            ],
            "audience": {
                "@type": "Audience",
                "audienceType": "business owners, e-commerce managers, marketing specialists",
                "geographicArea": {
                    "@type": "Country",
                    "name": "Poland"
                }
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://adshelp.pl/#menu",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Strona główna",
                    "item": "https://adshelp.pl"
                }
            ]
        }
    ]
}
        </script>
    
</svelte:head>

<SvelteSeo
  title="Zwiększ swoją sprzedaż dzięki Allegro Ads | Adshelp.pl"
  description="Profesjonalne zarządzanie reklamami Allegro Ads i Google Ads. Dowiedz się jak optymalizować Allegro Ads, aby zwiększyć sprzedaż i widoczność. Bezpłatny pierwszy miesiąc!"
  canonical="https://adshelp.pl/"
  keywords="allegro ads, allegro ads partner, google ads pomoc, help google ads, allegro ads jak ustawić, ads allegro, kampanie ads allegro, reklamy allegro, kampanie allegro, wzrost sprzedaży, agencja reklamowa, allegro advertising, ppc allegro, optymalizacja allegro, marketing allegro, zwiększenie sprzedaży"
  openGraph={{
    title: "Optymalizacja Kampanii Allegro Ads - Zwiększ Sprzedaż Firmy | AdsHelp.pl",
    description:
      "Profesjonalne zarządzanie reklamami Allegro Ads. Bezpłatny pierwszy miesiąc współpracy!",
    image: "https://www.adshelp.pl/og-image.jpg",
    url: "https://adshelp.pl/",
    type: "website",
    images: [
      {
        url: "https://www.adshelp.pl/_app/immutable/assets/header-animation-poster.n-3Nb43m.avif",
        width: 397,
        height: 218,
        alt: "Heading image",
      },
    ],
    videos: [
        {
          url: 'https://www.adshelp.pl/_app/immutable/assets/header-animation.Bp_YXNtx.webm',
          width: 920,
          height: 690,
          secureUrl: 'https://www.adshelp.pl/_app/immutable/assets/header-animation.Bp_YXNtx.webm',
          type: 'video/webm'
        }
    ],
    site_name: "AdsHelp",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@adshelp_pl",
    title: "Zwiększ sprzedaż na Allegro! Skuteczne reklamy na Allegro | Adshelp",
    description:
      "Profesjonalne zarządzanie reklamami Allegro Ads i Google Ads. Dowiedz się jak optymalizować Allegro Ads, aby zwiększyć sprzedaż i widoczność. Bezpłatny pierwszy miesiąc!",
    image: "https://www.adshelp.pl/og-image.jpg",
  }}
  facebook={{
    appId: "1234567890",
  }}
/>

<main id="main" class="hfeed" property="mainEntityOfPage" tabindex="-1">

<!-- Header section -->
<Header />

<!-- Facts section -->
<Facts />

<!-- Services section -->
<Services />

<!-- About section -->
<About />

<!-- Steps section -->
<Steps />

<!-- Consulting section -->
<Consulting />

<!-- Journey section -->
<Journey />

<!-- Contact section -->
<Contact {form} />

</main>

<!-- Footer section -->
<Footer />

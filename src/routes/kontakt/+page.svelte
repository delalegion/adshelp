<script lang="ts">
    import SvelteSeo from 'svelte-seo';

    import Avatar from '$lib/assets/avatar.png';
    import Phone from 'phosphor-svelte/lib/Phone';
    import Check from "phosphor-svelte/lib/Check";
    import Button from '$lib/components/Button.svelte';
    import Message from 'phosphor-svelte/lib/ChatCircle';
    import PhoneImage from '$lib/assets/phone.png';

    import type { PageData } from './$types';
    import { fade, fly } from 'svelte/transition';
    import { enhance } from '$app/forms';
    import Footer from '$lib/components/sections/footer/Footer.svelte';
    import Audit from '$lib/components/sections/blog-audit/Audit.svelte';

    let { data, form }: { data: PageData } = $props();

    let activeContactTab = $state(0);
</script>

<svelte:head>
    <meta property="og:url" content="https://adshelp.pl/kontakt">
    <meta property="url" content="https://adshelp.pl/kontakt">
    <meta name="author" content="Adshelp.pl">
    <meta name="language" content="Polish">
    <meta name="dcterms.description" lang="pl" content="Eksperci od Allegro Ads i reklam online. Zwiększ sprzedaż swojej firmy dzięki skutecznym kampaniom reklamowym. Sprawdzone strategie wzrostu sprzedaży. Darmowy miesiąc współpracy.">
    <meta name="dcterms.subject" lang="pl" content="Allegro Ads; google ads; pomoc allegro, kampanie ads allegro, sprzedaż Allegro, reklamy online; kampanie reklamowe; wzrost sprzedaży; marketing e-commerce; agencja reklamowa; optymalizacja kampanii; PPC; digital marketing">
    <meta name="application-name" content="Adshelp - Agencja Allegro Ads">
    <link rel="index" title="Strona główna" href="https://adshelp.pl">
    <meta name="contactPoint.telephone" content="+48-729-924-002">
    <meta name="contactPoint.contactType" content="customer service">

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
                    "description": "Wsparcie techniczne i strategiczne dla kampanii Allegro"
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
            "@type": "WebPage",
            "@id": "https://adshelp.pl/kontakt",
            "url": "https://adshelp.pl/kontakt",
            "name": "Kontakt Adshelp.pl - Agencja Allegro Ads",
            "description": "Skontaktuj się z wiodącą agencją marketingową Allegro Ads w Polsce - Adshelp.pl. Bezpłatna konsultacja dotycząca Twoich potrzeb reklamowych w e-commerce.",
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
            ],
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://adshelp.pl/",
                "name": "Adshelp.pl",
                "url": "https://adshelp.pl"
            },
            "about": {
                "@id": "https://adshelp.pl/#about"
            },
            "mainEntity": {
                "@id": "https://adshelp.pl/"
            }
        },
        {
            "@type": "ContactPage",
            "@id": "https://adshelp.pl/kontakt#contact",
            "url": "https://adshelp.pl/kontakt",
            "name": "Kontakt Adshelp.pl - Agencja Allegro Ads",
            "description": "Skontaktuj się z wiodącą agencją marketingową Allegro Ads w Polsce - Adshelp.pl. Bezpłatna konsultacja dotycząca Twoich potrzeb reklamowych w e-commerce.",
            "mainEntity": {
                "@id": "https://adshelp.pl/"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://adshelp.pl/#menu",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://adshelp.pl"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Kontakt",
                    "item": "https://adshelp.pl/kontakt"
                }
            ]
        }
    ]
}
    </script>
    
</svelte:head>

<SvelteSeo
  title="Kontakt - Ekspert Allegro Ads | Profesjonalne kampanie Allegro Ads"
  description="Skontaktuj się z wiodącą agencją Allegro Ads w Polsce. Oferujemy profesjonalne zarządzanie kampaniami reklamowymi, optymalizację i strategie sprzedażowe na Allegro. Bezpłatna konsultacja."
  canonical="https://adshelp.pl/kontakt"
  keywords="promocja produktów Allegro, jak reklamować na Allegro, kontakt z agencją Allegro Ads, kontakt Allegro Ads, Allegro Kontakt, Allegro Ads Kontakt, reklamy na Allegro kontakt, agencja Allegro Ads Warszawa, agencja Allegro Ads Kraków, agencja Allegro Ads Przemyśl, zarządzanie reklamami Allegro, optymalizacja kampanii Allegro, ekspert Allegro Ads, konsultant Allegro, reklamy produktów Allegro, zwiększenie sprzedaży Allegro, kampanie reklamowe e-commerce, profesjonalne usługi Allegro"
  openGraph={{
    title: "Kontakt - Eksperci Allegro Ads | Profesjonalne Zarządzanie Kampaniami Reklamowymi",
    description:
      "Skontaktuj się z wiodącą agencją Allegro Ads w Polsce. Oferujemy profesjonalne zarządzanie kampaniami reklamowymi, optymalizację i strategie sprzedażowe na Allegro. Bezpłatna konsultacja.",
    image: "https://www.adshelp.pl/og-image.jpg",
    url: "https://adshelp.pl/kontakt",
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
/>

<header id="header" class="flex justify-center bg-primary-950 py-16 min-[950px]:py-32 bg-[url('/src/lib/assets/bg-blog.png')] bg-no-repeat bg-bottom-left min-[950px]:bg-center relative">
    <div class="max-w-7xl mx-6 w-full flex flex-col gap-4 sm:gap-6 min-[950px]:gap-12">
        <div class="flex flex-col px-2">
            <h2 class="text-[5.2vw] min-[640px]:text-[5vw] min-[1000px]:text-6xl-bold text-primary-500 font-display w-full">Czy chcesz, aby Twoje konto na</h2>
            <h2 class="text-[5.2vw] min-[640px]:text-[5vw] min-[1000px]:text-6xl-bold text-primary-500 font-display w-full">Allegro przynosiło większe zyski?</h2>
            <h2 class="text-[5.2vw] min-[640px]:text-[5vw] min-[1000px]:text-6xl-bold text-primary-500 font-display w-full flex items-center gap-2">Napisz do mnie!<img src={PhoneImage} alt="3D phone" class="max-sm:h-[5vh] max-md:h-[6vh] max-[1000px]:h-[8vh]" /></h2>
        </div>
        <div class="flex flex-col min-[950px]:flex-row" id="contact">
            <div class="flex flex-col min-[375px]:flex-row flex-1 gap-4 mt-16 max-[950px]:justify-center">
                <div>
                    <img src={Avatar} alt="CEO of Adshelp" class="max-w-[112px]" />
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm-bold text-primary-500">CEO & FOUNDER</p>
                    <h3 class="text-2xl-bold sm:text-3xl-bold font-display text-primary-50">MARCIN LUBERA</h3>
                    <div>
                        <a class="border-[1px] border-primary-900 rounded-full p-1 md:pr-2 inline-flex items-center gap-2" href="tel:+48729924002">
                            <div class="h-10 md:h-12 w-10 md:w-12 bg-primary-900 rounded-full flex justify-center items-center"><Phone color="#FFF5ED" weight="regular" size="24" /></div>
                            <p class="text-sm-bold text-primary-50 mr-2.5">+48 729 924 002</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-1 max-[950px]:justify-center">
                <div class="mt-12">
                    <div class="flex flex-row gap-4 justify-center px-4">
                        <div onclick={() => activeContactTab = 0} onkeydown={() => activeContactTab = 0} role="button" tabindex="0" class="flex flex-col sm:flex-row gap-2 px-6 xl:px-8 py-4 xl:py-6 sm:items-center rounded-t-xl {activeContactTab === 0 ? 'bg-stone-50 z-20' : 'bg-primary-700/20 hover:bg-primary-700/30 z-10'}  backdrop-blur-lg hover:cursor-pointer transition-all">
                            <Message weight="regular" size="24" color={activeContactTab === 0 ? '#410F09' : '#FFF5ED'} />
                            <p class="text-xs-bold {activeContactTab === 0 ? 'text-primary-950' : 'text-primary-50'}">Chcę wysłać wiadomość</p>
                        </div>
                        <div onclick={() => activeContactTab = 1} onkeydown={() => activeContactTab = 1} role="button" tabindex="0" class="flex flex-col sm:flex-row gap-2 px-6 xl:px-8 py-4 xl:py-6 sm:items-center rounded-t-xl {activeContactTab === 1 ? 'bg-stone-50 z-20' : 'bg-primary-700/20 hover:bg-primary-700/30 z-10'} backdrop-blur-lg hover:cursor-pointer transition-all">
                            <Phone weight="regular" size="24" color={activeContactTab === 1 ? '#410F09' : '#FFF5ED'} />
                            <p class="text-xs-bold {activeContactTab === 1 ? 'text-primary-950' : 'text-primary-50'}">Chcę zamówić konsultacje</p>
                        </div>
                    </div>
                    <div class="-mb-42 flex-[60%] bg-stone-50 rounded-2xl p-6 xl:p-8 flex-col shadow-hover relative z-10 w-full">
                        {#if activeContactTab === 0}
                        <div in:fly={{ y: 20, opacity: 0 }}>
                            <form method="POST" action="?/contactToMessage" use:enhance>
                                <div class="flex flex-col lg:flex-row gap-3 lg:gap-5">
                                    <input
                                        id="msg_name"
                                        class="{form?.nameError ? 'animate-shake' : ''} {form?.nameError ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] min-[1536px]:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                        placeholder="Imię *"
                                        name="msg_name"
                                    />
                                    <input
                                        id="msg_company"
                                        class="{form?.companyError ? 'animate-shake' : ''} {form?.companyError ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] min-[1536px]:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                        placeholder="Nazwa firmy albo nazwisko *"
                                        name="msg_company"
                                    />
                                </div>
                                <div class="flex flex-col lg:flex-row gap-3 lg:gap-5 py-3 lg:py-4">
                                    <input
                                        id="msg_email"
                                        class="{form?.emailError ? 'animate-shake' : ''} {form?.emailError ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] min-[1536px]:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                        placeholder="Adres e-mail *"
                                        name="msg_email"
                                        autocomplete="off"
                                    />
                                    <input
                                        id="msg_phone"
                                        class="{form?.phoneError ? 'animate-shake' : ''} {form?.phoneError ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] min-[1536px]:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                        placeholder="Numer telefonu *"
                                        name="msg_phone"
                                        autocomplete="off"
                                    />
                                </div>
                                <textarea
                                    id="msg_message"
                                    class="{form?.messageError ? 'animate-shake' : ''} {form?.messageError ? 'border-[2px] border-primary-600' : ''} w-full rounded-lg h-28 sm:h-24 transition-shadow shadow-card flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                    placeholder="Treść wiadomości *"
                                    name="msg_message"
                                    autocomplete="off"></textarea>

                                <div class="flex items-center space-x-2 sm:space-x-3 mt-3">
                                    <div class="inline-flex items-center -ml-2 inp">
                                        <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="msg_terms">
                                            <input type="checkbox" name="msg_terms"
                                            class="{form?.checkboxError ? 'animate-shake' : ''} {form?.checkboxError ? 'border-[2px] border-primary-600' : ''} before:content[''] hover:border-primary-400 bg-white peer relative h-7 w-7 cursor-pointer appearance-none rounded-lg border-2 border-dark-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-dark-500 before:opacity-0 before:transition-opacity checked:bg-primary-600 checked:border-primary-600 checked:bg-primary checked:before:bg-dark-900 hover:before:opacity-10"
                                            id="msg_terms" />
                                            <span
                                            class="absolute text-white flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label id="msg_terms" class="text-sm font-base-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="msg_terms">Akceptuję politykę prywatności</label>
                                    </div>
                                </div>
                                {#if form?.nameError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Imię</b> musi zawierać conajmniej 3 znaki.</p>{/if}
                                {#if form?.companyError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Nazwa firmy lub nazwisko</b> musi zawierać conajmniej 3 znaki.</p>{/if}
                                {#if form?.emailError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Email</b> musi zawierać prawidłowy adres email.</p>{/if}
                                {#if form?.phoneError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Numer telefonu</b> musi zawierać prawidłowy numer telefonu.</p>{/if}
                                {#if form?.messageError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Wiadomość</b> musi zawierać conajmniej 10 znaków.</p>{/if}
                                {#if form?.checkboxError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Wymagana <b>akceptacja</b> polityki prywatności.</p>{/if}
                                {#if form?.successContact}<p class="text-[12px] top-2 md:top-0 text-green-700 pt-4" transition:fade>Wiadomość wysłana. Skontaktuje się z tobą najszybciej jak to będzie możliwe. W razie pytań zapraszam do kontaktu telefonicznego: +48 729 924 002.</p>{/if}
                                <div class="mt-2 sm:mt-4"><Button label="Wyślij wiadomość" theme="orange" type="submit" /></div>

                            </form>
                        </div>
                        {:else}
                        <div in:fly={{ y: 20, opacity: 0 }}>
                            <form method="POST" action="?/contactToConsult" use:enhance>
                                <div class="flex flex-col lg:flex-row gap-3 lg:gap-5">
                                    <input
                                        id="cns_name"
                                        class="{form?.nameErrorConsult ? 'animate-shake' : ''} {form?.nameErrorConsult ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card w-full lg:max-w-[400px] min-[1536px]:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                        placeholder="Imię *"
                                        name="cns_name"
                                    />
                                    <input
                                        id="cns_company"
                                        class="{form?.companyErrorConsult ? 'animate-shake' : ''} {form?.companyErrorConsult ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card w-full lg:max-w-[400px] min-[1536px]:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                        placeholder="Nazwa firmy albo nazwisko *"
                                        name="cns_company"
                                    />
                                </div>
                                <div class="flex flex-col lg:flex-row gap-3 lg:gap-5 py-3 lg:py-4">
                                    <input
                                        id="cns_phone"
                                        class="{form?.phoneErrorConsult ? 'animate-shake' : ''} {form?.phoneErrorConsult ? 'border-[2px] border-primary-600' : ''} lg:flex-1 rounded-lg transition-shadow shadow-card w-full min-[1536px]:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                        placeholder="Numer telefonu *"
                                        name="cns_phone"
                                        autocomplete="off"
                                    />
                                </div>
                                <textarea
                                    id="cns_message"
                                    class="{form?.messageErrorConsult ? 'animate-shake' : ''} {form?.messageErrorConsult ? 'border-[2px] border-primary-600' : ''} w-full rounded-lg h-28 sm:h-24 transition-shadow shadow-card flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                    placeholder="Treść wiadomości (Nie wymagane)"
                                    name="cns_message"
                                    autocomplete="off"></textarea>

                                <div class="flex items-center space-x-2 sm:space-x-3 mt-3">
                                    <div class="inline-flex items-center -ml-2 inp">
                                        <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="cns_terms">
                                            <input type="checkbox" name="cns_terms"
                                            class="{form?.checkboxErrorConsult ? 'animate-shake' : ''} {form?.checkboxErrorConsult ? 'border-[2px] border-primary-600' : ''} before:content[''] hover:border-primary-400 bg-white peer relative h-7 w-7 cursor-pointer appearance-none rounded-lg border-2 border-dark-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-dark-500 before:opacity-0 before:transition-opacity checked:bg-primary-600 checked:border-primary-600 checked:bg-primary checked:before:bg-dark-900 hover:before:opacity-10"
                                            id="cns_terms" />
                                            <span
                                            class="absolute text-white flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label id="cns_terms" class="text-sm font-base-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="cns_terms">Akceptuję politykę prywatności</label>
                                    </div>
                                </div>
                                {#if form?.nameErrorConsult}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Imię</b> musi zawierać conajmniej 3 znaki.</p>{/if}
                                {#if form?.companyErrorConsult}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Nazwa firmy lub nazwisko</b> musi zawierać conajmniej 3 znaki.</p>{/if}
                                {#if form?.phoneErrorConsult}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Numer telefonu</b> musi zawierać prawidłowy numer telefonu.</p>{/if}
                                {#if form?.messageErrorConsult}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Wiadomość</b> musi zawierać conajmniej 10 znaków.</p>{/if}
                                {#if form?.checkboxErrorConsult}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Wymagana <b>akceptacja</b> polityki prywatności.</p>{/if}
                                {#if form?.successConsult}<p class="text-[12px] top-2 md:top-0 text-green-700 pt-4" transition:fade>Wiadomość wysłana. Skontaktuje się z tobą najszybciej jak to będzie możliwe. W razie pytań zapraszam do kontaktu telefonicznego: +48 729 924 002.</p>{/if}
                                <div class="mt-2 sm:mt-4"><Button label="Wyślij wiadomość" theme="orange" type="submit" /></div>

                            </form>
                        </div>
                        {/if}
                        <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[20px] bg-stone-50 -z-1"></div>
                        <div class="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-[24px] bg-stone-700/10 backdrop-blur-sm -z-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="h-12 bg-white"></div>

<div class="flex justify-center bg-white pb-10 sm:pb-24 max-md:pt-24">
    <div class="max-w-7xl mx-6 w-full">
        <Audit />
    </div>
</div>

<Footer />
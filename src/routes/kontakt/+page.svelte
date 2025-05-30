<script lang="ts">
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

    <meta property="url" content="https://adshelp.pl/">
    <meta name="description" content="Kontakt z Adshelp - Skuteczne kampanie Allegro Ads">
    <meta name="dcterms.description" lang="pl" content="Kontakt z Adshelp - Skuteczne reklamy Google Ads">
    <meta name="keywords" content="Reklamy na allegro Skuteczne reklamy na Allegro Skuteczne kampanie Allegro Kontakt reklamowy Kontakt do Adshelp Marcin Lubera kontakt Kontakt marketingowy Skuteczne reklamy Allegro Ads dla Twojego e-commerce Reklamy e-commerce dla Twojego konta firmowego na Allegro">
    <meta name="dcterms.subject" lang="pl" content="Kontakt reklamowy; Kontakt do Adshelp; Marcin Lubera kontakt; Kontakt marketingowy; Reklamy na Allegro Ads; Skuteczne reklamy na Allegro Ads; Skuteczne kampanie reklamowe Allegro Ads; Adshelp skuteczna firma pomagająca rozwinąć biznes na Allegro; Jak rozwinąc biznes na Allegro Ads; Reklamy e-commerce dla twojego binzesu na Allegro; Nadzorowoanie reklam Allegro Ads przez profesjonalną firmę; Profesjonalna firma zajmująca się reklamami Allegro Ads">
    <meta name="application-name" content="Kampanie Allegro Ads dla Twojego biznesu">
    <meta name="msapplication-tooltip" content="Adshelp - Skuteczne kampanie Allegro Ads">
    <meta name="msapplication-starturl" content="http://adshelp.pl">
    <meta name="msapplication-window" content="width=1024;height=768">
    <meta property="og:site_name" content="Adshelp.pl - Skuteczne kampanie Allegro ads dla Twojego e-commerce">
    <meta property="og:url" content="https://adshelp.pl/kontakt">
    <meta property="og:title" content="Chcesz rozwinąć biznes na Allegro? Napisz do Adshelp! | Adshelp.pl - Pomagamy rozwinąć Twój biznes na Allegro">
    <meta property="og:image" content="https://adshelp.pl/og-image.jpg">
    <meta property=”og:locale” content=”pl_PL” />
    <meta property="og:description" content="Nowoczesny blog dostarczający wiedzy o marketingu, która pomoże rozwinąć Twój biznes." />
    <meta property=”og:type” content=”website” />

    <link rel="index" title="Strona główna" href="https://adshelp.pl">
    <link rel="canonical" href="https://adshelp.pl/">
    <link rel="icon" href="https://adshelp.pl/favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="https://example.net/images/apple-touch-icon.png">

    <title>Kontakt z Adshelp - Skuteczne reklamy Google Ads</title>

</svelte:head>

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
                                        <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="terms">
                                            <input type="checkbox" name="terms"
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
                                        <label id="msg_terms-label" class="text-sm font-base-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="msg_terms">Akceptuję politykę prywatności</label>
                                    </div>
                                </div>
                                {#if form?.nameError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Imię</b> musi zawierać conajmniej 3 znaki.</p>{/if}
                                {#if form?.companyError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Nazwa firmy lub nazwisko</b> musi zawierać conajmniej 3 znaki.</p>{/if}
                                {#if form?.emailError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Email</b> musi zawierać prawidłowy adres email.</p>{/if}
                                {#if form?.phoneError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Numer telefonu</b> musi zawierać prawidłowy numer telefonu.</p>{/if}
                                {#if form?.messageError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Wiadomość</b> musi zawierać conajmniej 10 znaków.</p>{/if}
                                {#if form?.checkboxError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Wymagana <b>akceptacja</b> polityki prywatności.</p>{/if}
                                {#if form?.successForm}<p class="text-[12px] top-2 md:top-0 text-green-700 pt-4" transition:fade>Wiadomość wysłana. Skontaktuje się z tobą najszybciej jak to będzie możliwe. W razie pytań zapraszam do kontaktu telefonicznego: +48 729 924 002.</p>{/if}
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
                                        <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="terms">
                                            <input type="checkbox" name="terms"
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
                                        <label id="msg_terms-label" class="text-sm font-base-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="cns_terms">Akceptuję politykę prywatności</label>
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
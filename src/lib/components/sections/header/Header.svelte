<script>
    import { fly } from 'svelte/transition';
    import { fade } from "svelte/transition";


    // Images
    import video from '$lib/assets/header-animation.mp4';
    import videoWebm from '$lib/assets/header-animation.webm';
    import poster from '$lib/assets/header-animation-poster.webp';
    import posterEnhanced from '$lib/assets/header-animation-poster.webp?enhanced';

    // Components
    import Button from '$lib/components/Button.svelte';
    import { enhance } from '$app/forms';

    let activeTab = $state(1);
    let inp_account_name_error = $state(false);
    let inp_account_name_shaking = $state(false);
    let inp_account_name_data = $state();
    let inp_account_name = $state();

    let inp_allow_animation = $state(false);

    let inp_name = $state();
    let inp_name_error = $state(false);
    let inp_name_shaking = $state(false);
    let inp_name_data = $state();

    let inp_email = $state();
    let inp_email_error = $state(false);
    let inp_email_shaking = $state(false);
    let inp_email_data = $state();

    let inp_phone = $state();
    let inp_phone_error = $state(false);
    let inp_phone_shaking = $state(false);
    let inp_phone_data = $state();

    let success = $state(false);
    let errorsArray = $state([]);

    function setNextTab() {
        if (activeTab === 1) {
            inp_account_name = document.querySelector("#audit_account_name").value;
        }

        if (inp_account_name.length < 3) {
            inp_account_name_error = true;
            inp_account_name_shaking = true;

            return false;
        } else { inp_account_name_data = inp_account_name; activeTab = 0; inp_allow_animation = true; }

        inp_account_name_error = false;
        inp_account_name_shaking = false;
    }
    function sendForm() {
        const phoneRegex = /^(\+48\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{3})$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        errorsArray = [];

        if (activeTab === 2) {
            inp_name = document.querySelector("#audit_name").value;
            inp_phone = document.querySelector("#audit_phone").value;
            inp_email = document.querySelector("#audit_email").value;
        }

        if (inp_name.length < 3) {
            
            errorsArray.push({"name": "inp_name_error"})
            inp_name_error = true;
            inp_name_shaking = true;
            
        } else { inp_name_error = false; inp_name_shaking = false; inp_name_data = inp_name; }
    
        if (!phoneRegex.test(inp_phone)) {
        
            errorsArray.push({"name": "inp_phone_error"})
            inp_phone_error = true;
            inp_phone_shaking = true;
            
        } else { inp_phone_error = false; inp_phone_shaking = false; inp_phone_data = inp_phone; }
    
        if (!emailRegex.test(inp_email)) {
    
            errorsArray.push({"name": "inp_email_error"})
            inp_email_error = true;
            inp_email_shaking = true;
            
        } else { inp_email_error = false; inp_email_shaking = false; inp_email_data = inp_email; }

        if (inp_email_error === false && inp_phone_error === false && inp_name_error === false) {
            success = true;
            activeTab = 3;
            let form = document.querySelector("#audit-header-form");
            form.requestSubmit();
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
    }


</script>

<section id="header" class="header flex justify-center" itemscope itemtype="https://schema.org/WebPage">
    <div class="container pt-4 lg:pt-24 pb-4 lg:pb-24 pl-6 lg:pl-12 max-sm:pr-4 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3.5 items-center relative" aria-labelledby="hero-heading">
        <div class="xl:absolute right-0 2xl:-right-[8%] 2xl:-top-[4%] order-1 lg:order-2" itemscope itemtype="https://schema.org/MediaObject">
            <enhanced:img src={posterEnhanced} alt="Statistics table, phone with notifications" class="md:hidden" itemprop="contentUrl"
            itemscope itemtype="https://schema.org/ImageObject" />

            <div itemscope itemtype="https://schema.org/VideoObject">
                <video autoplay muted loop class="w-[700px] 2xl:w-[920px] aspect-4/3 -z-1 max-md:hidden"
                       playsinline preload="auto" fetchpriority="high" itemprop="contentUrl" src={videoWebm}
                       poster={poster}>
                  <source src={videoWebm} type="video/webm" />
                  <link rel="preload" as="image" href={poster} fetchpriority="high">
                </video>
              
                <meta itemprop="name" content="Allegro Ads Campaign Demo">
                <meta itemprop="description" content="Demonstration of effective Allegro Ads campaign management.">
                <meta itemprop="uploadDate" content="2025-01-01T00:00:00+01:00">
                <meta itemprop="thumbnailUrl" content={videoWebm}>
            </div>
        </div>
        <div class="col-span-1 mb-24 order-2 lg:order-1 z-10" itemscope itemtype="https://schema.org/Service" itemref="organization-info">
            <h1 class="text-3xl-bold lg:text-4xl-bold xl:text-5xl-bold 2xl:text-6xl-bold font-display text-primary-950 pr-4 lg:pr-10" itemprop="name">Skuteczne kampanie <span class="text-primary-600"><span itemprop="name">Allegro Ads</span></span> dla Twojego e-commerce</h1>
            <p class="text-sm lg:text-base text-primary-950 mt-4" itemprop="description">Pierwszy miesiąc bez zobowiązań, całkowicie za darmo!</p>

            <meta itemprop="serviceType" content="Digital Marketing Service">
            <meta itemprop="category" content="E-commerce Advertising">
            <!-- Service Provider Information (Hidden) -->
            <div id="organization-info" style="display: none;" 
                itemprop="provider" 
                itemscope itemtype="https://schema.org/Organization">
                <meta itemprop="name" content="AdsHelp">
                <meta itemprop="url" content="https://adshelp.pl">
                <meta itemprop="logo" content="https://adshelp.pl/logo.png">
                <meta itemprop="description" content="Zwiększ sprzedaż na Allegro! Skuteczne reklamy na Allegro | Adshelp.pl">
                <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                    <meta itemprop="streetAddress" content="ul. wyb. Wybrzeże Ojca Świętego Jana Pawła II 76A/12">
                    <meta itemprop="addressLocality" content="Przemyśl">
                    <meta itemprop="postalCode" content="37-700">
                    <meta itemprop="addressCountry" content="PL">
                </div>
                <!-- Contact Point -->
                <div itemprop="contactPoint" itemscope itemtype="https://schema.org/ContactPoint">
                    <meta itemprop="telephone" content="+48-729-924-002">
                    <meta itemprop="contactType" content="Customer Service">
                    <meta itemprop="email" content="kontakt@adshelp.pl">
                    <meta itemprop="availableLanguage" content="Polish">
                </div>
            </div>
            <!-- Area Served -->
            <div itemprop="areaServed" itemscope itemtype="https://schema.org/Country">
                <meta itemprop="name" content="Poland">
            </div>
            <!-- Service Offer -->
            <div itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="display: none;">
                <meta itemprop="name" content="Optymalizacja Kampanii Allegro Ads - Pierwszy miesiąc za darmo!">
                <meta itemprop="description" content="Profesjonalne zarządzanie reklamami Allegro Ads i Google Ads. Dowiedz się jak optymalizować Allegro Ads, aby zwiększyć sprzedaż i widoczność. Bezpłatny pierwszy miesiąc!">
                <div itemprop="priceSpecification" itemscope itemtype="https://schema.org/PriceSpecification">
                    <meta itemprop="price" content="0">
                    <meta itemprop="priceCurrency" content="PLN">
                    <meta itemprop="name" content="Pierwszy miesiąc darmowy!">
                </div>
                <meta itemprop="availability" content="https://schema.org/InStock">
                <meta itemprop="validFrom" content="2025-01-01">
            </div>

            <form method="POST" action="?/audit" id="audit-header-form" onsubmit={handleSubmit} aria-labelledby="form-heading" itemprop="potentialAction" itemscope itemtype="https://schema.org/SendAction" use:enhance>
                
            <meta itemprop="name" content="Darmowy audyt Allegro">
            <div itemprop="object" itemscope itemtype="https://schema.org/ContactPoint">
                <meta itemprop="contactType" content="customer service">
                <meta itemprop="availableLanguage" content="pl">
            </div>

            {#if activeTab === 1}
                <div class="flex flex-col gap-2">
                    <div class="flex flex-row relative gap-2 mt-5 md:mt-8 flex-wrap transition-height duration-500 ease-in-out min-h-10" in:fly={{ y: 10 }} out:fade onoutroend={() => activeTab = 2}>
                        <input
                        id="audit_account_name"
                        class="{inp_account_name_shaking ? 'animate-shake' : ''} {inp_account_name_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                        placeholder="Wpisz swoją nazwę Allegro *"
                        name="audit_account_name"
                        bind:value={inp_account_name}
                        autocomplete="off"
                        onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                        <div>
                            <Button label="Dalej" theme="orange" onclick={setNextTab} />
                        </div>
                    </div>
                    {#if inp_account_name_error}<p class="text-[12px] top-2 md:top-0 text-primary-600" transition:fade>Powyższe pole nie może być puste. Wpisz co najmniej 3 znaki.</p>{/if}
                </div>
            {/if}
            {#if activeTab === 2}
                <input type="hidden" bind:value={inp_account_name_data} name="audit_account_name_copy" id="audit_account_name_copy" />
                <div class="flex flex-col relative max-w-[600px] gap-2 min-[456px]:gap-3 mt-5 md:mt-8 transition-height duration-500 ease-in-out min-h-36" in:fly={{ y: 20 }} out:fly={{ y: -20, opacity: 0, duration: 500 }} onoutroend={() => success === true ? activeTab = 3 : activeTab = 1}>
                    <div class="flex flex-col min-[456px]:flex-row gap-2">
                        <input
                        id="audit_name"
                        class="{inp_name_shaking ? 'animate-shake' : ''} {inp_name_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                        placeholder="Imię i nazwisko *"
                        name="audit_name"
                        bind:value={inp_name_data}
                        autocomplete="off"
                        onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                        <input
                        id="audit_phone"
                        class="{inp_phone_shaking ? 'animate-shake' : ''} {inp_phone_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                        placeholder="Numer telefonu *"
                        name="audit_phone"
                        bind:value={inp_phone_data}
                        autocomplete="off"
                        onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <input
                        id="audit_email"
                        class="{inp_email_shaking ? 'animate-shake' : ''} {inp_email_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                        placeholder="Adres email *"
                        name="audit_email"
                        bind:value={inp_email_data}
                        autocomplete="off"
                        onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                        <div><Button label="Zamów audyt" theme="orange" onclick={sendForm} /></div>
                    </div>
                    <p class="text-[11px] text-primary-950 max-w-[500px]" itemscope itemtype="https://schema.org/PrivacyPolicy">Wypełniając formularz, zgadzasz się na przetwarzanie Twoich danych osobowych przez <span itemprop="creator" itemscope itemtype="https://schema.org/Organization">
                        <span itemprop="name">AdsHelp</span>
                    </span>, w celu wysłania informacji o usługach, audycie zgodnie z polityką prywatności.</p>
                    <div class="flex flex-row flex-wrap gap-1 -mb-2 md:-mb-4">
                        {#if inp_name_error}<p class="text-[12px] text-primary-600" transition:fade>Pole imię i nazwisko musi zawierać conajmniej 3 znaki.</p>{/if}
                        {#if inp_phone_error}<p class="text-[12px] text-primary-600" transition:fade>Wpisz prawidłowy numer telefonu.</p>{/if}
                        {#if inp_email_error}<p class="text-[12px] text-primary-600" transition:fade>Wpisz prawidłowy adres email.</p>{/if}
                        {#if success}<p class="text-[12px] text-green-800" transition:fade>Gratulacje!</p>{/if}
                    </div>
                </div>
            {/if}
            {#if activeTab === 3}
                <div class="flex flex-row gap-4 items-center mt-6" in:fly={{ y: 10, delay: 1000 }} out:fade>
                    <div class="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] flex justify-center items-center bg-green-700 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h2 class="text-lg-bold font-display text-primary-950" itemscope itemtype="https://schema.org/SuccessMessage">
                        Dane do audytu wysłane. W razie pytań zapraszam do kontaktu.
                    </h2>
                </div>
            {/if}
            </form>
            {#if success === false}
                <div class="flex flex-row gap-3 md:gap-3.5 mt-5 md:mt-7">
                    <div role="button" tabindex="0" onkeydown={setNextTab} onclick={setNextTab} class="text-sm md:text-base-bold {activeTab === 1 ? 'text-primary-950 border-orange-600 border-b-3' : 'border-b-2 border-stone-500 text-stone-500'} pb-1 md:pb-1.5 border-solid  hover:cursor-pointer">Krok 1</div>
                    <div role="button" tabindex="0" onclick={setNextTab} onkeydown={setNextTab} class="text-sm md:text-base-bold {activeTab === 2 ? 'text-primary-950 border-orange-600 border-b-3' : 'border-b-2 border-stone-500 text-stone-500'} pb-1 md:pb-1.5 hover:cursor-pointer hover:border-b-3 transition-all">Krok 2</div>
                </div>
            {/if}
        </div>
        <div class="max-lg:hidden col-span-1 order-1 lg:order-2 relative w-full h-full">
        </div>
    </div>
</section>


<!-- <script>
    import { fly } from 'svelte/transition';
    import { fade } from "svelte/transition"

    // Images
    import header from '$lib/assets/header.png';

    // Components
    import Button from '$lib/components/Button.svelte';

    let activeTab = $state(1);
    let inp_account_name_error = $state(false);
    let inp_account_name_shaking = $state(false);
    let inp_account_name_data = $state();
    let inp_account_name = $state();

    let inp_allow_animation = $state(false);

    let inp_name = $state();
    let inp_name_error = $state(false);
    let inp_name_shaking = $state(false);
    let inp_name_data = $state();

    let inp_email = $state();
    let inp_email_error = $state(false);
    let inp_email_shaking = $state(false);
    let inp_email_data = $state();

    let inp_phone = $state();
    let inp_phone_error = $state(false);
    let inp_phone_shaking = $state(false);
    let inp_phone_data = $state();

    let success = $state(false);
    let errorActive = $state(false);

    function setNextTab() {
        if (activeTab === 1) {
            inp_account_name = document.querySelector("#audit_account_name").value;
        }

        if (inp_account_name.length < 3) {
            inp_account_name_error = true;
            inp_account_name_shaking = true;

            return false;
        } else { inp_account_name_data = inp_account_name; activeTab = 0; inp_allow_animation = true; }

        inp_account_name_error = false;
        inp_account_name_shaking = false;
    }
    function sendForm() {
        const phoneRegex = /^(\+48\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{3})$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (activeTab === 2) {
            inp_name = document.querySelector("#audit_name").value;
            inp_phone = document.querySelector("#audit_phone").value;
            inp_email = document.querySelector("#audit_email").value;
        }

            if (inp_name < 3) {
             
                    inp_name_error = true;
                    inp_name_shaking = true;
                    success = false;

                    return false;
                
            } else { inp_name_data = inp_name; success = true; }
        

            if (!phoneRegex.test(inp_phone)) {
           
                    inp_phone_error = true;
                    inp_phone_shaking = true;
                    success = false;

                    return false;
                
            } else { inp_phone_data = inp_phone; success = true; }
        
            if (!emailRegex.test(inp_email)) {
      
                    inp_email_error = true;
                    inp_email_shaking = true;
                    success = false;

                    return false;
                
            } else { inp_email_data = inp_email; success = true; }

        if (inp_phone_error === true || inp_name_error === true || inp_email_error === true) {
            success = false;
        }
        inp_name_error = false;
        inp_name_shaking = false;
        inp_phone_error = false;
        inp_phone_shaking = false;
        inp_email_error = false;
        inp_email_shaking = false;
    }

</script> -->
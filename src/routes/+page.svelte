<script>
    // Images
    import logo from '$lib/assets/logo.svg';
    import header from '$lib/assets/header.png';
    import globe from '$lib/assets/globe.png';
    import fb from '$lib/assets/fb.svg';
    import ig from '$lib/assets/ig.svg';
    import yt from '$lib/assets/yt.svg';
    import time from '$lib/assets/time.svg';
    import data from '$lib/assets/data.svg';
    import indvidual from '$lib/assets/indvidual.svg';
    import servicesFirst from '$lib/assets/services-1.svg';
    import servicesSecond from '$lib/assets/services-2.svg';
    import servicesThird from '$lib/assets/services-3.svg';

    // Components
    import Button from '$lib/components/Button.svelte';
</script>

<nav id="navbar" class="navbar">
    <div class="max-w-screen flex justify-between pl-20 pr-20 py-6 align-middle">
        <div class="navbar__menu flex flex-row gap-10 items-center">
            <div class="navbar__menu__logo" id="adshelp-logo"><img src={logo} alt="Logo" /></div>
            <div class="navbar__menu__divider text-neutral-200">|</div>
            <ul class="flex flex-row gap-3">
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">O mnie</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">Dlaczego warto</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">Usługi</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">Blog</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">Kontakt</a></li>
            </ul>
        </div>
        <div class="navbar__socials flex flex-row gap-4">
            <div class="flex flex-row gap-3 mr-4">
                <div class=" border-2 border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[19px]" src={ig} alt="Instagram icon" /></div>
                <div class=" border-2 border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="h-[19px]" src={fb} alt="Facebook icon" /></div>
                <div class=" border-2 border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[21px]" src={yt} alt="Youtube icon" /></div>
            </div>
            <Button label="Zrealizujmy kampanię" type="dark" />
        </div>
    </div>
</nav>
<header id="header" class="header flex justify-center">
    <div class="container pt-24 pb-24 flex justify-between gap-3.5 items-center">
        <div class="flex-1 mb-24">
            <h1 class=" text-6xl-bold font-display text-primary-950 pr-10">Skuteczne kampanie <span class="text-primary-600">Allegro ads</span> dla Twojego e-commerce</h1>
            <p class=" text-base text-primary-950 mt-8">Zostaw swoje dane po darmowy audyt.</p>
            <div class=" flex flex-row gap-3 mt-4">
                <input
                id="apiKey"
                class="h-input rounded-lg transition-shadow shadow-card min-w-[350px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                placeholder="Wpisz swoją nazwę allegro"
                name="allegro-name"
                autocomplete="off"
                />
                <Button label="Zacznij teraz!" type="orange" />
            </div>
            <div class="flex flex-row gap-3.5 mt-4">
                <p class=" text-base-bold text-primary-950 pb-1.5 border-b-3 border-solid border-orange-600 hover:cursor-pointer">Krok 1</p>
                <p class=" text-base-bold text-stone-500 pb-1.5 border-b-2 border-solid border-stone-500 hover:cursor-pointer hover:border-b-3 hover:border-stone-700 hover:text-stone-700 transition-all">Krok 2</p>
            </div>
        </div>
        <div class="flex-1">
            <img src={header} alt="Image of header with bunch of graphics showing products and excited woman holding phone" class="w-full flex" />
        </div>
    </div>
</header>

<section id="facts" class="flex justify-center">
    <div class="container">
        <div class="pb-2 grid grid-cols-3 relative">

            <div class="col-span-1 z-10">
                <img src={globe} alt="Graphic globe with marketing info graphics" />
            </div>
            <div class="col-span-2 mt-20 z-10">
                <h2 class="text-5xl-bold text-primary-950 font-display pb-4">Fakty o moich działaniach</h2>
                <div class="mt-6 flex flex-row gap-6">
                    <div class="flex-1 flex flex-col p-3 bg-white p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400">
                        <img src={indvidual} alt="Graphic icon of two people" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950">Indywidualne<br />podejście</h3>
                        <p class="text-xs text-primary-950">Każdy projekt traktuję unikalnie, dopasowując strategię do potrzeb Twojego biznesu.</p>
                    </div>
                    <div class="flex-1 flex flex-col p-3 bg-white p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400">
                        <img src={data} alt="Graphic icon of stats" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950">Wyniki oparte<br/>na danych</h3>
                        <p class="text-xs text-primary-950">Podejmuję decyzje marketingowe na podstawie dokładnej analizy, aby osiągać realne rezultaty.</p>
                    </div>
                    <div class="flex-1 flex flex-col p-3 bg-white p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400">
                        <img src={time} alt="Graphic icon of stats" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950">Szybka<br />realizacja</h3>
                        <p class="text-xs text-primary-950">Podejmuję decyzje marketingowe na podstawie dokładnej analizy, aby osiągać realne rezultaty.</p>
                    </div>
                </div>
            </div>
            <div class="absolute z-0 flex justify-center items-center w-full">
                <div class=" w-4/5 bg-stone-100 h-[456px] rounded-full"></div>
            </div>

        </div>
        <div class="w-full flex items-center justify-center pb-24">

            <div class="flex flex-row gap-4 mt-14">
                <Button label="Kilka słów o twórcy" type="orange" />
                <Button label="Przebieg współpracy" type="dark" />
            </div>

        </div>
    </div>
</section>

<section id="services" class="bg-primary-950 justify-center flex relative">
    <div class="max-w-[1920px] w-full">
        <div class="grid grid-cols-2">
            <div class="col-span-1 py-32 ml-80">
                <div class="flex flex-col">
                    <p class="text-xl text-primary-500 mb-4">Usługi</p>
                    <h3 class="font-display text-4xl-bold text-primary-100 mb-12">Efekty mojej pracy<br />doceniają klienci</h3>
                    <div class="flex flex-col gap-7">
                        <div class="py-6 px-7 hover:bg-[#4F1811] transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer flex flex-row items-center">
                            <img src={servicesFirst} alt="Graphic icon of stats" class="mr-4" /><p class="text-base text-primary-500 ">Kampania Allegro Ads od zera</p>
                        </div>
                        <div class="py-6 px-7 hover:bg-[#4F1811] transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer flex flex-row items-center">
                            <img src={servicesSecond} alt="Graphic icon of stats" class="mr-4" /><p class="text-base text-primary-500">Analiza wyników i raportowanie</p>
                        </div>
                        <div class="py-6 px-7 hover:bg-[#4F1811] transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer flex flex-row items-center">
                            <img src={servicesThird} alt="Graphic icon of stats" class="mr-4" /><p class="text-base text-primary-500">Optymalizacja kampanii Allegro Ads</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 bg-[#250906] p-9 pt-32">
                        <p class=" text-base text-primary-100 mb-4 max-w-2/3">Tworzę kampanie reklamowe na Allegro od podstaw, dopasowując strategię do Twoich celów biznesowych.</p>
                        <Button label="Porozmawiajmy" />
                    </div>
                    <div class="col-span-1 bg-primary-850">dwa</div>
                    <div class="col-span-2 bg-primary-850">trzy</div>
                </div>
            </div>
        </div>
    </div>
</section>



<!-- <div class="flex flex-col">
    <h1 class="text-xs bg-primary-600">Testowy tekst</h1>
    <h1 class="text-sm">Testowy tekst</h1>
    <h1 class="text-base">Testowy tekst</h1>
    <h1 class="text-lg">Testowy tekst</h1>
    <h1 class="text-xl-normal font-display">Testowy tekst</h1>
    <h1 class="text-2xl">Testowy tekst</h1>
    <h1 class="text-3xl-bold font-display">Testowy tekst</h1>
    <h1 class="text-4xl">Testowy tekst</h1>
    <h1 class="text-5xl">Testowy tekst</h1>
    <h1 class="text-6xl">Testowy tekst</h1>
    <h1 class="text-7xl">Testowy tekst</h1>
    <h1 class="text-8xl font-display bg-primary-600">Testowy tekst</h1>
</div> -->


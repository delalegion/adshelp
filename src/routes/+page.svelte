<script>
    import logo from '$lib/assets/logo.svg';
    import header from '$lib/assets/header.png';
    import fb from '$lib/assets/fb.svg';
    import ig from '$lib/assets/ig.svg';
    import yt from '$lib/assets/yt.svg';
    import Button from '$lib/components/Button.svelte';
</script>

<nav id="navbar" class="navbar">
    <div class="max-w-screen flex justify-between pl-20 pr-20 py-6 align-middle">
        <div class="navbar__menu flex flex-row gap-10 items-center">
            <div class="navbar__menu__logo" id="adshelp-logo"><img src={logo} alt="Logo" /></div>
            <div class="navbar__menu__divider text-neutral-200">|</div>
            <ul class="flex flex-row gap-5">
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="pl-2.5 pr-2.5">O mnie</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="pl-2.5 pr-2.5">Dlaczego warto</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="pl-2.5 pr-2.5">Usługi</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="pl-2.5 pr-2.5">Blog</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="pl-2.5 pr-2.5">Kontakt</a></li>
            </ul>
        </div>
        <div class="navbar__socials flex flex-row gap-4">
            <div class="flex flex-row gap-3">
                <div class=" border-2 border-stone-50 border-solid rounded-full w-[44px] h-[44px]"><img src={ig} alt="Instagram icon" /></div>
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
                name="name"
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
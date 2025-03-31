<script>
    import { quadInOut, sineInOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    // Images
    import logo from '$lib/assets/logo.svg';
    import fb from '$lib/assets/fb.svg';
    import ig from '$lib/assets/ig.svg';
    import yt from '$lib/assets/yt.svg';

    // Components
    import Button from '$lib/components/Button.svelte';

    // Menu
    let isMenuOpen = $state(false);

    function toggle() {
        let menuBtn = document.querySelector("#hamburgerMenu");
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            menuBtn?.classList.add("active");
        } else { menuBtn?.classList.remove("active"); }
    }
</script>

<style>
    .hamburgerMenu {
        height: 2px;
        width: 28px;
        background-color: white;
        position: relative;
    }
    .hamburgerMenu.active::after {
        content: '';
        width: 10px;
    }
    .hamburgerMenu::after {
        content: '';
        width: 28px;
        position: absolute;
        height: 2px;
        top: -6px;
        background-color: white;
    }
    .hamburgerMenu::before {
        content: '';
        width: 18px;
        position: absolute;
        height: 2px;
        top: 6px;
        background-color: white;
    }
</style>

<nav id="navbar" class="navbar z-10">
    <div class="max-w-screen flex justify-between pr-6 xl:pr-10 2xl:pr-20 pl-6 xl:pl-10 2xl:pl-20 py-4 xl:py-6 align-middle">
        <div class="navbar__menu flex flex-row gap-6 xl:gap-10 items-center z-10">
            <a href="/" id="adshelp-logo"><img src={logo} alt="Logo of company Adshelp" /></a>
            <div class="text-neutral-200 hidden xl:flex">|</div>
            <ul class="flex flex-row gap-3 max-[852px]:hidden">
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="#about" class="hover:bg-stone-200 transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">O mnie</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="#steps" class="hover:bg-stone-200 transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Dlaczego warto</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="#services" class="hover:bg-stone-200 transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Usługi</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="#journey" class="hover:bg-stone-200 transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Blog</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="#contact" class="hover:bg-stone-200 transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Kontakt</a></li>
            </ul>
        </div>
        <div class="navbar__socials flex flex-row gap-4 z-10">
            <div class="flex-row gap-2 xl:gap-3 mr-0 xl:mr-4 items-center hidden lg:flex">
                <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[19px]" src={ig} alt="Instagram icon" /></div>
                <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="h-[19px]" src={fb} alt="Facebook icon" /></div>
                <div class="border-[1px] hover:border-[2px]  border-stone-300 border-solid rounded-full w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[21px]" src={yt} alt="Youtube icon" /></div>
            </div>
            <div class="max-[500px]:hidden"><Button label="Zrealizujmy kampanię" theme="dark" href="#contact" /></div>
            <div role="button" tabindex="0" onkeydown={toggle} onclick={toggle} class="hidden max-[852px]:flex justify-center items-center rounded-full bg-primary-600 py-3 px-5 active:scale-[0.98] active:transition-all">
                <div class="hamburgerMenu" id="hamburgerMenu"></div>              
            </div>
        </div>

        {#if isMenuOpen}
        <div class="flex flex-col pt-28 max-[440px]:px-8 px-14 absolute top-0 left-0 bottom-0 right-0 bg-white z-[4]" transition:fade={{ duration: 100 }}>
            <ul class="flex flex-col gap-5" transition:fly={{ y: 50, opacity: 0, easing: sineInOut, duration: 200 }}>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a href="#about">O mnie</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a href="#steps">Dlaczego warto</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a href="#services">Usługi</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a href="#journey">Blog</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a href="#contact">Kontakt</a></li>
            </ul>
            <div class="flex flex-row gap-3 items-center max-[310px]:mt-8 mt-12" transition:fly={{ y: 50, opacity: 0, easing: sineInOut, duration: 280 }}>
                <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[19px]" src={ig} alt="Instagram icon" /></div>
                <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="h-[19px]" src={fb} alt="Facebook icon" /></div>
                <div class="border-[1px] hover:border-[2px]  border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[21px]" src={yt} alt="Youtube icon" /></div>
            </div>
        </div>
        {/if}

    </div>
</nav>
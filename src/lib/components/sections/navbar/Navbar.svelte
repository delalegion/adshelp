<script>
    import { sineInOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';
    import { page } from '$app/state';
    
    // Images
    import logo from '$lib/assets/logo.svg';
    import logoWhite from '$lib/assets/logo-white.svg';
    import fb from '$lib/assets/fb.svg';
    import ig from '$lib/assets/ig.svg';
    import yt from '$lib/assets/yt.svg';

    // Components
    import Button from '$lib/components/Button.svelte';
    import { onMount } from 'svelte';

    // Menu
    let isMenuOpen = $state(false);
    const id = $derived(page.url.pathname);

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

<nav id="navbar" class="navbar z-10 {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'bg-primary-950' : ''} {id.includes('article') ? 'bg-white' : ''} transition-all transition-300">
    <div class="max-w-screen flex justify-between pr-6 xl:pr-10 2xl:pr-20 pl-6 xl:pl-10 2xl:pl-20 py-4 xl:py-6 align-middle">
        <div class="navbar__menu flex flex-row gap-6 xl:gap-10 items-center z-45">
            <a href="/" id="adshelp-logo">
                {#if id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt')}
                    {#if isMenuOpen}
                        <img src={logo} alt="Logo of company Adshelp" />
                    {:else}
                        <img src={logoWhite} alt="Logo of company Adshelp" />
                    {/if}
                {:else}
                    <img src={logo} alt="Logo of company Adshelp" />
                {/if}
            </a>            
            <div class="hidden xl:flex {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'text-[#340B07]' : 'text-neutral-200'}">|</div>
            <ul class="flex flex-row gap-3 max-[852px]:hidden">
                <li class="text-sm {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'text-primary-100' : 'text-primary-950'} active:scale-[0.98] active:transition-all"><a href="/#about" class="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'hover:bg-primary-dark' : 'hover:bg-stone-200'}  transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">O mnie</a></li>
                <li class="text-sm {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'text-primary-100' : 'text-primary-950'} active:scale-[0.98] active:transition-all"><a href="/#steps" class="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'hover:bg-primary-dark' : 'hover:bg-stone-200'} transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Dlaczego warto</a></li>
                <li class="text-sm {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'text-primary-100' : 'text-primary-950'} active:scale-[0.98] active:transition-all"><a href="/#services" class="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'hover:bg-primary-dark' : 'hover:bg-stone-200'} transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Usługi</a></li>
                <li class="text-sm {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'text-primary-100' : 'text-primary-950'} active:scale-[0.98] active:transition-all"><a href="/blog" class="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'hover:bg-primary-dark' : 'hover:bg-stone-200'} transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Blog</a></li>
                <li class="text-sm {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'text-primary-100' : 'text-primary-950'} active:scale-[0.98] active:transition-all"><a href="/allegro" class="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'hover:bg-primary-dark' : 'hover:bg-stone-200'} transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Allegro</a></li>
                <li class="text-sm {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'text-primary-100' : 'text-primary-950'} active:scale-[0.98] active:transition-all"><a href="/kontakt" class="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'hover:bg-primary-dark' : 'hover:bg-stone-200'} transition-all px-2.5 xl:px-3.5 py-2 xl:py-3 rounded-full hover:opacity-85">Kontakt</a></li>
            </ul>
        </div>
        <div class="navbar__socials flex flex-row gap-4 z-50">
            <div class="flex-row gap-2 xl:gap-3 mr-0 xl:mr-4 items-center hidden lg:flex">
                <div class="border-[1px] hover:border-[2px] {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'border-primary-950 bg-primary-dark hover:border-primary-dark' : 'border-stone-300 hover:border-primary-950'}  border-solid rounded-full w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px] flex items-center justify-center hover:scale-105  active:scale-95 hover:transition-all hover:cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1.65C11.4 1.65 11.7 1.65 12.675 1.725C15.15 1.8 16.275 3 16.35 5.4C16.425 6.375 16.425 6.6 16.425 9C16.425 11.4 16.425 11.7 16.35 12.6C16.275 15 15.075 16.2 12.675 16.275C11.7 16.35 11.475 16.35 9 16.35C6.6 16.35 6.3 16.35 5.4 16.275C2.925 16.2 1.8 15 1.725 12.6C1.65 11.625 1.65 11.4 1.65 9C1.65 6.6 1.65 6.3 1.725 5.4C1.8 3 3 1.8 5.4 1.725C6.3 1.65 6.6 1.65 9 1.65ZM9 0C6.525 0 6.225 0 5.325 0.075C2.025 0.225 0.225 2.025 0.075 5.325C0 6.225 0 6.525 0 9C0 11.475 0 11.775 0.075 12.675C0.225 15.975 2.025 17.775 5.325 17.925C6.225 18 6.525 18 9 18C11.475 18 11.775 18 12.675 17.925C15.975 17.775 17.775 15.975 17.925 12.675C18 11.775 18 11.475 18 9C18 6.525 18 6.225 17.925 5.325C17.775 2.025 15.975 0.225 12.675 0.075C11.775 0 11.475 0 9 0ZM9 4.35C6.45 4.35 4.35 6.45 4.35 9C4.35 11.55 6.45 13.65 9 13.65C11.55 13.65 13.65 11.55 13.65 9C13.65 6.45 11.55 4.35 9 4.35ZM9 12C7.35 12 6 10.65 6 9C6 7.35 7.35 6 9 6C10.65 6 12 7.35 12 9C12 10.65 10.65 12 9 12ZM13.8 3.15C13.2 3.15 12.75 3.6 12.75 4.2C12.75 4.8 13.2 5.25 13.8 5.25C14.4 5.25 14.85 4.8 14.85 4.2C14.85 3.6 14.4 3.15 13.8 3.15Z" fill="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? '#FFF5ED' : '#410F09'}"/>
                    </svg>    
                </div>
                <div class="border-[1px] hover:border-[2px] {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'border-primary-950 bg-primary-dark hover:border-primary-dark' : 'border-stone-300 hover:border-primary-950'} border-solid rounded-full w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px] flex items-center justify-center hover:scale-105 active:scale-95 hover:transition-all hover:cursor-pointer">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5754 1.66357L14.5754 1.6636L14.585 1.66433C15.187 1.71064 15.5061 1.8249 15.6818 1.92964C15.8261 2.01557 15.9533 2.14026 16.0746 2.41514C16.2118 2.72579 16.3289 3.2043 16.403 3.95477C16.4762 4.69719 16.5 5.61609 16.5 6.76875C16.5 7.9212 16.4763 8.84537 16.4029 9.59431C16.3286 10.3518 16.2111 10.8386 16.0726 11.155C15.9495 11.4364 15.8232 11.5564 15.6894 11.6351C15.5249 11.7318 15.217 11.8403 14.6232 11.8707L14.6232 11.8707L14.6168 11.8711C11.9777 12.0177 6.05257 12.018 3.3998 11.872C2.80765 11.8249 2.49245 11.7117 2.31815 11.6079C2.17392 11.5219 2.04671 11.3972 1.92537 11.1224C1.78823 10.8117 1.67112 10.3332 1.59704 9.58273C1.52376 8.84032 1.5 7.92141 1.5 6.76875C1.5 5.61609 1.52376 4.69719 1.59704 3.95477C1.67112 3.2043 1.78823 2.72579 1.92537 2.41514C2.04671 2.14026 2.17392 2.01557 2.31815 1.92964C2.49394 1.8249 2.81305 1.71064 3.41504 1.66433L3.41505 1.66436L3.42457 1.66357C6.04167 1.44548 11.9583 1.44548 14.5754 1.66357ZM0 6.76875C0 11.4188 0.375 13.1438 3.3 13.3688C6 13.5188 12 13.5188 14.7 13.3688C17.625 13.2188 18 11.4188 18 6.76875C18 2.11875 17.625 0.39375 14.7 0.16875C12 -0.05625 6 -0.05625 3.3 0.16875C0.375 0.39375 0 2.11875 0 6.76875ZM12.75 6.76868L6.75 9.76868V3.76868L12.75 6.76868Z" fill="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? '#FFF5ED' : '#410F09'}"/>
                    </svg>                        
                </div>
                <div class="border-[1px] hover:border-[2px]  {id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? 'border-primary-950 bg-primary-dark hover:border-primary-dark' : 'border-stone-300 hover:border-primary-950'} border-solid rounded-full w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px] flex items-center justify-center hover:scale-105 active:scale-95 hover:transition-all hover:cursor-pointer">
                    <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5.66667H0V8.5H2V17H5.33333V8.5H7.73333L8 5.66667H5.33333V4.4625C5.33333 3.825 5.46667 3.54167 6.06667 3.54167H8V0H5.46667C3.06667 0 2 1.13333 2 3.25833V5.66667Z" fill="{id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt') ? '#FFF5ED' : '#410F09'}"/>
                    </svg>                        
                </div>
            </div>
            <div class="max-[500px]:hidden">{#if id.includes('/blog') && !id.includes('/article') || id.includes('/kontakt')}<Button label="Zrealizujmy kampanię" theme="orange" href="#contact" />{:else}<Button label="Zrealizujmy kampanię" theme="dark" href="#contact" />{/if}</div>
            <div role="button" tabindex="0" onkeydown={toggle} onclick={toggle} class="hidden max-[852px]:flex justify-center items-center rounded-full bg-primary-600 py-3 px-5 active:scale-[0.98] active:transition-all">
                <div class="hamburgerMenu" id="hamburgerMenu"></div>              
            </div>
        </div>

        {#if isMenuOpen}
        <div class="flex flex-col pt-28 max-[440px]:px-8 px-14 absolute top-0 left-0 bottom-0 right-0 bg-white z-[40]" transition:fade={{ duration: 100 }}>
            <ul class="flex flex-col gap-5" transition:fly={{ y: 50, opacity: 0, easing: sineInOut, duration: 200 }}>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a onclick={() => isMenuOpen = false} href="/#about">O mnie</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a onclick={() => isMenuOpen = false} href="/#steps">Dlaczego warto</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a onclick={() => isMenuOpen = false} href="/#services">Usługi</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a onclick={() => isMenuOpen = false} href="/blog">Blog</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a onclick={() => isMenuOpen = false} href="/allegro">Allegro</a></li>
                <li class="max-[310px]:text-2xl-bold text-3xl-bold font-display text-primary-950"><a onclick={() => isMenuOpen = false} href="/kontakt">Kontakt</a></li>
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
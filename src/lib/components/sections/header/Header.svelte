<script>
    import { fly } from 'svelte/transition';
    import { fade } from "svelte/transition"

    // Images
    import header from '$lib/assets/header.png';

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

<style>
    @keyframes shake {
		0%, 100% { transform: translateX(0); }
		10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
		20%, 40%, 60%, 80% { transform: translateX(5px); }
	}

	:global(.animate-shake) {
		animation: shake 0.5s ease-in-out;
	}
</style>

<header id="header" class="header flex justify-center">
    <div class="container pt-12 lg:pt-24 pb-12 lg:pb-24 pl-6 lg:pl-12 pr-6 lg:pr-12 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3.5 items-center">
        <div class="col-span-1 mb-24 order-2 lg:order-1">
            <h1 class="text-3xl-bold lg:text-4xl-bold xl:text-5xl-bold 2xl:text-6xl-bold font-display text-primary-950 pr-4 lg:pr-10">Skuteczne kampanie <span class="text-primary-600">Allegro ads</span> dla Twojego e-commerce</h1>
            <p class="text-sm lg:text-base text-primary-950 mt-4">Zostaw swoje dane i uzyskaj darmowy audyt</p>
         
            <form method="POST" action="?/audit" id="audit-header-form" onsubmit={handleSubmit} use:enhance>
            {#if activeTab === 1}
                <div class="flex flex-row relative gap-2 mt-5 md:mt-8 flex-wrap transition-height duration-500 ease-in-out min-h-10" in:fly={{ y: 10 }} out:fade onoutroend={() => activeTab = 2}>
                    <input
                    id="audit_account_name"
                    class="{inp_account_name_shaking ? 'animate-shake' : ''} {inp_account_name_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 h-input rounded-lg transition-shadow shadow-card lg:min-w-[350px] lg:max-w-[400px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-[45px] px-4 md:px-6 py-2 md:py-4 focus:ring-2 focus:ring-offset-2 text-sm md:text-base"
                    placeholder="Wpisz swoją nazwę Allegro *"
                    name="audit_account_name"
                    autocomplete="off" />
                    <div>
                        <Button label="Dalej" theme="orange" onclick={setNextTab} />
                    </div>
                    {#if inp_account_name_error}<p class="text-[14px] top-2 md:top-0 text-primary-600" transition:fade>Powyższe pole nie może być puste. Wpisz co najmniej 3 znaki.</p>{/if}
                </div>
            {/if}
            {#if activeTab === 2}
                <input type="hidden" bind:value={inp_account_name_data} name="audit_account_name_copy" id="audit_account_name_copy" />
                <div class="flex flex-col relative max-w-[600px] gap-2 min-[456px]:gap-3 mt-5 md:mt-8 transition-height duration-500 ease-in-out min-h-36" in:fly={{ y: 20 }} out:fly={{ y: -20, opacity: 0, duration: 500 }} onoutroend={() => success === true ? activeTab = 3 : activeTab = 1}>
                    <div class="flex flex-col min-[456px]:flex-row gap-2">
                        <input
                        id="audit_name"
                        class="{inp_name_shaking ? 'animate-shake' : ''} {inp_name_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 h-input rounded-lg transition-shadow shadow-card max-w-full xl:min-w-[280px] xl:max-w-[320px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-[45px] px-4 md:px-6 py-3 md:py-4 max-[456px]:min-h-[45px] focus:ring-2 focus:ring-offset-2 text-sm md:text-base"
                        placeholder="Imię i nazwisko *"
                        name="audit_name"
                        bind:value={inp_name_data}
                        autocomplete="off" />
                        <input
                        id="audit_phone"
                        class="{inp_phone_shaking ? 'animate-shake' : ''} {inp_phone_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 h-input rounded-lg transition-shadow shadow-card max-w-full xl:min-w-[280px] xl:max-w-[320px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-[45px] px-4 md:px-6 py-3 md:py-4 max-[456px]:min-h-[45px] focus:ring-2 focus:ring-offset-2 text-sm md:text-base"
                        placeholder="Numer telefonu *"
                        name="audit_phone"
                        bind:value={inp_phone_data}
                        autocomplete="off" />
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <input
                        id="audit_email"
                        class="{inp_email_shaking ? 'animate-shake' : ''} {inp_email_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 h-input rounded-lg transition-shadow shadow-card lg:min-w-[400px] lg:max-w-[450px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-4 md:px-6 max-md:h-[45px] py-2 md:py-4 focus:ring-2 focus:ring-offset-2 text-sm md:text-base"
                        placeholder="Adres email *"
                        name="audit_email"
                        bind:value={inp_email_data}
                        autocomplete="off" />
                        <div><Button label="Dalej" theme="orange" onclick={sendForm} /></div>
                    </div>
                    <p class="text-[11px] text-primary-950 max-w-[500px]">Wypełniając formularz, zgadzasz się na przetwarzanie Twoich danych osobowych przez AdsHelp, w celu wysłania informacji o usługach, audycie zgodnie z polityką prywatności.</p>
                    <div class="flex flex-row flex-wrap gap-1 -mb-2 md:-mb-4">
                        {#if inp_name_error}<p class="text-[14px] text-primary-600" transition:fade>Pole imię i nazwisko musi zawierać conajmniej 3 znaki.</p>{/if}
                        {#if inp_phone_error}<p class="text-[14px] text-primary-600" transition:fade>Wpisz prawidłowy numer telefonu.</p>{/if}
                        {#if inp_email_error}<p class="text-[14px] text-primary-600" transition:fade>Wpisz prawidłowy adres email.</p>{/if}
                        {#if success}<p class="text-[14px] text-green-800" transition:fade>Gratulacje!</p>{/if}
                    </div>
                </div>
            {/if}
            {#if activeTab === 3}
                <h2 class="text-2xl-bold font-display mt-12" in:fly={{ y: 10, delay: 1000 }} out:fade>Gratulacje, oczekuj na audyt!</h2>
            {/if}
            </form>
            {#if success === false}
            <div class="flex flex-row gap-3 md:gap-3.5 mt-5 md:mt-7">
                <p class="text-sm md:text-base-bold {activeTab === 1 ? 'text-primary-950 border-orange-600 border-b-3' : 'border-b-2 border-stone-500 text-stone-500'} pb-1 md:pb-1.5 border-solid  hover:cursor-pointer" onclick={setNextTab}>Krok 1</p>
                <p class="text-sm md:text-base-bold {activeTab === 2 ? 'text-primary-950 border-orange-600 border-b-3' : 'border-b-2 border-stone-500 text-stone-500'} pb-1 md:pb-1.5 hover:cursor-pointer hover:border-b-3 transition-all" onclick={setNextTab}>Krok 2</p>
            </div>
            {/if}
        </div>
        <div class="col-span-1 order-1 lg:order-2">
            <img src={header} alt="Image of header with bunch of graphics showing products and excited woman holding phone" class="w-full flex" />
        </div>
    </div>
</header>


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
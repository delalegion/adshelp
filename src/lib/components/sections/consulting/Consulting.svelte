<script>
    // Video
    import consult from '$lib/assets/consulting.webm';
    import consultImage from '$lib/assets/webp/consult-image.webp?enhanced';

    import { enhance } from '$app/forms';

    // Components
    import Button from '$lib/components/Button.svelte';
    import { fade, fly } from 'svelte/transition';

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
            inp_account_name = document.querySelector("#cns_audit_account_name").value;
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
            inp_name = document.querySelector("#cns_audit_name").value;
            inp_phone = document.querySelector("#cns_audit_phone").value;
            inp_email = document.querySelector("#cns_audit_email").value;
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
            let form = document.querySelector("#cns_audit-header-form");
            form.requestSubmit();
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
    }
</script>

<section id="consulting" class="bg-primary-950 flex justify-center overflow-hidden relative">

    <svg width="100%" viewBox="0 0 1920 69" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-0.5 w-full left-0 right-0 z-10">
        <path d="M0 0H1920V7.5L0 69V0Z" fill="#FAFAF9"/>
    </svg>       

    <div class="max-w-[1920px] w-full z-0">
        <div class="grid grid-cols-2">
            <div class="col-span-2 min-[992px]:col-span-1 ml-6 sm:ml-16 md:ml-28 lg:ml-32 xl:ml-46 py-12 sm:py-16 md:py-28 lg:py-36 xl:py-48 mr-12">
                <h2 class="text-3xl-bold md:text-4xl-bold xl:text-5xl-bold font-display text-primary-500">Najważniejsza jest<br/> jakość, nie ilość</h2>
                <p class="text-md xl:text-xl text-primary-500 mt-7">Z tego powodu, w celu dbania o jakość naszej współpracy,<br class="max-2xl:hidden"/> liczba miejsc jest ograniczona. Zostało mi 7 wolnych miejsc!</p>
                <div class="flex flex-row gap-3 mt-6 md:mt-8 lg:mt-12 flex-wrap">
                    <Button label="Zacznijmy działać" theme="orange" href="#contact" />
                    <Button label="Powiadomienia o nowych dostępach" href="#contact" />
                </div>
            </div>
            <div class="col-span-2 min-[992px]:col-span-1">
                <div class="h-full max-sm:justify-center flex items-center z-20 relative">
                    <enhanced:img src={consultImage} alt="Image of two people on business meeting" class="absolute object-cover md:hidden w-full h-full top-0 bottom-0 left-0 right-0" />
                    <video autoplay muted loop class="absolute min-w-full min-h-full w-auto h-full object-cover max-md:hidden">
                        <source src={consult} type="video/webm">
                    </video>
                    <div class="max-sm:w-full md:my-12 py-5 sm:py-8 md:max-w-[450px] px-6 sm:px-9 rounded-2xl flex flex-col z-10 relative max-[992px]:my-8 mr-4 sm:mr-8 ml-4 sm:ml-8 lg:ml-16">
                        <div class="rounded-full bg-primary-600 flex items-center justify-center w-12 h-12 mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 14L11 16L15 12" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h5 class="text-xl-bold sm:text-2xl-bold font-display text-primary-950 mb-4">Zarezerwuj darmową <br/>współpracę na miesiąc!</h5>
                        <p class="text-sm sm:text-base text-primary-950 mb-6 sm:mb-7">Bez zobowiązań, całkowicie za darmo.</p>
          
                        <form method="POST" action="?/auditOnConsult" id="cns_audit-header-form" onsubmit={handleSubmit} use:enhance>
                            {#if activeTab === 1}
                                <div in:fly={{ y: 10 }} out:fade onoutroend={() => activeTab = 2}>
                                    <input
                                        id="cns_audit_account_name"
                                        class="{inp_account_name_shaking ? 'animate-shake' : ''} {inp_account_name_error ? 'border-[2px] border-primary-600' : ''} mb-3 sm:mb-4 md:min-w-[300px] flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card w-full lg:max-w-[400px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                        placeholder="Wpisz swoją nazwę Allegro"
                                        name="cns_audit_account_name"
                                        bind:value={inp_account_name}
                                        autocomplete="off"
                                        onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                    />
                                    {#if inp_account_name_error}<p class="text-[12px] mb-2 relative -top-2 text-primary-600" transition:fade>Powyższe pole nie może być puste. Wpisz co najmniej 3 znaki.</p>{/if}
                                    <div><Button label="Dalej" theme="orange" onclick={setNextTab} /></div>
                                </div>
                            {/if}
                            {#if activeTab === 2}
                            <input type="hidden" bind:value={inp_account_name_data} name="cns_audit_account_name_copy" id="cns_audit_account_name_copy" />
                            <div class="flex flex-col relative gap-3 transition-height duration-500 ease-in-out min-h-36" in:fly={{ y: 20 }} out:fly={{ y: -20, opacity: 0, duration: 500 }} onoutroend={() => success === true ? activeTab = 3 : activeTab = 1}>
                                <div class="flex flex-col gap-3">
                                    <input
                                    id="cns_audit_name"
                                    class="{inp_name_shaking ? 'animate-shake' : ''} {inp_name_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                    placeholder="Imię i nazwisko *"
                                    name="cns_audit_name"
                                    bind:value={inp_name_data}
                                    autocomplete="off"
                                    onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                    <input
                                    id="cns_audit_phone"
                                    class="{inp_phone_shaking ? 'animate-shake' : ''} {inp_phone_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                    placeholder="Numer telefonu *"
                                    name="cns_audit_phone"
                                    bind:value={inp_phone_data}
                                    autocomplete="off"
                                    onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                </div>
                                <div class="flex flex-col gap-3">
                                    <input
                                    id="cns_audit_email"
                                    class="{inp_email_shaking ? 'animate-shake' : ''} {inp_email_error ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                    placeholder="Adres email *"
                                    name="cns_audit_email"
                                    bind:value={inp_email_data}
                                    autocomplete="off"
                                    onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                    <div class="flex flex-row flex-wrap gap-1 -mb-1">
                                        {#if inp_name_error}<p class="text-[12px] text-primary-600" transition:fade>Pole imię i nazwisko musi zawierać conajmniej 3 znaki.</p>{/if}
                                        {#if inp_phone_error}<p class="text-[12px] text-primary-600" transition:fade>Wpisz prawidłowy numer telefonu.</p>{/if}
                                        {#if inp_email_error}<p class="text-[12px] text-primary-600" transition:fade>Wpisz prawidłowy adres email.</p>{/if}
                                        {#if success}<p class="text-[12px] text-green-800" transition:fade>Gratulacje!</p>{/if}
                                    </div>
                                    <div><Button label="Zamów audyt" theme="orange" onclick={sendForm} /></div>
                                </div>
                                <p class="text-[11px] text-primary-950 mb-1">Wypełniając formularz, zgadzasz się na przetwarzanie Twoich danych osobowych przez AdsHelp, w celu wysłania informacji o usługach, audycie zgodnie z polityką prywatności.</p>
                            </div>
                        {/if}
                        {#if activeTab === 3}
                            <div class="flex flex-row gap-4 items-center justify-center" in:fly={{ y: 10, delay: 1000 }} out:fade>
                                <div class="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] flex justify-center items-center bg-green-700 rounded-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <h2 class="text-lg-bold font-display text-primary-950">
                                    Dane do audytu wysłane. W razie pytań zapraszam do kontaktu.
                                </h2>
                            </div>
                        {/if}
                        </form>
                        {#if success === false}
                            <div class="flex flex-row gap-2 mt-6">
                                <div tabindex="0" role="button" onkeydown={setNextTab} onclick={setNextTab} class="{activeTab === 1 ? 'h-1 bg-primary-600' : 'h-0.5 bg-neutral-300'} w-8 hover:h-1 hover:cursor-pointer transition-all"></div>
                                <div tabindex="0" role="button" onkeydown={setNextTab} onclick={setNextTab} class="{activeTab === 2 ? 'h-1 bg-primary-600' : 'h-0.5 bg-neutral-300'} w-8 hover:h-1 hover:cursor-pointer transition-all"></div>
                            </div>
                        {/if}

                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-stone-50 backdrop-blur-sm -z-1 rounded-[14px]"></div>
                        <div class="absolute -top-1 -bottom-1 -left-1 -right-1 bg-stone-50/10 backdrop-blur-sm -z-10 rounded-[16px]"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
<script>
    import { enhance } from '$app/forms';

    // Images
    import contactBgFirst from '$lib/assets/footer-bg-1.png?enhanced';
    import contactBgSecond from '$lib/assets/footer-bg-2.png?enhanced';
    import phone from '$lib/assets/phone.png?enhanced';

    // Components
    import Button from '$lib/components/Button.svelte';
    import { formatPublishedAt } from '$lib/utils/dates.js';
    import Phone from "phosphor-svelte/lib/Phone";
    import { fade, fly } from 'svelte/transition';

    let { form, actionContact = '?/contact', action = '?/auditOnContact' } = $props();

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
            inp_account_name = document.querySelector("#msg_audit_account_name").value;
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
            inp_name = document.querySelector("#msg_audit_name").value;
            inp_phone = document.querySelector("#msg_audit_phone").value;
            inp_email = document.querySelector("#msg_audit_email").value;
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
            let form = document.querySelector("#msg_audit-header-form");
            form.requestSubmit();
        }

    }

    function handleSubmit(event) {
        event.preventDefault();

    }
</script>

<section id="contact" class="flex justify-center relative">
    <div class="max-w-[1920px] w-full z-0">
        <div class="grid grid-cols-3 min-lg:grid-cols-5 xl:grid-cols-4">
            <div class="col-span-3 min-lg:col-span-1">
                <div class="flex flex-row min-lg:flex-col h-[200px] min-lg:h-full">
                    <div class="flex-1"><enhanced:img src={contactBgFirst} alt="Graphic orange-brown texture" class="w-full h-full object-cover object-[25%_45%]" loading="lazy" /></div>
                    <div class="flex-2"><enhanced:img src={contactBgSecond} alt="Image of Adshelp CEO" class="w-full h-full object-cover" loading="lazy" /></div>
                    <div class="h-full relative max-lg:flex-2">
                        <div class="absolute h-full w-full bg-primary-950"></div>
                    </div>
                </div>
            </div>
            <div class="col-span-3 min-lg:col-span-4 xl:col-span-3 py-6 min-[500px]:py-8 lg:py-12 xl:py-16 2xl:py-20 px-6 min-[500px]:px-10 lg:px-14 xl:px-18 2xl:px-24 mr-0 2xl:mr-24">
                <enhanced:img src={phone} alt="Graphic icon of stats" class="sm:hidden mb-4" loading="lazy" />
                <h2 class="text-[24px] min-[500px]:text-[32px] min-[720px]:text-[3.4vw] min-lg:text-[2.8vw] xl:text-[2.3vw] 2xl:text-4xl-bold font-display text-primary-950">Czy chcesz, aby Twoje konto na Allegro <span class="md:hidden">przynosiło większe zyski? Napisz do mnie!</span></h2>
                <div class="flex md:items-center gap-3 relative -top-1 md:-top-3 max-md:hidden">
                    <h2 class="text-[24px] min-[720px:]:text-[3.4vw] min-lg:text-[2.8vw] xl:text-[2.3vw] 2xl:text-4xl-bold font-display text-primary-950">przynosiło większe zyski?</h2> <enhanced:img src={phone} alt="Graphic icon of 3D old phone" class="max-[900px]:w-[10vw] max-xl:w-[7vw]" /><h2 class="text-[24px] min-[720px:]:text-[3.4vw] min-[900px]:text-[2.8vw] xl:text-[2.3vw] 2xl:text-4xl-bold font-display text-primary-950">Napisz do mnie!</h2>
                </div>
                <div class="flex flex-row gap-4 items-center max-md:mt-4">
                    <h3 class="text-xl-bold md:text-2xl-bold font-display text-primary-950">Lub zadzwoń</h3>
                    <a class="border-[1px] border-stone-300 rounded-full p-1 md:pr-2 inline-flex items-center gap-2" href="tel:+48729924002">
                        <div class="h-10 md:h-12 w-10 md:w-12 bg-stone-200 rounded-full flex justify-center items-center"><Phone color="#410F09" weight="regular" size="24" /></div>
                        <p class="text-sm-bold text-primary-950 mr-2.5">+48 729 924 002</p>
                    </a>
                </div>

                <!-- Contact forms -->
                <div class="flex flex-col md:flex-row">
        
                    <form method="POST" action="{actionContact}" class="flex-[60%] bg-stone-50 max-md:rounded-t-2xl md:rounded-l-2xl p-6 xl:p-8 flex-col shadow-hover relative z-10 mt-8 sm:mt-10 lg:mt-14 w-full" use:enhance>
                        <div class="flex flex-col min-[1250px]:flex-row gap-3 min-[1250px]:gap-5">
                            <input
                                id="msg_name"
                                class="{form?.nameError ? 'animate-shake' : ''} {form?.nameError ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                placeholder="Imię *"
                                name="msg_name"
                            />
                            <input
                                id="msg_company"
                                class="{form?.companyError ? 'animate-shake' : ''} {form?.companyError ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                placeholder="Nazwa firmy albo nazwisko *"
                                name="msg_company"
                            />
                        </div>
                        <div class="flex flex-col min-[1250px]:flex-row gap-3 lg:gap-5 py-3 min-[1250px]:py-4">
                            <input
                                id="msg_email"
                                class="{form?.emailError ? 'animate-shake' : ''} {form?.emailError ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                placeholder="Adres e-mail *"
                                name="msg_email"
                                autocomplete="off"
                            />
                            <input
                                id="msg_phone"
                                class="{form?.phoneError ? 'animate-shake' : ''} {form?.phoneError ? 'border-[2px] border-primary-600' : ''} flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
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
                                <label id="msg_terms-label" class="text-sm font-base-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="msg_terms">Akceptuję politykę prywatności</label>
                            </div>
                        </div>
                        {#if form?.nameError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Imię</b> musi zawierać conajmniej 3 znaki.</p>{/if}
                        {#if form?.companyError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Nazwa firmy lub nazwisko</b> musi zawierać conajmniej 3 znaki.</p>{/if}
                        {#if form?.emailError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Email</b> musi zawierać prawidłowy adres email.</p>{/if}
                        {#if form?.phoneError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Numer telefonu</b> musi zawierać prawidłowy numer telefonu.</p>{/if}
                        {#if form?.messageError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Pole <b>Wiadomość</b> musi zawierać conajmniej 10 znaków.</p>{/if}
                        {#if form?.checkboxError}<p class="text-[12px] top-2 md:top-0 text-primary-600 pt-4" transition:fade>Wymagana <b>akceptacja</b> polityki prywatności.</p>{/if}
                        {#if form?.successContact}<p class="text-[12px] top-2 md:top-0 text-green-700 pt-4" transition:fade>Wiadomość wysłana. Skontaktuje się z tobą najszybciej jak to będzie możliwe. W razie pytań zapraszam do kontaktu telefonicznego: +48 729 924 002.</p>{/if}
                        <div class="mt-4 sm:mt-6"><Button label="Wyślij wiadomość" theme="orange" type="submit" /></div>
    
                        <div class="absolute top-0 right-0 bottom-0 left-0 max-md:rounded-t-[20px] md:rounded-l-[20px] bg-stone-50 -z-1"></div>
                        <div class="absolute -top-1 -right-1 -bottom-1 -left-1 max-md:rounded-t-[24px] md:rounded-l-[24px] bg-stone-700/10 backdrop-blur-sm -z-2"></div>
    
                    </form>
                    <div class="flex-[40%] py-6 lg:py-8 px-6 lg:px-9 max-md:rounded-b-2xl md:rounded-r-2xl flex-col z-10 relative shadow-hover bg-stone-50 md:mt-10 lg:mt-14">
                        <div class="max-md:gap-6">
                            <div class="rounded-full bg-primary-600 flex items-center justify-center max-w-12 max-h-12 min-w-12 min-h-12 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 14L11 16L15 12" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h5 class="text-xl-bold lg:text-2xl-bold font-display text-primary-950 mb-2 sm:mb-4">Zarezerwuj darmową <br/>współpracę na miesiąc!</h5>
                                <p class="text-sm lg:text-base text-primary-950 mb-6 sm:mb-7">Bez zobowiązań, całkowicie za darmo.</p>
                            </div>
                        </div>
                        <form method="POST" action="{action}" id="msg_audit-header-form" onsubmit={handleSubmit} use:enhance>
                        {#if activeTab === 1}
                            <div in:fly={{ y: 10 }} out:fade onoutroend={() => activeTab = 2}>
                                <input
                                    id="msg_audit_account_name"
                                    class="{inp_account_name_shaking ? 'animate-shake' : ''} {inp_account_name_error ? 'border-[2px] border-primary-600' : ''} mb-3 sm:mb-4 md:min-w-[300px] flex-1/2 lg:flex-1 rounded-lg transition-shadow shadow-card w-full lg:max-w-[400px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                    placeholder="Wpisz swoją nazwę Allegro"
                                    name="msg_audit_account_name"
                                    bind:value={inp_account_name}
                                    autocomplete="off"
                                    onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                />
                                {#if inp_account_name_error}<p class="text-[12px] mb-2 relative -top-2 text-primary-600" transition:fade>Powyższe pole nie może być puste. Wpisz co najmniej 3 znaki.</p>{/if}
                                <div><Button label="Dalej" theme="orange" onclick={setNextTab} /></div>
                            </div>
                        {/if}
                        {#if activeTab === 2}
                        <input type="hidden" bind:value={inp_account_name_data} name="msg_audit_account_name_copy" id="msg_audit_account_name_copy" />
                        <div class="flex flex-col relative gap-3 transition-height duration-500 ease-in-out min-h-36" in:fly={{ y: 20 }} out:fly={{ y: -20, opacity: 0, duration: 500 }} onoutroend={() => success === true ? activeTab = 3 : activeTab = 1}>
                            <div class="flex flex-col gap-3">
                                <input
                                id="msg_audit_name"
                                class="{inp_name_shaking ? 'animate-shake' : ''} {inp_name_error ? 'border-[2px] border-primary-600' : ''} rounded-lg transition-shadow shadow-card flex-1/2 lg:flex-1 lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                placeholder="Imię i nazwisko *"
                                name="msg_audit_name"
                                bind:value={inp_name_data}
                                autocomplete="off"
                                onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                <input
                                id="msg_audit_phone"
                                class="{inp_phone_shaking ? 'animate-shake' : ''} {inp_phone_error ? 'border-[2px] border-primary-600' : ''} rounded-lg transition-shadow shadow-card flex-1/2 lg:flex-1 lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                placeholder="Numer telefonu *"
                                name="msg_audit_phone"
                                bind:value={inp_phone_data}
                                autocomplete="off"
                                onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                            </div>
                            <div class="flex flex-col gap-3">
                                <input
                                id="msg_audit_email"
                                class="{inp_email_shaking ? 'animate-shake' : ''} {inp_email_error ? 'border-[2px] border-primary-600' : ''} rounded-lg transition-shadow shadow-card flex-1/2 lg:flex-1 lg:w-full lg:max-w-[400px] 2xl:min-w-[250px] flex bg-background focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-md:h-full max-md:max-h-[41px] h-full max-h-[49px] px-4 md:px-6 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                                placeholder="Adres e-mail *"
                                name="msg_audit_email"
                                bind:value={inp_email_data}
                                autocomplete="off"
                                onkeydown={async (e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                <div class="flex flex-row flex-wrap gap-1 -mb-1">
                                    {#if inp_name_error}<p class="text-[12px] text-primary-600" transition:fade>Pole imię i nazwisko musi zawierać conajmniej 3 znaki.</p>{/if}
                                    {#if inp_phone_error}<p class="text-[12px] text-primary-600" transition:fade>Wpisz prawidłowy numer telefonu.</p>{/if}
                                    {#if inp_email_error}<p class="text-[12px] text-primary-600" transition:fade>Wpisz prawidłowy adres email.</p>{/if}
                                    {#if success}
                                    <div class="flex flex-row gap-4 items-center mt-2" in:fly={{ y: 10, delay: 1000 }} out:fade>
                                        <div class="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] flex justify-center items-center bg-green-700 rounded-full">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6L9 17L4 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <h2 class="text-lg-bold font-display text-primary-950">
                                            Wiadomość wysłana. Postaram się odpowiedzieć jak najszybciej!
                                        </h2>
                                    </div>
                                    {/if}
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
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-stone-50 backdrop-blur-sm -z-1 max-md:rounded-b-[14px] md:rounded-r-[14px]"></div>
                        <div class="absolute -top-1 -bottom-1 -left-1 -right-1 bg-stone-700/10 backdrop-blur-sm -z-10 max-md:rounded-b-[16px] md:rounded-r-[16px]"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
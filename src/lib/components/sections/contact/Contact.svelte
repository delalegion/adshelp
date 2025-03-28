<script>
    // Images
    import contactBgFirst from '$lib/assets/footer-bg-1.png';
    import contactBgSecond from '$lib/assets/footer-bg-2.png';
    import phone from '$lib/assets/phone.png';

    // Components
    import Button from '$lib/components/Button.svelte';
    import { Checkbox, Label } from "bits-ui";
    import Check from "phosphor-svelte/lib/Check";
    import Phone from "phosphor-svelte/lib/Phone";
</script>

<section id="contact" class="flex justify-center relative">
    <div class="max-w-[1920px] w-full z-0">
        <div class="grid grid-cols-3 min-[900px]:grid-cols-5 xl:grid-cols-4">
            <div class="col-span-3 min-[900px]:col-span-1">
                <div class="flex flex-row min-[900px]:flex-col h-[200px] min-[900px]:h-full">
                    <div class="flex-1"><img src={contactBgFirst} alt="Graphic icon of stats" class="w-full h-full object-cover object-[25%_45%]" /></div>
                    <div class="flex-2"><img src={contactBgSecond} alt="Graphic icon of stats" class="w-full h-full object-cover" /></div>
                    <div class="h-full relative max-[900px]:flex-2">
                        <div class="absolute h-full w-full bg-primary-950"></div>
                    </div>
                </div>
            </div>
            <div class="col-span-3 min-[900px]:col-span-4 xl:col-span-3 py-6 min-[500px]:py-8 lg:py-12 xl:py-16 2xl:py-20 px-6 min-[500px]:px-10 lg:px-14 xl:px-18 2xl:px-24 mr-0 2xl:mr-24">
                <h2 class="text-[24px] min-[500px]:text-[32px] min-[720px]:text-[3.4vw] min-[900px]:text-[2.8vw] xl:text-[2.3vw] 2xl:text-4xl-bold font-display text-primary-950">Czy chcesz, aby Twoje konto na Allegro <span class="md:hidden">przynosiło większe zyski? Napisz do mnie!</span></h2>
                <div class="flex md:items-center gap-3 relative -top-1 md:-top-3 max-md:hidden">
                    <h2 class="text-[24px] min-[720px:]:text-[3.4vw] min-[900px]:text-[2.8vw] xl:text-[2.3vw] 2xl:text-4xl-bold font-display text-primary-950">przynosiło większe zyski?</h2> <img src={phone} alt="Graphic icon of stats" class="max-[900px]:w-[10vw] max-xl:w-[7vw]" /><h2 class="text-[24px] min-[720px:]:text-[3.4vw] min-[900px]:text-[2.8vw] xl:text-[2.3vw] 2xl:text-4xl-bold font-display text-primary-950">Napisz do mnie!</h2>
                </div>
                <div class="flex flex-row gap-4 items-center max-md:mt-4">
                    <h3 class="text-xl-bold md:text-2xl-bold font-display text-primary-950">Lub zadzwoń</h3>
                    <div class="border-[1px] border-stone-300 rounded-full p-1 inline-flex items-center gap-2">
                        <div class="h-9 md:h-12 w-9 md:w-12 bg-stone-200 rounded-full flex justify-center items-center"><Phone color="#410F09" weight="regular" size="24" /></div>
                        <p class="text-sm text-primary-950 mr-2.5">+48 123 123 123</p>
                    </div>
                </div>

                <!-- Contact forms -->
                <div class="flex flex-col md:flex-row">
                    <div class="flex bg-stone-50 max-md:rounded-t-2xl md:rounded-l-2xl p-6 lg:p-8 flex-col shadow-hover relative z-10 mt-10 lg:mt-14 w-full">

                        <div class="flex flex-col sm:flex-row gap-3 sm:gap-5">
                            <input
                                id="name"
                                class="h-input rounded-lg transition-shadow shadow-card w-full flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                                placeholder="Imię"
                                name="name"
                                autocomplete="off"
                            />
                            <input
                                id="company"
                                class="h-input rounded-lg transition-shadow shadow-card w-full flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                                placeholder="Nazwa firmy albo nazwisko"
                                name="company"
                                autocomplete="off"
                            />
                        </div>
                        <div class="flex flex-col sm:flex-row gap-3 sm:gap-5 py-3 sm:py-4">
                            <input
                                id="email"
                                class="h-input rounded-lg transition-shadow shadow-card w-full flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                                placeholder="Adres email"
                                name="email"
                                autocomplete="off"
                            />
                            <input
                                id="phone"
                                class="h-input rounded-lg transition-shadow shadow-card w-full flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                                placeholder="Numer telefonu"
                                name="phone"
                                autocomplete="off"
                            />
                        </div>
                        <textarea
                            id="message"
                            class="rounded-lg h-24 transition-shadow shadow-card flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                            placeholder="Treść wiadomości"
                            name="message"
                            autocomplete="off"></textarea>
    
                        <div class="flex items-center space-x-3 mt-4">
                            <Checkbox.Root
                                id="terms"
                                aria-labelledby="terms-label"
                                class="shadow-card hover:cursor-pointer bg-primary-600 data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-foreground data-[state=unchecked]:hover:border-2 peer inline-flex size-[25px] items-center justify-center rounded-md border transition-all duration-100 ease-in-out active:scale-[0.98]"
                                name="hello"
                            >
                            <Check color="#ffffff" weight="bold" />                    
                            </Checkbox.Root>
                            <Label.Root
                                id="terms-label"
                                for="terms"
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Akceptuję politykę prywatności
                            </Label.Root>
                        </div>
    
                        <div class="mt-6"><Button label="Wyślij wiadomość" theme="orange" /></div>
    
                        <div class="absolute top-0 right-0 bottom-0 left-0 max-md:rounded-t-[20px] md:rounded-l-[20px] bg-stone-50 -z-1"></div>
                        <div class="absolute -top-1 -right-1 -bottom-1 -left-1 max-md:rounded-t-[24px] md:rounded-l-[24px] bg-stone-700/10 backdrop-blur-sm -z-2"></div>
    
                    </div>
                    <div class="py-6 lg:py-8 px-6 lg:px-9 max-md:rounded-b-2xl md:rounded-r-2xl flex flex-col z-10 relative shadow-hover bg-stone-50 md:mt-10 lg:mt-14">
                        <div class="max-md:flex-row max-md:flex max-md:gap-6">
                            <div class="rounded-full bg-primary-600 flex items-center justify-center max-w-12 max-h-12 min-w-12 min-h-12 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 14L11 16L15 12" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h5 class="text-xl-bold lg:text-2xl-bold font-display text-primary-950 mb-2 sm:mb-4">Zamów konsultację ze<br/> specjalistą</h5>
                                <p class="text-sm lg:text-base text-primary-950 mb-7">Bez zobowiązań, całkowicie za darmo.</p>
                            </div>
                        </div>
                        <input
                            id="apiKey"
                            class="mb-4 h-input rounded-lg transition-shadow shadow-card w-full md:w-[220px] min-[1090px]:w-[280px] xl:min-w-[350px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                            placeholder="Wpisz swoją nazwę Allegro"
                            name="allegro-name"
                            autocomplete="off"
                        />
                        <div><Button label="Zamów audyt" theme="orange" /></div>
                        <div class="flex flex-row gap-2 mt-6">
                            <div class="w-8 h-0.5 bg-primary-600"></div>
                            <div class="w-8 h-0.5 bg-neutral-300"></div>
                        </div>
    
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-stone-50 backdrop-blur-sm -z-1 max-md:rounded-b-[14px] md:rounded-r-[14px]"></div>
                        <div class="absolute -top-1 -bottom-1 -left-1 -right-1 bg-stone-700/10 backdrop-blur-sm -z-10 max-md:rounded-b-[16px] md:rounded-r-[16px]"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
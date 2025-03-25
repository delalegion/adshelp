<script>
    // Components
    import Button from '$lib/components/Button.svelte';

    // Video
    import consult from '$lib/assets/consulting.webm';
</script>

<section id="consulting" class="bg-primary-950 flex justify-center overflow-hidden relative">

    <svg width="100%" viewBox="0 0 1920 69" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-0.5 w-full left-0 right-0 z-10">
        <path d="M0 0H1920V7.5L0 69V0Z" fill="#FAFAF9"/>
    </svg>       

    <div class="max-w-[1920px] w-full z-0">
        <div class="grid grid-cols-2">
            <div class="col-span-1 ml-46 py-48 mr-12">
                <h2 class="text-5xl-bold font-display text-primary-500">Najważniejsza jest<br/> jakość, nie ilość</h2>
                <p class="text-xl text-primary-500 mt-7">Z tego powodu, w celu dbania o jakość naszej współpracy,<br/> liczba miejsc jest ograniczona. Zostało mi 7 wolnych miejsc!</p>
                <div class="flex flex-row gap-3 mt-12">
                    <Button label="Zacznijmy działać" theme="orange" />
                    <Button label="Powiadomienia o nowych dostępach" />
                </div>
            </div>
            <div class="col-span-1">
                <div class="relative -z-10">
                    <video autoplay muted loop class="absolute min-w-full min-h-full w-auto h-auto object-cover">
                        <source src={consult} type="video/webm">
                    </video>
                </div>
                <div class="h-full flex items-center ml-16">
                    <div class="py-8 px-9 rounded-2xl flex flex-col z-10 relative">
                        <div class="rounded-full bg-primary-600 flex items-center justify-center w-12 h-12 mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 14L11 16L15 12" stroke="#FEE9D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h5 class="text-2xl-bold font-display text-primary-950 mb-4">Zamów konsultację ze<br/> specjalistą</h5>
                        <p class="text-base text-primary-950 mb-7">Bez zobowiązań, całkowicie za darmo.</p>
                        <input
                            id="apiKey"
                            class="mb-4 h-input rounded-lg transition-shadow shadow-card min-w-[350px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                            placeholder="Wpisz swoją nazwę Allegro"
                            name="allegro-name"
                            autocomplete="off"
                        />
                        <div><Button label="Zamów audyt" theme="orange" /></div>
                        <div class="flex flex-row gap-2 mt-6">
                            <div class="w-8 h-0.5 bg-primary-600"></div>
                            <div class="w-8 h-0.5 bg-neutral-300"></div>
                        </div>

                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-stone-50 backdrop-blur-sm -z-1 rounded-[14px]"></div>
                        <div class="absolute -top-1 -bottom-1 -left-1 -right-1 bg-stone-50/10 backdrop-blur-sm -z-10 rounded-[16px]"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
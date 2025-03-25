<script>
    // Images
    import avatar from '$lib/assets/avatar.png';
    import aboutBackground from '$lib/assets/about-bg.png';
    import logoWhite from '$lib/assets/logo-white.svg';
    import tick from '$lib/assets/tick.svg';
    import tickFalse from '$lib/assets/tick-false.svg';
    
    // Components
    import Button from '$lib/components/Button.svelte';
</script>

<section id="about" class="bg-primary-950 py-32 border-t border-[#561C15] flex justify-center relative z-10">
    <div class="container">
        <div class="grid grid-cols-3">
            <div class="col-span-1">
                <img src={avatar} alt="Pictures of CEO Marcin Lubera" class="max-w-[196px]" />
                <div class="flex flex-col mt-8">
                    <p class="text-sm-bold text-primary-500">CEO & FOUNDER</p>
                    <h5 class="text-3xl-bold font-display text-primary-100">MARCIN LUBERA</h5>

                    <p class="font-display text-xl-bold text-primary-100 mt-14">Ekspert z bogatym portfolio kampanii Allegro Ads. Jego ogromne doświadczenie i indywidualne podejście do każdego klienta zapewniają skuteczność, której nie oferują masowe agencje.</p>
                    <div class="flex flex-row gap-4 mt-8">
                        <Button label="Kontakt do mnie" theme="orange" />
                        <Button label="Zamów audyt" />
                    </div>
                </div>
            </div>
            <div class="col-span-2 flex flex-col gap-14 items-center">
                <h4 class="text-3xl-bold font-display text-primary-100 text-center">Czym się wyróżniam na tle<br /> dużych agencji?</h4>
                <div class="flex flex-row max-w-2/3">

                    <div class="flex flex-col gap-8">
                        <img src={logoWhite} alt="Logo" class=" h-10" />
                        <div class="flex flex-col bg-[#2E0C08] py-3 pl-4 gap-2 border-2 border-primary-500 rounded-l-2xl rounded-br-2xl">
                            <div class="flex flex-row px-2 py-3 items-center">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100 mr-4">Czas w pełni poświęcony klientowi.<br />Otrzymujesz tyle czasu, ile potrzebujesz</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-l-md items-center">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">W pełni indywidualne podejście<br/>do klienta</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Wysoki poziom zaangażowania<br />i relacja z klientem</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-l-md items-center">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Elastyczność i personalizacja<br />usług</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Niski koszt usług</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-l-md items-center">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Masowa obsługa klientów</span>
                            </div>

                            <Button label="Kontakt do mnie" theme="orange" classes="flex-1 flex mt-4 mb-2 mr-4" />
                        </div>
                    </div>
                    <div class="flex flex-col gap-10 items-center">
                        <h5 class="text-2xl-bold font-display text-primary-100">Agencje</h5>
                        <div class="flex flex-col bg-[#4E1B15] py-3 pr-3 gap-2 border-2 border-primary-50/5 rounded-r-xl">
                            <div class="flex flex-row px-2 py-3 items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Sztywno ustawiony przedział<br/> czasu tygodniowo</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Brak indywidualnego podejścia –<br />sztywność, masowość, schematyczność</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Zformalizowany proces komunikacji oraz<br/> brak bezpośredniej relacji ze specjalistami</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Sztywno ustandaryzowane pakiety<br /> usług i procesów</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Wysoki koszt usług</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-6">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Masowa obsługa klientów</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="absolute right-0 bottom-0 -z-10">
        <img src={aboutBackground} alt="Graphic icon of stats" class="" />
    </div>
</section>
<script>
    import { fade, fly } from "svelte/transition"

    // Images
    import avatar from '$lib/assets/avatar.png?enhanced';
    import aboutBackground from '$lib/assets/about-bg.png?enhanced';
    import logoWhite from '$lib/assets/logo-white.svg';
    import tick from '$lib/assets/tick.svg';
    import tickFalse from '$lib/assets/tick-false.svg';
    import logo from '$lib/assets/logo-white.svg';
    
    // Components
    import Button from '$lib/components/Button.svelte';

    let activeTab = $state(1);
</script>

<section id="about" class="bg-primary-950 py-10 md:py-18 lg:py-32 border-t border-[#561C15] flex justify-center relative z-10 px-4 lg:px-10">
    <div class="container">
        <div class="grid grid-cols-2 lg:grid-cols-3">
            <div class="col-span-2 lg:col-span-1 max-sm:flex-col max-lg:flex-row max-lg:flex max-lg:items-start gap-0 sm:gap-6" itemscope itemtype="https://schema.org/Person">
                <enhanced:img src={avatar} alt="Pictures of CEO Marcin Lubera" class="max-w-[104px] sm:max-w-[140px] md:max-w-[196px]" loading="lazy" itemprop="image" />
                <div class="flex flex-col mt-4 lg:mt-8">
                    <p class="text-sm-bold text-primary-500" itemprop="jobTitle">CEO & FOUNDER</p>
                    <h5 class="text-2xl-bold md:text-3xl-bold font-display text-primary-100" itemprop="name">MARCIN LUBERA</h5>

                    <p class="font-display text-lg-bold xl:text-xl-bold text-primary-100 mt-4 md:mt-6 lg:mt-14" itemprop="description">Ekspert z bogatym portfolio kampanii Allegro Ads. Jego ogromne doświadczenie i indywidualne podejście do każdego klienta zapewniają skuteczność, której nie oferują masowe agencje.</p>
                    
                    <!-- Person's professional details -->
                    <div style="display: none;">
                        <span itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
                            <span itemprop="name">Marcin Lubera AdsHelp</span>
                        </span>
                        <span itemprop="hasOccupation" itemscope itemtype="https://schema.org/Occupation">
                            <span itemprop="name">Allegro Ads Marketing Expert</span>
                            <span itemprop="description">Ekspert ds. marketingu na platformie Allegro, odpowiedzialny za kampanie i analizy sprzedaży.</span>
                            <span itemprop="estimatedSalary" itemscope itemtype="https://schema.org/MonetaryAmount">
                              <meta itemprop="currency" content="PLN" />
                              <meta itemprop="value" content="10000" />
                            </span>
                            <span itemprop="occupationLocation" itemscope itemtype="https://schema.org/AdministrativeArea">
                              <span itemprop="name">Poland</span>
                            </span>
                        </span>
                    </div>

                    <!-- Organization context -->
                    <div itemprop="worksFor" itemscope itemtype="https://schema.org/Organization" style="display: none;">
                        <span itemprop="name">AdsHelp</span>
                        <span itemprop="url">https://www.adshelp.pl</span>
                        <span itemprop="description">Agencja reklamowa specjalizująca się w Allegro Ads. Profesjonalne zarządzanie reklamami Allegro Ads. Bezpłatny pierwszy miesiąc współpracy!</span>
                    </div>

                    <!-- Expertise/Skills -->
                    <div style="display: none;">
                        <span itemprop="knowsAbout">Allegro Ads</span>
                        <span itemprop="knowsAbout">Allegro Marketing</span>
                        <span itemprop="knowsAbout">Google Ads</span>
                        <span itemprop="knowsAbout">PPC Marketing</span>
                        <span itemprop="knowsAbout">E-commerce Marketing</span>
                        <span itemprop="knowsAbout">Digital Marketing Strategy</span>
                        <span itemprop="knowsAbout">Optymalizacja ROI</span>
                    </div>
                        
                    <div class="flex flex-row flex-wrap gap-2 xl:gap-4 mt-6 lg:mt-8">
                        <Button label="Kontakt do mnie" theme="orange" href="#contact" itemprop="contactPoint" />
                        <Button label="Zamów audyt" href="#consulting" />
                    </div>
                </div>
            </div>
            <!-- Desktop -->
            <div class="col-span-2 flex flex-col gap-10 lg:gap-14 items-center lg:items-end xl:items-center max-lg:mt-12 max-md:hidden" itemscope itemtype="https://schema.org/Table">
                <h4 class="text-2xl-bold lg:text-3xl-bold font-display text-primary-100 text-center w-full" itemprop="name">Czym się wyróżniam na tle<br /> dużych agencji?</h4>
                <div class="flex flex-row max-w-full xl:max-w-4/5 2xl:max-w-2/3" itemscope itemtype="https://schema.org/ComparisonTable">
                    <!-- Adshelp Column -->
                    <div class="flex flex-col gap-8">
                        <img src={logoWhite} alt="Logo of company Adshelp" class="h-10" itemprop="logo" />
                        <div class="flex flex-col bg-primary-dark py-3 pl-4 gap-2 border-2 border-primary-500 rounded-l-2xl rounded-br-2xl">
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

                            <Button label="Kontakt do mnie" theme="orange" classes="flex-1 flex mt-4 mb-1 mr-4" href="#contact" />
                        </div>
                    </div>
                    <div class="flex flex-col gap-10 items-center">
                        <h5 class="text-2xl-bold font-display text-primary-100">Agencje</h5>
                        <div class="flex flex-col bg-[#4E1B15] py-3 pr-3 gap-2 border-2 border-primary-50/5 rounded-r-xl">
                            <div class="flex flex-row px-2 py-3 items-center pl-4">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Sztywno ustawiony przedział<br/> czasu tygodniowo</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-4">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Brak indywidualnego podejścia –<br />sztywność, masowość, schematyczność</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center pl-4">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Zformalizowany proces komunikacji oraz<br/> brak bezpośredniej relacji ze specjalistami</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-4">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Sztywno ustandaryzowane pakiety<br /> usług i procesów</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center pl-4">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Wysoki koszt usług</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-4">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Masowa obsługa klientów</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Mobile -->
            <div class="col-span-2 flex flex-col md:hidden mt-14" itemscope itemtype="https://schema.org/Table">
                <h4 class="text-2xl-bold font-display text-primary-100 text-center w-full mb-8" itemprop="name">Czym się wyróżniam na tle<br /> dużych agencji?</h4>
                <div class="flex flex-row gap-2 sm:gap-4" itemscope itemtype="https://schema.org/ComparisonTable">
                    <div tabindex="0" role="button" onclick={() => activeTab = 0} onkeydown={() => activeTab = 0} class="py-2 flex-1 border-x-2 border-t-2 {activeTab === 1 ? 'border-orange-500' : 'border-[#532721]'} transiiton-all duration-300 flex bg-primary-dark justify-center text-primary-50 rounded-t-2xl">
                        <img src={logo} alt="Logo" class="pl-4 pr-4" itemprop="logo" />
                    </div>
                    <div tabindex="0" role="button" onclick={() => activeTab = 0} onkeydown={() => activeTab = 0} class="py-4 flex-1 border-x-2 border-t-2 border-[#532721] bg-primary-dark text-center text-primary-50 rounded-t-2xl text-2xl-bold font-display">
                        Agencje
                    </div>
                </div>
                <div class="p-4 rounded-b-2xl border-2 {activeTab === 1 ? 'border-orange-500' : 'border-[#532721]'} bg-primary-dark transiiton-all duration-300">
                    {#if activeTab === 1}
                    <div class="flex flex-col" in:fly={{ y: -30, opacity: 0, duration: 200 }} out:fade={{ duration: 400 }} onoutroend={() => activeTab = 2}>
                        <div class="flex flex-row px-2 py-3 items-center">
                            <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100 mr-4">Czas w pełni poświęcony klientowi. Otrzymujesz tyle czasu, ile potrzebujesz</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-md items-center">
                            <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">W pełni indywidualne podejście do klienta</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 items-center">
                            <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Wysoki poziom zaangażowania i relacja z klientem</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-md items-center">
                            <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Elastyczność i personalizacja usług</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 items-center">
                            <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Niski koszt usług</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-md items-center">
                            <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Masowa obsługa klientów</span>
                        </div>

                        <Button label="Kontakt do mnie" theme="orange" classes="flex-1 flex mt-4 mr-4 w-full" href="#contact" />
                    </div>
                    {/if}
                    {#if activeTab === 2}
                    <div class="flex flex-col" in:fly={{ y: -30, opacity: 0, duration: 200 }} out:fade={{ duration: 400 }} onoutroend={() => activeTab = 1}>
                        <div class="flex flex-row px-2 py-3 items-center">
                            <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Sztywno ustawiony przedział czasu tygodniowo</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-md items-center">
                            <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Brak indywidualnego podejścia – sztywność, masowość, schematyczność</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 items-center">
                            <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Zformalizowany proces komunikacji oraz brak bezpośredniej relacji ze specjalistami</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-md items-center">
                            <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Sztywno ustandaryzowane pakiety usług i procesów</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 items-center">
                            <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Wysoki koszt usług</span>
                        </div>
                        <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-md items-center">
                            <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                            <span class="text-xs text-primary-100">Masowa obsługa klientów</span>
                        </div>
                    </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <div class="absolute right-0 bottom-0 -z-10">
        <enhanced:img src={aboutBackground} alt="Graphic icon of stats" />
    </div>
</section>
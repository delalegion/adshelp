<script>
    // Images
    import tick from '$lib/assets/tick.svg';
    import tickFalse from '$lib/assets/tick-false.svg';
    import heart from '$lib/assets/heart.svg';
    import heartDark from '$lib/assets/heart-dark.svg';
    import pricingFirst from '$lib/assets/pricing-1.png?enhanced';
    import pricingSecond from '$lib/assets/pricing-2.png?enhanced';
    import pricingThird from '$lib/assets/pricing-3.png?enhanced';

    // Components
    import Button from '$lib/components/Button.svelte';

    let activeTab = $state(1);
    let tabs = [
        [true, true, true, false, false, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, true, true]
    ]
    let tabsNames = [
        "Pomoc przy obsłudze reklam", "Obsługa i kontrola produktów", "Analiza strategii marki", "Analiza stanów magazynowych", "Rozwijanie marki i konta Allegro", "Zarządzanie zespołem firmy", "Obsługa detaliczna i hurtowa produktów"
    ]


</script>

<section id="pricing" class="flex justify-center relative pb-12 sm:pb-24 md:pb-32 pt-12 bg-white">
    <div class="lg:container lg:px-6 xl:px-12 2xl:px-24 max-lg:w-full">
        <h2 class="text-2xl-bold md:text-4xl-bold xl:text-5xl-bold text-primary-950 font-display pb-4 xl:pb-8 px-6 text-left sm:text-center">Pakiety współpracy</h2>

        <!-- Dekstop -->
        <div class="max-lg:overflow-scroll flex flex-col justify-center px-12 relative max-md:hidden">
            <div class="grid grid-cols-4 gap-6 mt-12 xl:mt-18 max-lg:w-[1000px]">
                <div class="col-span-1"></div>
                <div class="col-span-1 flex items-end">
                    <div class="p-5 xl:p-7 rounded-2xl bg-stone-50 h-80 flex flex-col justify-between">
                        <div class="gap-3 flex flex-col">
                            <div class="flex flex-row gap-2 items-center">
                                <div class="flex xl:justify-center items-center w-[82px] h-[50px] xl:h-[70px] z-20">
                                    <enhanced:img src={pricingFirst} alt="Graphic image of 3D magnifier" class="max-xl:w-3/4" />
                                </div>
                                <h5 class="text-xl-bold xl:text-2xl-bold font-display text-primary-600 relative -left-[40px] xl:-left-[20px] -top-[2px] z-10">Specjalista</h5>
                            </div>
                            <p class="text-xs text-primary-950">Pakiet idealny do przetestowania moich usług.</p>
                        </div>
                        <div class="relative mt-auto mb-3">
                            <div class="px-3 py-2 rounded-md bg-primary-100 text-primary-600 flex flex-row gap-3 justify-center text-xs items-center">
                                <img src={heart} alt="Heart icon" class="drop-shadow-xl" />
                                Pierwszy darmowy miesiąc</div>
                        </div>
                        <Button label="Napisz do mnie" theme="orange" href="#contact" />
                    </div>
                </div>
                <div class="col-span-1 flex flex-col items-center">
                    <div class="px-3 xl:px-5 py-2 bg-primary-600 w-4/5 rounded-t-xl text-primary-50 text-xs-bold xl:text-sm-bold justify-center flex flex-row gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="#FFF5ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.477 12.8901L17 22.0001L12 19.0001L7 22.0001L8.523 12.8901" stroke="#FFF5ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Najchętniej wybierany
                    </div>
                    <div class="p-5 xl:p-7 rounded-2xl bg-white h-80 flex flex-col justify-between border-4 border-primary-600 shadow-hover">
                        <div class="gap-3 flex flex-col">
                            <div class="flex flex-row gap-2 items-center">
                                <div class="flex xl:justify-center items-center w-[60px] xl:w-[82px] h-[50px] xl:h-[70px]">
                                    <enhanced:img src={pricingSecond} alt="Graphic image of 3D notepad" />
                                </div>
                                <h5 class="text-xl-bold xl:text-2xl-bold font-display text-primary-600">Manager</h5>
                            </div>
                            <p class="text-xs text-primary-950">Zaufałeś moim umiejętnościom i chcesz rozwinąć swoją firmę jeszcze bardziej!</p>
                        </div>
                        <div class="relative mt-auto mb-3">
                            <div class="px-3 py-2 rounded-md bg-primary-100 text-primary-600 flex flex-row gap-3 justify-center text-xs items-center">
                                <img src={heart} alt="Heart icon" class="drop-shadow-xl" />
                                Pierwszy darmowy miesiąc</div>
                        </div>
                        <Button label="Napisz do mnie" theme="orange" href="#contact" />
                    </div>
                </div>
                <div class="col-span-1 flex flex-col items-center">
                    <div class="px-3 py-2 bg-primary-950 w-4/5 rounded-t-xl text-primary-50 text-xs-bold xl:text-sm-bold justify-center flex flex-row gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0045 5.97223 15.9879C5.43516 15.9712 4.91088 16.1536 4.5 16.4998Z" stroke="#F36020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 14.9998L9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998C14.7369 13.7985 13.3968 14.4685 12 14.9998Z" stroke="#F36020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 12H4C4 12 4.55 8.97002 6 8.00002C7.62 6.92002 11 8.00002 11 8.00002" stroke="#F36020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13" stroke="#F36020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        Najkorzystniejszy wybór</div>
                    <div class="p-5 xl:p-7 rounded-2xl bg-primary-950 h-80 flex flex-col justify-between">
                        <div class="gap-3 flex flex-col">
                            <div class="flex flex-row gap-3 items-center">
                                <div class="flex xl:justify-center items-center w-[60px] xl:w-[82px] h-[50px] xl:h-[70px]">
                                    <enhanced:img src={pricingThird} alt="Graphic image of 3D crown" />
                                </div>
                                <h5 class="text-xl-bold xl:text-2xl-bold font-display text-primary-500">Dyrektor</h5>
                            </div>
                            <p class="text-xs text-primary-50">Wiesz, że moje umiejętności rozwiną Twoją firmę do granic możliwości!</p>
                        </div>
                        <div class="relative mt-auto mb-3">
                            <div class="px-3 py-2 rounded-md bg-primary-900 text-primary-50 flex flex-row gap-3 justify-center text-xs items-center">
                                <img src={heartDark} alt="Heart icon" class="drop-shadow-xl" />
                                Pierwszy darmowy miesiąc</div>
                        </div>
                        <Button label="Napisz do mnie" type="orange" href="#contact" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 mt-4 max-lg:w-[1000px]">
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-l-2 rounded-l-xl border-neutral-200 h-16 items-center flex">
                        <p class="text-sm text-primary-950 ml-4">Pomoc przy obsłudze reklam</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tick} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tick} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-r-2 rounded-r-xl border-neutral-200 justify-center items-center h-16 flex">
                        <img src={tick} alt="Graphic icon of stats" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 mt-2 max-lg:w-[1000px]">
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-l-2 rounded-l-xl border-neutral-200 h-16 items-center flex">
                        <p class="text-sm text-primary-950 ml-4">Obsługa i kontrola produktów</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tick} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tick} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-r-2 rounded-r-xl border-neutral-200 justify-center items-center h-16 flex">
                        <img src={tick} alt="Graphic icon of stats" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 mt-2 max-lg:w-[1000px]">
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-l-2 rounded-l-xl border-neutral-200 h-16 items-center flex">
                        <p class="text-sm text-primary-950 ml-4">Analiza strategii marki</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tick} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tick} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-r-2 rounded-r-xl border-neutral-200 justify-center items-center h-16 flex">
                        <img src={tick} alt="Graphic icon of stats" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 mt-2 max-lg:w-[1000px]">
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-l-2 rounded-l-xl border-neutral-200 h-16 items-center flex">
                        <p class="text-sm text-primary-950 ml-4">Analiza stanów magazynowych</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tickFalse} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tick} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-r-2 rounded-r-xl border-neutral-200 justify-center items-center h-16 flex">
                        <img src={tick} alt="Graphic icon of stats" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 mt-2 max-lg:w-[1000px]">
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-l-2 rounded-l-xl border-neutral-200 h-16 items-center flex">
                        <p class="text-sm text-primary-950 ml-4">Rozwijanie marki i konta Allegro</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tickFalse} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tick} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-r-2 rounded-r-xl border-neutral-200 justify-center items-center h-16 flex">
                        <img src={tick} alt="Graphic icon of stats" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 mt-2 max-lg:w-[1000px]">
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-l-2 rounded-l-xl border-neutral-200 h-16 items-center flex">
                        <p class="text-sm text-primary-950 ml-4">Zarządzanie zespołem firmy</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tickFalse} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tickFalse} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-r-2 rounded-r-xl border-neutral-200 justify-center items-center h-16 flex">
                        <img src={tick} alt="Graphic icon of stats" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 mt-2 max-lg:w-[1000px]">
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-l-2 rounded-l-xl border-neutral-200 h-16 items-center flex">
                        <p class="text-sm text-primary-950 ml-4">Obsługa detaliczna i hurtowa produktów</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tickFalse} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-neutral-200 justify-between items-center h-16 flex">
                        <div class="h-1/2 bg-white w-0.5"></div>
                        <img src={tickFalse} alt="Graphic icon of stats" />
                        <div class="h-1/2 bg-neutral-200 w-0.5"></div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="border-t-2 border-b-2 border-r-2 rounded-r-xl border-neutral-200 justify-center items-center h-16 flex">
                        <img src={tick} alt="Graphic icon of stats" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="flex flex-col mx-6 mt-3 md:hidden">
            <div class="flex flex-row justify-between mb-4 z-10 sticky top-0 bg-white pt-4">
                <div tabindex="0" role="button" onkeydown={() => activeTab = 1} onclick={() => activeTab = 1} class="flex text-sm-bold min-[375px]:text-base-bold text-primary-950 pb-4 {activeTab === 1 ? 'border-primary-600' : 'border-transparent'} border-b-2 transition-all transition-300">Specjalista</div>
                <div tabindex="0" role="button" onkeydown={() => activeTab = 2} onclick={() => activeTab = 2} class="flex flex-row gap-1 text-sm-bold min-[375px]:text-base-bold text-primary-950 pb-4 {activeTab === 2 ? 'border-primary-600' : 'border-transparent'} border-b-2  transition-all transition-300">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14.4668C15.3137 14.4668 18 11.7805 18 8.4668C18 5.15309 15.3137 2.4668 12 2.4668C8.68629 2.4668 6 5.15309 6 8.4668C6 11.7805 8.68629 14.4668 12 14.4668Z" stroke="#E44412" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.477 13.3569L17 22.4669L12 19.4669L7 22.4669L8.523 13.3569" stroke="#E44412" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Manager</div>
                <div tabindex="0" role="button" onkeydown={() => activeTab = 3} onclick={() => activeTab = 3} class="flex flex-row gap-1 text-sm-bold min-[375px]:text-base-bold text-primary-950 pb-4 {activeTab === 3 ? 'border-primary-600' : 'border-transparent'} border-b-2  transition-all transition-300">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 16.9666C3 18.2266 2.5 21.9666 2.5 21.9666C2.5 21.9666 6.24 21.4666 7.5 19.9666C8.21 19.1266 8.2 17.8366 7.41 17.0566C7.02131 16.6856 6.50929 16.4713 5.97223 16.4547C5.43516 16.438 4.91088 16.6204 4.5 16.9666Z" stroke="#E44412" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15.4666L9 12.4666C9.53214 11.086 10.2022 9.76262 11 8.51656C12.1652 6.65354 13.7876 5.11961 15.713 4.06065C17.6384 3.00169 19.8027 2.45293 22 2.46656C22 5.18656 21.22 9.96656 16 13.4666C14.7369 14.2653 13.3968 14.9353 12 15.4666Z" stroke="#E44412" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12.4668H4C4 12.4668 4.55 9.43682 6 8.46682C7.62 7.38682 11 8.46682 11 8.46682" stroke="#E44412" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15.4668V20.4668C12 20.4668 15.03 19.9168 16 18.4668C17.08 16.8468 16 13.4668 16 13.4668" stroke="#E44412" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                        
                    Dyrektor
                </div>

                <div class="absolute w-full right-0 left-0 bottom-[0px] bg-neutral-200 h-[1px] -z-10"></div>
            </div>
            <div class="flex flex-col gap-2">

                {#each tabsNames as tab, tabIndex}
                    <div class="flex flex-row rounded-lg border-neutral-200 border-[1px] p-3 items-center">
                        <div class="flex-3 text-primary-950 text-sm">
                            {tab}
                        </div>
                        <div class="flex-1 flex justify-end">
                            <img src={tabs[activeTab-1][tabIndex] ? tick : tickFalse} alt="Graphic icon of stats" class="h-[24px]" />
                        </div>
                    </div>
                {/each}
                
            </div>
        </div>

    </div>
</section>
    
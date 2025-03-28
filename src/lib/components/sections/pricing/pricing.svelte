<script>
    // Images
    import tick from '$lib/assets/tick.svg';
    import tickFalse from '$lib/assets/tick-false.svg';
    import heart from '$lib/assets/heart.svg';
    import heartDark from '$lib/assets/heart-dark.svg';
    import pricingFirst from '$lib/assets/pricing-1.png';
    import pricingSecond from '$lib/assets/pricing-2.png';
    import pricingThird from '$lib/assets/pricing-3.png';

    // Components
    import Button from '$lib/components/Button.svelte';
</script>

<section id="pricing" class="flex justify-center relative pb-12 sm:pb-24 md:pb-32 pt-12 bg-white">
    <div class="lg:container lg:px-6 xl:px-12 2xl:px-24 max-lg:w-full">
        <h2 class="text-2xl-bold md:text-4xl-bold xl:text-5xl-bold text-primary-950 font-display pb-4 xl:pb-8 text-center">Pakiety współpracy</h2>

        <div class="max-lg:overflow-scroll flex flex-col justify-center px-12 relative">
        <div class="grid grid-cols-4 gap-6 mt-12 xl:mt-18 max-lg:w-[1000px]">
            <div class="col-span-1"></div>
            <div class="col-span-1 flex items-end">
                <div class="p-5 xl:p-7 rounded-2xl bg-stone-50 h-80 flex flex-col justify-between">
                    <div class="gap-3 flex flex-col">
                        <div class="flex flex-row gap-2 items-center">
                            <div class="flex xl:justify-center items-center w-[82px] h-[50px] xl:h-[70px] z-20">
                                <img src={pricingFirst} alt="Graphic icon of stats" class="w-3/4" />
                            </div>
                            <h5 class="text-xl-bold xl:text-2xl-bold font-display text-primary-600 relative -left-[40px] xl:-left-[20px] -top-[2px] z-10">Specjalista</h5>
                        </div>
                        <p class="text-xs text-primary-950">Pakiet idealny do przetestowania moich usług.</p>
                    </div>
                    <div class="relative mt-auto mb-3">
                        <div class="px-3 py-2 rounded-md bg-primary-100 text-primary-600 flex flex-row gap-3 justify-center text-xs items-center">
                            <img src={heart} alt="Graphic icon of stats" class="drop-shadow-xl" />
                            Pierwszy darmowy miesiąc</div>
                    </div>
                    <Button label="Napisz do mnie" theme="orange" />
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
                                <img src={pricingSecond} alt="Graphic icon of stats" />
                            </div>
                            <h5 class="text-xl-bold xl:text-2xl-bold font-display text-primary-600">Manager</h5>
                        </div>
                        <p class="text-xs text-primary-950">Zaufałeś moim umiejętnościom i chcesz rozwinąć swoją firmę jeszcze bardziej!</p>
                    </div>
                    <div class="relative mt-auto mb-3">
                        <div class="px-3 py-2 rounded-md bg-primary-100 text-primary-600 flex flex-row gap-3 justify-center text-xs items-center">
                            <img src={heart} alt="Graphic icon of stats" class="drop-shadow-xl" />
                            Pierwszy darmowy miesiąc</div>
                    </div>
                    <Button label="Napisz do mnie" theme="orange" />
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
                                <img src={pricingThird} alt="Graphic icon of stats" />
                            </div>
                            <h5 class="text-xl-bold xl:text-2xl-bold font-display text-primary-500">Dyrektor</h5>
                        </div>
                        <p class="text-xs text-primary-50">Wiesz, że moje umiejętności rozwiną Twoją firmę do granic możliwości!</p>
                    </div>
                    <div class="relative mt-auto mb-3">
                        <div class="px-3 py-2 rounded-md bg-primary-900 text-primary-50 flex flex-row gap-3 justify-center text-xs items-center">
                            <img src={heartDark} alt="Graphic icon of stats" class="drop-shadow-xl" />
                            Pierwszy darmowy miesiąc</div>
                    </div>
                    <Button label="Napisz do mnie" type="orange" />
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

    </div>
</section>
    
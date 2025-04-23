<script>
    // Images
    import journeyFirst from '$lib/assets/webp/journey-one-thumb.webp';
    import journeyFirstVideo from '$lib/assets/step-one.mp4';
    import journeySecond from '$lib/assets/webp/journey-two-thumb.webp';
    import journeySecondVideo from '$lib/assets/step-three.mp4';
    import journeyThird from '$lib/assets/webp/journey-third-thumb.webp';
    import journeyThirdVideo from '$lib/assets/step-two.mp4';
    import journeyFirstIconFirst from '$lib/assets/journey-1-icon-1.svg';
    import journeyFirstIconSecond from '$lib/assets/journey-1-icon-2.svg';
    import journeySecondIconFirst from '$lib/assets/journey-2-icon-1.svg';
    import journeySecondIconSecond from '$lib/assets/journey-2-icon-2.svg';
    import journeyThirdIconFirst from '$lib/assets/journey-3-icon-1.svg';
    import journeyThirdIconSecond from '$lib/assets/journey-3-icon-2.svg';
    import tick from '$lib/assets/tick.svg';

    // Components
    import Button from '$lib/components/Button.svelte';
</script>

<section id="journey" class="flex justify-center relative pb-4 pt-8 sm:pt-8 sm:py-12 md:py-24 lg:py-34 bg-white">
    <div class="max-lg:px-6 lg:container">
        <h2 class="text-2xl-bold md:text-4xl-bold xl:text-5xl-bold text-primary-950 font-display sm:pb-4 text-left sm:text-center">Jak przebiega darmowa<br/> współpraca?</h2>
        <div class="flex flex-col transition-all min-h-2xl">

            <div id="journey-step-1" class="grid grid-cols-2 md:grid-cols-3 mt-8 md:mt-18 min-[500px]:px-6 md:px-12 xl:px-24">
                <div class="col-span-2 md:col-span-1">
                    <!-- <enhanced:img src={journeyFirst} alt="Image of happy woman calling phone" /> -->
                    <video loop class="w-[400px] -z-1 rounded-xl lazyload" playsinline
                    preload="none"
                    muted="true"
                    data-autoplay="true"
                    data-poster={journeyFirst}
                    src={journeyFirstVideo}>
                    </video>
                </div>
                <div class="col-span-2 flex flex-col justify-center xl:max-w-2/3 max-md:mt-8 md:ml-16">
                    <div class="flex items-center"><div class="w-8 h-8 lg:w-10 lg:h-10 bg-primary-600 text-white flex justify-center items-center mr-3 lg:mr-4 rounded-full text-xl-bold lg:text-2xl-bold font-display">1</div><h3 class="text-2xl-bold lg:text-3xl-bold font-display text-primary-950"> Pierwsza rozmowa</h3></div>
                    <div class="flex flex-row gap-3 mt-4 sm:mt-5"><img src={tick} alt="Graphic icon of stats" /><p class="text-xs sm:text-sm lg:text-base text-primary-950">Rozpoczynamy od wspólnej rozmowy, w trakcie której omawiamy Twoje produkty, biznes i obecne prowadzone działania marketingowe.</p></div>
                    <h4 class="text-xl-bold font-display text-primary-950 mt-5 sm:mt-6 lg:mt-10">Co otrzymujesz na tym etapie:</h4>
                    <div class="flex flex-col min-[425px]:flex-row gap-4 max-[425px]:gap-5 items-start min-[425px]:items-center mt-4">
                        <div class="flex flex-row min-[425px]:flex-col lg:flex-row gap-4 items-center min-[425px]:items-start lg:items-center">
                            <img src={journeyFirstIconFirst} alt="Graphic icon of stats" />
                            <p class="text-sm lg:text-base text-primary-950">Omówienie Twoich wyników marketingowych</p>
                        </div>
                        <div class="flex flex-row min-[425px]:flex-col lg:flex-row gap-4 items-center min-[425px]:items-start lg:items-center">
                            <img src={journeyFirstIconSecond} alt="Graphic icon of stats" />
                            <p class="text-sm lg:text-base text-primary-950">Plan naprawczy dla konta i marketingu</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 sm:gap-3 mt-8 flex-wrap">
                        <Button label="Druga rozmowa" theme="dark" href="#journey-step-2" />
                        <Button label="Napisz do mnie" theme="orange" href="#contact" />
                    </div>
                </div>
            </div>

            <div id="journey-step-2" class="grid grid-cols-2 md:grid-cols-3 mt-12 md:mt-18 lg:mt-28 min-[500px]:px-6 md:px-12 xl:px-24">
                <div class="col-span-2 flex flex-col justify-center xl:max-w-2/3 xl:ml-16 max-sm:mr-0 max-xl:mr-8 max-md:mt-8 max-md:order-2">
                    <div class="flex items-center"><div class="w-8 h-8 lg:w-10 lg:h-10 bg-primary-600 text-white flex justify-center items-center mr-3 lg:mr-4 rounded-full text-xl-bold lg:text-2xl-bold font-display">2</div><h3 class="text-2xl-bold lg:text-3xl-bold font-display text-primary-950">Druga rozmowa</h3></div>
                    <div class="flex flex-row gap-3 mt-5"><img src={tick} alt="Graphic icon of stats" /><p class="text-xs sm:text-sm lg:text-base text-primary-950">Podczas rozmowy przedstawię Ci plan rozwoju i marketingu dla Twojego biznesu, wspólnie wyznaczymy cele i założenia. Na tym etapie stworzę już pierwsze kampanie i strategie.</p></div>
                    <h4 class="text-xl-bold font-display text-primary-950 mt-5 sm:mt-6 lg:mt-10">Co otrzymujesz na tym etapie:</h4>
                    <div class="flex flex-col min-[425px]:flex-row gap-4 max-[425px]:gap-5 items-start min-[425px]:items-center mt-4">
                        <div class="flex flex-row min-[425px]:flex-col lg:flex-row gap-4 items-center min-[425px]:items-start lg:items-center">
                            <img src={journeySecondIconFirst} alt="Graphic icon of stats" />
                            <p class="text-sm lg:text-base text-primary-950">Pierwszą strategię marketingową</p>
                        </div>
                        <div class="flex flex-row min-[425px]:flex-col lg:flex-row gap-4 items-center min-[425px]:items-start lg:items-center">
                            <img src={journeySecondIconSecond} alt="Graphic icon of stats" />
                            <p class="text-sm lg:text-base text-primary-950">Raport z wykonanych działań</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 sm:gap-3 mt-8 flex-wrap">
                        <Button label="Trzecia rozmowa" theme="dark" href="#journey-step-3" />
                        <Button label="Napisz do mnie" theme="orange" href="#contact" />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 max-md:order-1">
                    <!-- <enhanced:img src={journeySecond} alt="Image of two business people on meeting" /> -->
                    <video loop class="w-[400px] -z-1 rounded-xl lazyload" playsinline
                    preload="none"
                    muted="true"
                    data-autoplay="true"
                    data-poster={journeySecond}
                    src={journeySecondVideo}>
                    </video>
                </div>
            </div>

            <div id="journey-step-3" class="grid grid-cols-2 md:grid-cols-3 mt-12 md:mt-18 lg:mt-28 min-[500px]:px-6 md:px-12 xl:px-24">
                <div class="col-span-2 md:col-span-1">
                    <!-- <enhanced:img src={journeyThird} alt="Image of two people smiling and talking about business" /> -->
                    <video loop class="w-[400px] -z-1 rounded-xl lazyload" playsinline
                    preload="none"
                    muted="true"
                    data-autoplay="true"
                    data-poster={journeyThird}
                    src={journeyThirdVideo}>
                    </video>
                </div>
                <div class="col-span-2 flex flex-col justify-center xl:max-w-2/3 md:ml-16 max-md:mt-8">
                    <div class="flex items-center"><div class="w-8 h-8 lg:w-10 lg:h-10 bg-primary-600 text-white flex justify-center items-center mr-3 lg:mr-4 rounded-full text-xl-bold lg:text-2xl-bold font-display">3</div><h3 class="text-2xl-bold lg:text-3xl-bold font-display text-primary-950">Trzecia rozmowa</h3></div>
                    <div class="flex flex-row gap-3 mt-5"><img src={tick} alt="Graphic icon of stats" /><p class="text-xs sm:text-sm lg:text-base text-primary-950">Na tym etapie przedstawię Ci konkretne działania i strategię, którą dla Ciebie wdrożyłem. Wspólnie przeanalizujemy wyniki i określimy dalsze skalowanie Twojego biznesu.</p></div>
                    <h4 class="text-xl-bold font-display text-primary-950 mt-5 sm:mt-6 lg:mt-10">Co otrzymujesz na tym etapie:</h4>
                    <div class="flex flex-col min-[425px]:flex-row gap-4 max-[425px]:gap-5 items-start min-[425px]:items-center mt-4">
                        <div class="flex flex-row min-[425px]:flex-col lg:flex-row gap-4 items-center min-[425px]:items-start lg:items-center">
                            <img src={journeyThirdIconFirst} alt="Graphic icon of stats" />
                            <p class="text-sm lg:text-base text-primary-950">Pełny raport marketingu</p>
                        </div>
                        <div class="flex flex-row min-[425px]:flex-col lg:flex-row gap-4 items-center min-[425px]:items-start lg:items-center">
                            <img src={journeyThirdIconSecond} alt="Graphic icon of stats" />
                            <p class="text-sm lg:text-base text-primary-950">Plan na skalowanie sprzedaży</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 sm:gap-3 mt-8 flex-wrap">
                        <Button label="Zacznijmy działać" theme="dark" href="#contact" />
                        <Button label="Napisz do mnie" theme="orange" href="#contact" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<script>
    // Images
    import journeyFirst from '$lib/assets/journey-1.png';
    import journeySecond from '$lib/assets/journey-2.png';
    import journeyThird from '$lib/assets/journey-3.png';
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

<section id="journey" class="flex justify-center relative py-24 bg-white">
    <div class="container">
        <h2 class="text-5xl-bold text-primary-950 font-display pb-4 text-center">Jak przebiega darmowa<br/> współpraca?</h2>
        <div class="flex flex-col">

            <div class="grid grid-cols-3 mt-24 px-24">
                <div class="col-span-1"><img src={journeyFirst} alt="Graphic icon of stats" /></div>
                <div class="col-span-2 flex flex-col justify-center max-w-2/3 ml-16">
                    <div class="flex"><div class="w-10 h-10 bg-primary-600 text-white flex justify-center items-center mr-4 rounded-full text-2xl-bold font-display">1</div><h3 class="text-3xl-bold font-display text-primary-950"> Pierwsza rozmowa</h3></div>
                    <div class="flex flex-row gap-3 mt-5"><img src={tick} alt="Graphic icon of stats" /><p class=" text-base text-primary-950">Rozpoczynamy od wspólnej rozmowy, w trakcie której omawiamy Twoje produkty, biznes i obecne prowadzone działania marketingowe.</p></div>
                    <h4 class="text-xl-bold font-display text-primary-950 mt-10">Co otrzymujesz na tym etapie:</h4>
                    <div class="flex flex-row gap-8 items-center mt-6">
                        <div class="flex flex-row gap-4 items-center">
                            <img src={journeyFirstIconFirst} alt="Graphic icon of stats" />
                            <p class="text-base text-primary-950">Omówienie Twoich wyników marketingowych</p>
                        </div>
                        <div class="flex flex-row gap-4 items-center">
                            <img src={journeyFirstIconSecond} alt="Graphic icon of stats" />
                            <p class="text-base text-primary-950">Plan naprawczy dla konta i marketingu</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-3 mt-8">
                        <Button label="Druga rozmowa" theme="dark" />
                        <Button label="Napisz do mnie" theme="orange" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 mt-28 px-24">
                <div class="col-span-2 flex flex-col justify-center max-w-2/3 ml-16">
                    <div class="flex"><div class="w-10 h-10 bg-primary-600 text-white flex justify-center items-center mr-4 rounded-full text-2xl-bold font-display">2</div><h3 class="text-3xl-bold font-display text-primary-950">Druga rozmowa</h3></div>
                    <div class="flex flex-row gap-3 mt-5"><img src={tick} alt="Graphic icon of stats" /><p class=" text-base text-primary-950">Podczas rozmowy przedstawię Ci plan rozwoju i marketingu dla Twojego biznesu, wspólnie wyznaczymy cele i założenia. Na tym etapie stworzę już pierwsze kampanie i strategie.</p></div>
                    <h4 class="text-xl-bold font-display text-primary-950 mt-10">Co otrzymujesz na tym etapie:</h4>
                    <div class="flex flex-row gap-8 items-center mt-6">
                        <div class="flex flex-row gap-4 items-center">
                            <img src={journeySecondIconFirst} alt="Graphic icon of stats" />
                            <p class="text-base text-primary-950">Pierwszą strategię marketingową</p>
                        </div>
                        <div class="flex flex-row gap-4 items-center">
                            <img src={journeySecondIconSecond} alt="Graphic icon of stats" />
                            <p class="text-base text-primary-950">Raport z wykonanych działań</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-3 mt-8">
                        <Button label="Trzecia rozmowa" theme="dark" />
                        <Button label="Napisz do mnie" theme="orange" />
                    </div>
                </div>
                <div class="col-span-1"><img src={journeySecond} alt="Graphic icon of stats" /></div>
            </div>

            <div class="grid grid-cols-3 mt-28 px-24">
                <div class="col-span-1"><img src={journeyThird} alt="Graphic icon of stats" /></div>
                <div class="col-span-2 flex flex-col justify-center max-w-2/3 ml-16">
                    <div class="flex"><div class="w-10 h-10 bg-primary-600 text-white flex justify-center items-center mr-4 rounded-full text-2xl-bold font-display">3</div><h3 class="text-3xl-bold font-display text-primary-950">Trzecia rozmowa</h3></div>
                    <div class="flex flex-row gap-3 mt-5"><img src={tick} alt="Graphic icon of stats" /><p class=" text-base text-primary-950">Na tym etapie przedstawię Ci konkretne działania i strategię, którą dla Ciebie wdrożyłem. Wspólnie przeanalizujemy wyniki i określimy dalsze skalowanie Twojego biznesu.</p></div>
                    <h4 class="text-xl-bold font-display text-primary-950 mt-10">Co otrzymujesz na tym etapie:</h4>
                    <div class="flex flex-row gap-8 items-center mt-6">
                        <div class="flex flex-row gap-4 items-center">
                            <img src={journeyThirdIconFirst} alt="Graphic icon of stats" />
                            <p class="text-base text-primary-950">Pełny raport marketingu</p>
                        </div>
                        <div class="flex flex-row gap-4 items-center">
                            <img src={journeyThirdIconSecond} alt="Graphic icon of stats" />
                            <p class="text-base text-primary-950">Plan na skalowanie sprzedaży</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-3 mt-8">
                        <Button label="Zacznijmy działać" theme="dark" />
                        <Button label="Napisz do mnie" theme="orange" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<script>
    // Images
    import globe from '$lib/assets/globe.png?enhanced';
    import time from '$lib/assets/time.svg';
    import data from '$lib/assets/data.svg';
    import indvidual from '$lib/assets/indvidual.svg';

    // Components
    import Button from '$lib/components/Button.svelte';
</script>


<section id="facts" class="flex justify-center overflow-x-clip">
    <div class="container lg:px-12">
        <div class="pb-2 grid grid-cols-3 relative">

            <div class="lg:col-span-1 z-10 absolute lg:relative max-sm:max-w-[220px] max-lg:max-w-[300px] max-sm:left-auto max-sm:-right-10 max-md:-top-16 max-md:-left-20 max-sm:-top-7 max-lg:-top-12 max-lg:-left-18">
                <enhanced:img src={globe} alt="Graphic globe with marketing info graphics" />
            </div>
            <div class="col-span-3 lg:col-span-2 mt-20 z-10 ml-0 sm:ml-18 lg:ml-0">
                <h2 class="text-2xl-bold md:text-3xl-bold lg:text-4xl-bold xl:text-5xl-bold text-primary-950 font-display pb-4 max-sm:text-left max-md:text-right max-lg:text-center px-4 max-sm:ml-2 max-sm:w-1/2 max-md:ml-24">Fakty o moich działaniach</h2>
                <div class="mt-6 max-sm:pr-6 flex flex-row gap-4 lg:gap-5 xl:gap-6 max-sm:overflow-scroll">
                    <div class="flex-none sm:flex-1 sm:flex flex-col p-4 lg:p-5 bg-white xl:p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400 max-sm:w-[200px] ml-6 sm:ml-8">
                        <img src={indvidual} alt="Graphic icon of two people" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950 max-sm:my-2">Indywidualne<br />podejście</h3>
                        <p class="text-xs text-primary-950">Każdemu projektowi poświęcam szczególną uwagę. Opracuję skuteczną strategię dla Twojego biznesu..</p>
                    </div>
                    <div class="flex-none sm:flex-1 sm:flex flex-col p-4 lg:p-5 bg-white xl:p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400 max-sm:w-[200px]">
                        <img src={data} alt="Graphic icon of stats" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950 max-sm:my-2">Wyniki oparte<br/>na danych</h3>
                        <p class="text-xs text-primary-950">Podejmuję decyzje marketingowe na podstawie dokładnej analizy. Dzięki temu osiągam realne rezultaty.</p>
                    </div>
                    <div class="flex-none sm:flex-1 sm:flex flex-col p-4 lg:p-5 bg-white xl:p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400 max-sm:w-[200px]">
                        <img src={time} alt="Graphic icon of stats" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950 max-sm:my-2">Szybka<br />realizacja</h3>
                        <p class="text-xs text-primary-950">Działam sprawnie i efektywnie – od pomysłu do realizacji w ekspresowym tempie, zawsze na czas!.</p>
                    </div>
                </div>
            </div>
            <div class="absolute z-0 flex justify-center items-center w-full max-sm:hidden">
                <div class="max-sm:mx-10 w-full md:w-4/5 bg-stone-100 h-[456px] rounded-4xl"></div>
            </div>

        </div>
        <div class="w-full flex items-center justify-center pb-12 sm:pb-16 md:pb-24 max-lg:px-4">

            <div class="flex flex-row flex-wrap gap-2 lg:gap-4 max-sm:justify-center mt-8 md:mt-10 lg:mt-14">
                <Button label="Kilka słów o twórcy" theme="orange" href="#about" />
                <Button label="Przebieg współpracy" theme="dark" href="#steps" />
            </div>

        </div>
    </div>
</section>
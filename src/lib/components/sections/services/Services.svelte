<script>
    // Images
    import servicesFirst from '$lib/assets/services-1.svg';
    import servicesSecond from '$lib/assets/services-2.svg';
    import servicesThird from '$lib/assets/services-3.svg';
    import statsFirst from '$lib/assets/statistics-1.png?enhanced';
    import screen from '$lib/assets/screen-1.png?enhanced';
    import screenTwo from '$lib/assets/screen-2.png?enhanced';
    import screenThree from '$lib/assets/screen-3.png?enhanced';
    import screenUpOne from '$lib/assets/screen-1-1.png?enhanced';
    import screenUpTwo from '$lib/assets/screen-1-2.png?enhanced';
    import screenTwoOne from '$lib/assets/screen-2-1.png?enhanced';
    import screenTwoTwo from '$lib/assets/screen-2-2.png?enhanced';
    import screenThreeOne from '$lib/assets/screen-3-1.png?enhanced';
    import screenThreeTwo from '$lib/assets/screen-3-2.png?enhanced';

    // Components
    import Button from '$lib/components/Button.svelte';
    import gsap from 'gsap';

    // Icons
    import ArrowCircleRight from 'phosphor-svelte/lib/ArrowCircleRight';
    import { onDestroy, onMount } from 'svelte';

    let activeSlide = $state(0);
    let previous = $state(1);
    let timer;
    let activeSlideTime = 8000;

    let counterText;
    let currentAnimation = null;

    let currentImageAnimation = null;

    // Manual change slide function
    function setSlide(index) {
        resetTimer(index);
        changeSlides(index);
        activeSlide = index;
    }

    // Timer function
    function resetTimer(index) {
        clearInterval(timer);
        timer = setInterval(() => {
            previous = activeSlide;
            if (activeSlide === 3) {
                activeSlide = 1
            } else {
                activeSlide = (activeSlide + 1);
            }
            changeSlides(activeSlide, previous)
        }, activeSlideTime);
    }

    // Animate text function
    function animateNewText(newText) {
      // If there's an animation playing, kill it
      if (currentAnimation) {
        currentAnimation.kill();
      }
      
      // Set the new text
      counterText.textContent = newText;
      
      // Set initial state for the animation
      gsap.set(counterText, { 
        opacity: 0,
        y: -10
      });
      
      // Create and play the animation
      currentAnimation = gsap.to(counterText, { 
        opacity: 100, 
        y: 0, 
        duration: 1, 
        ease: "power4.inOut" 
      });
    }

    // Animate images function
    function animateImages(index, previous) {
        // Set initial state for the animation
        let image = document.querySelector("#slide-"+index);
        let subImage = document.querySelector("#slide-"+index+"-1");
        let subSecondImage = document.querySelector("#slide-"+index+"-2");

        let current = document.querySelector("#slide-"+activeSlide);
        let subCurrent = document.querySelector("#slide-"+activeSlide+"-1");
        let subSecondCurrent = document.querySelector("#slide-"+activeSlide+"-2");

        let previousImage = document.querySelector("#slide-"+previous);
        let previousSubImage = document.querySelector("#slide-"+previous+"-1");
        let previousSubSecondImage = document.querySelector("#slide-"+previous+"-2");

        // If there's an animation playing, kill it
        if (currentImageAnimation) {
            currentImageAnimation.kill();
        }

        if (previous !== undefined) {
            gsap.set([previousImage,previousSubImage,previousSubSecondImage], { 
                opacity: 0,
                y: -30
            });
        }

        gsap.set([current, subCurrent, subSecondCurrent], { 
            opacity: 0,
            y: -30
        });
  
        currentImageAnimation = gsap.timeline();
        currentImageAnimation.to(image, { 
            opacity: 1, 
            y: 0, 
            delay: 0.2,
            duration: 1, 
            ease: "power4.inOut" 
        })
        .to(subImage, { 
            opacity: 1, 
            y: 0, 
            delay: -0.7,
            duration: 1, 
            ease: "power4.inOut" 
        })
        .to(subSecondImage, { 
            opacity: 1, 
            y: 0, 
            delay: -0.8,
            duration: 1, 
            ease: "power4.inOut" 
        })

        gsap.set([image, subImage, subSecondImage], { 
            opacity: 0,
            y: -30
        });
    }


    // Main change slides function
    function changeSlides(index, previous) {
        if (index === 1) {
            gsap.to("#counter", {
                innerText: 340+'%', duration: 3, snap: { innerText: 5 }
            })

            animateNewText("Średni wzrost sprzedaży dzięki współpracy ze mną")
            animateImages(1, previous)
        }
        if (index === 2) {
            gsap.to("#counter", {
                innerText: 585+'%', duration: 3, snap: { innerText: 5 }
            })

            animateNewText("Średni wzrost klientów po miesiącu współpracy")
            animateImages(2, previous)
        }
        if (index === 3) {
            gsap.to("#counter", {
                innerText: 415+'%', duration: 3, snap: { innerText: 5 }
            })
      
            animateNewText("Średnia skuteczność kampanii")
            animateImages(3, previous)
        }
    }

    // Site load function
    onMount(() => {
        counterText = document.querySelector('#counter-text');

        activeSlide = 1;
        resetTimer();
        changeSlides(1);
    });

    // Destroy function
    onDestroy(() => {
        clearInterval(timer);
    });
</script>

<section id="services" class="bg-primary-950 justify-center flex relative">

    <svg width="100%" viewBox="0 0 1920 69" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-0.5 w-full left-0 right-0 z-10">
        <path d="M0 0H1920V7.5L0 69V0Z" fill="#FAFAF9"/>
    </svg>        

    <div class="max-w-[1920px] w-full">
        <div class="grid grid-cols-2 min-[910px]:grid-cols-5">
            <div class="col-span-2 min-[910px]:col-span-2 pt-12 min-[768px]:pt-18 min-[910px]:pt-40 ml-6 sm:ml-12 min-[910px]:ml-18 lg:ml-24 xl:ml-30 2xl:ml-46">
                <div class="flex flex-col">
                    <p class="text-xl text-primary-500 mb-4">Usługi</p>
                    <h3 class="font-display text-2xl-bold lg:text-3xl-bold xl:text-4xl-bold text-primary-100 mb-4 md:mb-8 lg:mb-12">Efekty mojej pracy są<br/> doceniane przez klientów</h3>
                    <div class="flex flex-row min-[910px]:flex-col gap-4 min-[910px]:gap-7 max-[910px]:overflow-scroll max-[910px]:-ml-12 max-[910px]:py-6 max-[910px]:px-12">
                        <div tabindex="0" role="button" onkeydown={() => setSlide(1)} onclick={() => setSlide(1)} class="flex-none relative pt-6 pb-2 px-2 hover:bg-[#48140D] {activeSlide === 1 ? 'bg-[#4F1811]' : ''} transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer">
                            <div class="flex flex-col min-[910px]:flex-row items-start min-[910px]:items-center justify-between pb-1 px-5 max-[910px]:gap-2">
                                <div class="flex flex-col min-[910px]:flex-row items-start min-[910px]:items-center max-[910px]:gap-2"><img src={servicesFirst} alt="Graphic icon of stats" class="mr-4 max-h-[40px]" /><p class="text-base text-primary-500 max-[910px]:max-w-[180px]">Kampania Allegro Ads od zera</p></div>
                                <div class="max-[910px]:rotate-90">
                                    {#if activeSlide === 1} <ArrowCircleRight color="white" size="28" /> {:else} <ArrowCircleRight color="#F36020" size="28" /> {/if}
                                </div>
                            </div>

                            <div class="h-[1px] bg-primary-500 bottom-[10px] w-[0%] {activeSlide === 1 ? 'w-[100%] opacity-100 transition-[width]' : 'w-[0%] opacity-0 transition-none'} duration-8000 flex mt-4 progress" id="progress-1"></div>
                        </div>
                        <div tabindex="0" role="button" onkeydown={() => setSlide(2)} onclick={() => setSlide(2)} class="flex-none relative pt-6 pb-2 px-2 hover:bg-[#48140D] {activeSlide === 2 ? 'bg-[#4F1811]' : ''} transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer">
                            <div class="flex flex-col min-[910px]:flex-row items-start min-[910px]:items-center justify-between pb-1 px-5 max-[910px]:gap-2">
                                <div class="flex flex-col min-[910px]:flex-row items-start min-[910px]:items-center max-[910px]:gap-2"><img src={servicesSecond} alt="Graphic icon of stats" class="mr-4 max-h-[40px]" /><p class="text-base text-primary-500 max-[910px]:max-w-[180px]">Analiza wyników i raportowanie</p></div>
                                <div class="max-[910px]:rotate-90">
                                    {#if activeSlide === 2} <ArrowCircleRight color="white" size="28" /> {:else} <ArrowCircleRight color="#F36020" size="28" /> {/if}
                                </div>
                            </div>
                            
                            <div class="h-[1px] bg-primary-500 bottom-[10px] w-[0%] {activeSlide === 2 ? 'w-[100%] opacity-100 transition-[width]' : 'w-[0%] opacity-0 transition-none'} duration-8000 flex mt-4 progress" id="progress-1"></div>
                        </div>
                        <div tabindex="0" role="button" onkeydown={() => setSlide(3)} onclick={() => setSlide(3)} class="flex-none relative pt-6 pb-2 px-2 hover:bg-[#48140D] {activeSlide === 3 ? 'bg-[#4F1811]' : ''} transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer">
                            <div class="flex flex-col min-[910px]:flex-row items-start min-[910px]:items-center justify-between pb-1 px-5 max-[910px]:gap-2">
                                <div class="flex flex-col min-[910px]:flex-row items-start min-[910px]:items-center max-[910px]:gap-2"><img src={servicesThird} alt="Graphic icon of stats" class="mr-4 max-h-[40px]" /><p class="text-base text-primary-500 max-[910px]:max-w-[180px]">Optymalizacja kampanii Allegro Ads</p></div>
                                <div class="max-[910px]:rotate-90">
                                    {#if activeSlide === 3} <ArrowCircleRight color="white" size="28" /> {:else} <ArrowCircleRight color="#F36020" size="28" /> {/if}
                                </div>
                            </div>

                            <div class="h-[1px] bg-primary-500 bottom-[10px] w-[0%] {activeSlide === 3 ? 'w-[100%] opacity-100 transition-[width]' : 'w-[0%] opacity-0 transition-none'} duration-8000 flex mt-4 progress" id="progress-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2 min-[910px]:col-span-3 max-[450px]:px-6 max-[560px]:px-12 max-[420px]:px-6 max-[560px]:pb-12">
                <div class="grid grid-cols-2 min-[560px]:grid-cols-6 2xl:grid-cols-4 min-[910px]:ml-14 auto-rows-min">
                    <div class="col-span-2 min-[560px]:col-span-3 xl:col-span-2 2xl:col-span-1 bg-[#250906] p-6 sm:pt-10 md:pt-40 auto-rows-min max-[560px]:rounded-t-xl">
                        <p class=" text-base text-primary-100 mb-4">Tworzę kampanie reklamowe na Allegro od podstaw. Opracuję skuteczną strategię, dzięki której osiągniesz swoje cele biznesowe.</p>
                        <Button label="Porozmawiajmy" href="#contact" />
                    </div>
                    <div class="col-span-2 min-[560px]:col-span-3 xl:col-span-3 2xl:col-span-2 bg-primary-850 bg-[#4E1B15] px-6 min-[560px]:px-11 py-6 min-[560px]:py-8 flex justify-end flex-col">
                        <h4 class="text-5xl-bold sm:text-6xl-bold text-primary-500 font-display mb-4" id="counter">525%</h4>
                        <p class="text-base text-primary-100" id="counter-text">Średni wzrost sprzedaży dzięki<br />współpracy ze mną</p>
                    </div>
                    <div class="max-xl:hidden xl:col-span-1 row-span-2 bg-primary-600 overflow-hidden relative">
                        <svg width="2359" height="2360" viewBox="0 0 2359 2360" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-[-300%] top-[-80%] max-w-8xl">
                            <path d="M1634.2 1579.58L1345.48 1575.95C1322.26 1575.68 1300.08 1566.26 1283.77 1549.74C1267.68 1533.45 1258.63 1511.49 1258.58 1488.6L1260.6 1381.53L1334.71 1457.75C1350.31 1473.76 1367.92 1487.67 1387.11 1499.13C1435.36 1527.62 1491.67 1539.39 1547.29 1532.6C1602.91 1525.81 1654.74 1500.85 1694.73 1461.6L1900.8 1260.49C1908.94 1252.39 1918.62 1246 1929.27 1241.71C1939.92 1237.41 1951.32 1235.3 1962.8 1235.48C1974.31 1235.56 1985.69 1237.91 1996.28 1242.41C2006.88 1246.91 2016.47 1253.47 2024.51 1261.7L2239.48 1481.48L2358.76 1364.69L2143.56 1144.77C2120.23 1120.88 2092.43 1101.82 2061.73 1088.69C2031.04 1075.55 1998.06 1068.58 1964.67 1068.19C1931.29 1067.81 1898.16 1074 1867.16 1086.42C1836.17 1098.84 1807.93 1117.25 1784.06 1140.58L1578.22 1341.84C1570 1349.87 1560.26 1356.21 1549.58 1360.48C1538.9 1364.74 1527.48 1366.86 1515.98 1366.7C1492.76 1366.43 1470.59 1357.01 1454.27 1340.48L1380.17 1264.26L1486.25 1267.96C1553.66 1268.69 1618.61 1242.63 1666.83 1195.5C1715.04 1148.38 1742.58 1084.05 1743.4 1016.63L1746.79 727.768C1747.1 704.547 1756.61 682.397 1773.24 666.19C1789.88 649.982 1812.26 641.043 1835.48 641.337L2142.8 644.671L2144.59 477.991L1836.6 473.612C1803.18 473.141 1770.01 479.278 1738.98 491.669C1707.95 504.061 1679.67 522.463 1655.77 545.818C1631.88 569.173 1612.83 597.02 1599.73 627.76C1586.63 658.499 1579.73 691.525 1579.44 724.938L1575.81 1013.66C1575.58 1036.62 1566.31 1058.57 1550.01 1074.74C1533.71 1090.92 1511.7 1100.02 1488.74 1100.08L1382.63 1098.63L1458.7 1024.76C1482.61 1001.4 1501.68 973.565 1514.82 942.836C1527.97 912.107 1534.93 879.089 1535.31 845.669C1535.69 812.249 1529.48 779.082 1517.03 748.063C1504.59 717.043 1486.16 688.778 1462.79 664.884L1261.54 459.045C1245.34 442.401 1236.38 420.018 1236.64 396.791C1236.89 373.564 1246.33 351.382 1262.9 335.096L1481.24 119.278L1364.69 0.138055L1144.91 215.107C1121.02 238.432 1101.97 266.235 1088.83 296.928C1075.69 327.621 1068.72 360.602 1068.34 393.987C1067.95 427.372 1074.14 460.506 1086.56 491.497C1098.98 522.487 1117.39 550.727 1140.73 574.602L1341.84 780.68C1358.29 796.957 1367.61 819.1 1367.74 842.243C1367.7 853.709 1365.38 865.052 1360.9 875.607C1356.42 886.163 1349.88 895.719 1341.67 903.716L1265.45 977.821L1267.39 873.612C1267.86 840.201 1261.72 807.026 1249.33 775.994C1236.94 744.963 1218.54 716.686 1195.18 692.789C1171.83 668.892 1143.98 649.846 1113.24 636.746C1082.5 623.646 1049.48 616.751 1016.07 616.455L727.342 612.826C715.842 612.73 704.474 610.363 693.891 605.86C683.308 601.357 673.719 594.809 665.675 586.589C657.631 578.37 651.289 568.643 647.015 557.966C642.741 547.289 640.619 535.873 640.77 524.373L643.288 216.247L476.609 214.462L473.612 522.305C472.883 589.721 498.942 654.669 546.065 702.886C593.188 751.102 657.522 778.644 724.937 779.462L1013.8 782.851C1025.26 782.925 1036.59 785.291 1047.13 789.81C1057.66 794.329 1067.18 800.91 1075.13 809.165C1091.44 825.808 1100.47 848.246 1100.23 871.544L1098.92 977.418L1025.05 901.341C977.807 853.196 913.408 825.734 845.959 824.968C778.509 824.202 713.503 850.193 665.176 897.252L459.337 1098.5C442.703 1114.7 420.319 1123.63 397.103 1123.33C373.888 1123.03 351.741 1113.53 335.53 1096.91L118.993 878.136L0.137391 994.207L215.106 1213.99C230.705 1230 248.32 1243.91 267.508 1255.37C315.71 1283.78 371.933 1295.51 427.473 1288.75C483.014 1281.98 534.775 1257.09 574.743 1217.94L780.821 1016.83C797.427 1000.68 819.749 991.774 842.905 992.047C866.062 992.319 888.168 1001.75 904.389 1018.28L978.494 1094.5L872.619 1093.18C805.182 1092.57 740.245 1118.69 692.024 1165.84C643.802 1212.98 616.222 1277.31 615.321 1344.75L611.692 1633.47C611.424 1656.68 601.958 1678.83 585.374 1695.06C568.79 1711.29 546.443 1720.28 523.239 1720.05L215.679 1716.57L213.753 1883.49L521.312 1886.96C588.772 1887.66 653.75 1861.56 701.988 1814.39C750.226 1767.23 777.783 1702.86 778.611 1635.4L782 1346.53C782.062 1334.92 784.427 1323.43 788.958 1312.73C793.489 1302.04 800.096 1292.34 808.397 1284.22C816.698 1276.09 826.527 1269.69 837.318 1265.39C848.108 1261.08 859.644 1258.96 871.26 1259.15L977.276 1260.22L901.057 1334.33C877.134 1357.72 858.053 1385.59 844.905 1416.35C831.757 1447.12 824.799 1480.17 824.428 1513.63C824.057 1547.08 830.281 1580.28 842.745 1611.33C855.208 1642.38 873.666 1670.67 897.065 1694.58L1098.18 1900.66C1106.24 1908.85 1112.6 1918.55 1116.89 1929.21C1121.18 1939.86 1123.32 1951.26 1123.19 1962.75C1123.05 1974.24 1120.64 1985.58 1116.1 1996.14C1111.56 2006.69 1104.97 2016.24 1096.72 2024.23L878.277 2239.67L994.924 2359.19L1214.85 2143.98C1238.77 2120.66 1257.86 2092.84 1271.01 2062.12C1284.16 2031.4 1291.12 1998.39 1291.49 1964.98C1291.86 1931.57 1285.62 1898.41 1273.15 1867.42C1260.67 1836.42 1242.2 1808.19 1218.79 1784.34L1017.54 1578.5C1001.41 1561.84 992.53 1539.47 992.829 1516.27C993.128 1493.08 1002.59 1470.95 1019.14 1454.7L1095.36 1380.59L1091.9 1486.81C1091.28 1554.25 1117.4 1619.19 1164.55 1667.41C1211.7 1715.63 1276.03 1743.21 1343.46 1744.11L1632.33 1747.5C1655.55 1747.81 1677.7 1757.32 1693.91 1773.95C1710.11 1790.59 1719.05 1812.97 1718.76 1836.19L1715.43 2143.51L1882.34 2145.44L1885.68 1838.12C1886.19 1804.62 1880.08 1771.35 1867.71 1740.21C1855.34 1709.08 1836.94 1680.69 1813.58 1656.67C1790.22 1632.66 1762.35 1613.49 1731.57 1600.26C1700.79 1587.03 1667.7 1580 1634.2 1579.58Z" fill="#2E0C08"/>
                        </svg>                            
                    </div>
                    <div class="col-span-2 min-[560px]:col-span-6 xl:col-span-5 2xl:col-span-3 bg-[#2E0C08] py-12 flex items-center justify-center relative min-h-[300px] min-[560px]:min-h-[450px] max-[560px]:rounded-b-xl">
           
                        <enhanced:img id="slide-1" class="w-full left-0 top-9 min-[560px]:top-12 px-8 min-[560px]:px-20 py-6 absolute opacity-0" src={screen} alt="Graphic image of sales statistics" loading="lazy" />
                        <enhanced:img id="slide-2" class="w-full left-0 top-11 min-[560px]top-14 px-8 min-[560px]:px-20 py-6 absolute opacity-0" src={screenTwo} alt="Graphic image of sales statistics" loading="lazy" />
                        <enhanced:img id="slide-3" class="w-full left-0 top-12 min-[560px]top-16 px-8 min-[560px]:px-20 py-6 absolute opacity-0" src={screenThree} alt="Graphic image of sales statistics" loading="lazy" />

                        <enhanced:img id="slide-1-1" class="max-[560px]:w-[100px] absolute left-4 bottom-24 opacity-0 " src={screenUpOne} alt="Graphics image of sales improve" loading="lazy" />
                        <enhanced:img id="slide-2-1" class="max-[560px]:w-[200px] w-[300px] absolute left-4 bottom-32 min-[560px]:bottom-36 opacity-0 " src={screenTwoOne} alt="Graphics image of sales improve" loading="lazy" />
                        <enhanced:img id="slide-3-1" class="max-[560px]:w-[200px] w-[300px] absolute left-5 top-24 opacity-0 " src={screenThreeOne} alt="Graphics image of sales improve" loading="lazy" />

                        <enhanced:img id="slide-1-2" class="max-[560px]:w-[350px] absolute top-6 right-8 opacity-0" src={screenUpTwo} alt="Graphics image of sales money" loading="lazy" />
                        <enhanced:img id="slide-2-2" class="max-[560px]:w-[250px] w-[300px] absolute bottom-8 min-[560px]:bottom-14 right-20 opacity-0" src={screenTwoTwo} alt="Graphics image of sales money" loading="lazy" />
                        <enhanced:img id="slide-3-2" class="max-[560px]:w-[250px] w-[300px] absolute top-8 right-10 opacity-0" src={screenThreeTwo} alt="Graphics image of sales money" loading="lazy" />
                 
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
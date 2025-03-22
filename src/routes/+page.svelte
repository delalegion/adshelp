<script>
    // Images
    import logo from '$lib/assets/logo.svg';
    import logoWhite from '$lib/assets/logo-white.svg';
    import header from '$lib/assets/header.png';
    import globe from '$lib/assets/globe.png';
    import fb from '$lib/assets/fb.svg';
    import ig from '$lib/assets/ig.svg';
    import yt from '$lib/assets/yt.svg';
    import time from '$lib/assets/time.svg';
    import data from '$lib/assets/data.svg';
    import indvidual from '$lib/assets/indvidual.svg';
    import servicesFirst from '$lib/assets/services-1.svg';
    import servicesSecond from '$lib/assets/services-2.svg';
    import servicesThird from '$lib/assets/services-3.svg';
    import statsFirst from '$lib/assets/statistics-1.png';
    import avatar from '$lib/assets/avatar.png';
    import aboutBackground from '$lib/assets/about-bg.png';
    import tick from '$lib/assets/tick.svg';
    import tickFalse from '$lib/assets/tick-false.svg';
    import journeyFirst from '$lib/assets/journey-1.png';
    import journeySecond from '$lib/assets/journey-2.png';
    import journeyThird from '$lib/assets/journey-3.png';
    import journeyFirstIconFirst from '$lib/assets/journey-1-icon-1.svg';
    import journeyFirstIconSecond from '$lib/assets/journey-1-icon-2.svg';
    import journeySecondIconFirst from '$lib/assets/journey-2-icon-1.svg';
    import journeySecondIconSecond from '$lib/assets/journey-2-icon-2.svg';
    import journeyThirdIconFirst from '$lib/assets/journey-3-icon-1.svg';
    import journeyThirdIconSecond from '$lib/assets/journey-3-icon-2.svg';
    import heart from '$lib/assets/heart.svg';
    import heartDark from '$lib/assets/heart-dark.svg';
    import pricingFirst from '$lib/assets/pricing-1.png';
    import pricingSecond from '$lib/assets/pricing-2.png';
    import pricingThird from '$lib/assets/pricing-3.png';
    import contactBgFirst from '$lib/assets/footer-bg-1.png';
    import contactBgSecond from '$lib/assets/footer-bg-2.png';
    import phone from '$lib/assets/phone.png';

    // Icons
    import Check from "phosphor-svelte/lib/Check";
    import Envelope from "phosphor-svelte/lib/Envelope";
    import Phone from "phosphor-svelte/lib/Phone";

    // Video
    import consult from '$lib/assets/consulting.webm';

    // Components
    import Button from '$lib/components/Button.svelte';
    import { Checkbox, Label } from "bits-ui";
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 

    let stepStates = $state([false, false, false, false]); 

    function toggleStateBox(index) {
        stepStates[index] = !stepStates[index];
        
        let stepBox = document.querySelector(`#step-${index+1}-box`);
        let stepBg = stepBox?.querySelector("#step-box-bg");
        let stepBtn = stepBox?.querySelector("#step-info");
        let stepBtnSvg = stepBox?.querySelector("#step-info-svg");
        let stepText = stepBox?.querySelector("#step-text");

        let stepTimeline = gsap.timeline({});
        stepTimeline.add('start');
        stepTimeline.to(stepBg, {
            opacity: stepStates[index] ? "1" : "0",
            duration: 0.3,
            ease: "power2.inOut"
        }, 'start')
        stepTimeline.to(stepBtn, {
            backgroundColor: stepStates[index] ? "#BD3111" : "#E44412",
            duration: 0.3,
            ease: "power2.inOut"
        }, 'start')
        stepTimeline.to(stepBtnSvg, {
            rotate: stepStates[index] ? "45deg" : "0deg",
            duration: 0.3,
            ease: "power2.inOut"
        }, 'start')
        stepTimeline.to(stepText, {
            y: stepStates[index] ? 0 : 2,
            opacity: stepStates[index] ? 1 : 0,
            duration: 0.3,
            ease: "power2.inOut"
        }, 'start')

    }

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        
    let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#steps",
        start: "top top",
        end: "+=1500",
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        scrub: true,
        snap: {
            snapTo: "labels",
            duration: { min: 0.2, max: 0.6 },
            delay: 0.1,
            ease: "power1.inOut"
        }
    }
    });

    timeline
        .addLabel("step1")
        .to("#step-1-label", { opacity: 1, y: 0, duration: 0.5 }, "step1")
        .to("#step-1-box", { opacity: 1, y: 0, duration: 0.5 }, "step1")

        .addLabel("step2")
        .to("#step-1-complete", { width: '50%' })
        .to("#step-2-label", { opacity: 1, y: 0, duration: 0.5 }, "step2")
        .to("#step-2-box", { opacity: 1, y: 0, duration: 0.5 }, "step2")

        .addLabel("step3")
        .to("#step-2-complete", { width: '50%' })
        .to("#step-3-label", { opacity: 1, y: 0, duration: 0.5 }, "step3")
        .to("#step-3-box", { opacity: 1, y: 0, duration: 0.5 }, "step3")

        .addLabel("step4")
        .to("#step-3-complete", { width: '50%' })
        .to("#step-4-label", { opacity: 1, y: 0, duration: 0.5 }, "step4")
        .to("#step-4-box", { opacity: 1, y: 0, duration: 0.5 }, "step4")

    })
</script>

<nav id="navbar" class="navbar">
    <div class="max-w-screen flex justify-between pl-20 pr-20 py-6 align-middle">
        <div class="navbar__menu flex flex-row gap-10 items-center">
            <div class="navbar__menu__logo" id="adshelp-logo"><img src={logo} alt="Logo" /></div>
            <div class="navbar__menu__divider text-neutral-200">|</div>
            <ul class="flex flex-row gap-3">
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">O mnie</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">Dlaczego warto</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">Usługi</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">Blog</a></li>
                <li class="text-sm text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class=" hover:bg-stone-200 transition-all px-3.5 py-3 rounded-full hover:opacity-85">Kontakt</a></li>
            </ul>
        </div>
        <div class="navbar__socials flex flex-row gap-4">
            <div class="flex flex-row gap-3 mr-4">
                <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[19px]" src={ig} alt="Instagram icon" /></div>
                <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="h-[19px]" src={fb} alt="Facebook icon" /></div>
                <div class="border-[1px] hover:border-[2px]  border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[21px]" src={yt} alt="Youtube icon" /></div>
            </div>
            <Button label="Zrealizujmy kampanię" type="dark" />
        </div>
    </div>
</nav>
<header id="header" class="header flex justify-center">
    <div class="container pt-24 pb-24 flex justify-between gap-3.5 items-center">
        <div class="flex-1 mb-24">
            <h1 class="text-6xl-bold font-display text-primary-950 pr-10">Skuteczne kampanie <span class="text-primary-600">Allegro ads</span> dla Twojego e-commerce</h1>
            <p class="text-base text-primary-950 mt-4">Zostaw swoje dane i uzyskaj darmowy audyt</p>
            <div class="flex flex-row gap-3 mt-8">
                <input
                id="apiKey"
                class="h-input rounded-lg transition-shadow shadow-card min-w-[350px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                placeholder="Wpisz swoją nazwę Allegro"
                name="allegro-name"
                autocomplete="off"
                />
                <Button label="Zacznij teraz!" type="orange" />
            </div>
            <div class="flex flex-row gap-3.5 mt-4">
                <p class=" text-base-bold text-primary-950 pb-1.5 border-b-3 border-solid border-orange-600 hover:cursor-pointer">Krok 1</p>
                <p class=" text-base-bold text-stone-500 pb-1.5 border-b-2 border-solid border-stone-500 hover:cursor-pointer hover:border-b-3 hover:border-stone-700 hover:text-stone-700 transition-all">Krok 2</p>
            </div>
        </div>
        <div class="flex-1">
            <img src={header} alt="Image of header with bunch of graphics showing products and excited woman holding phone" class="w-full flex" />
        </div>
    </div>
</header>

<section id="facts" class="flex justify-center">
    <div class="container">
        <div class="pb-2 grid grid-cols-3 relative">

            <div class="col-span-1 z-10">
                <img src={globe} alt="Graphic globe with marketing info graphics" />
            </div>
            <div class="col-span-2 mt-20 z-10">
                <h2 class="text-5xl-bold text-primary-950 font-display pb-4">Fakty o moich działaniach</h2>
                <div class="mt-6 flex flex-row gap-6">
                    <div class="flex-1 flex flex-col p-3 bg-white p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400">
                        <img src={indvidual} alt="Graphic icon of two people" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950">Indywidualne<br />podejście</h3>
                        <p class="text-xs text-primary-950">Każdemu projektowi poświęcam szczególną uwagę. Opracuję skuteczną strategię dla Twojego biznesu..</p>
                    </div>
                    <div class="flex-1 flex flex-col p-3 bg-white p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400">
                        <img src={data} alt="Graphic icon of stats" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950">Wyniki oparte<br/>na danych</h3>
                        <p class="text-xs text-primary-950">Podejmuję decyzje marketingowe na podstawie dokładnej analizy. Dzięki temu osiągam realne rezultaty.</p>
                    </div>
                    <div class="flex-1 flex flex-col p-3 bg-white p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400">
                        <img src={time} alt="Graphic icon of stats" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950">Szybka<br />realizacja</h3>
                        <p class="text-xs text-primary-950">Działam sprawnie i efektywnie – od pomysłu do realizacji w ekspresowym tempie, zawsze na czas!.</p>
                    </div>
                </div>
            </div>
            <div class="absolute z-0 flex justify-center items-center w-full">
                <div class=" w-4/5 bg-stone-100 h-[456px] rounded-full"></div>
            </div>

        </div>
        <div class="w-full flex items-center justify-center pb-24">

            <div class="flex flex-row gap-4 mt-14">
                <Button label="Kilka słów o twórcy" type="orange" />
                <Button label="Przebieg współpracy" type="dark" />
            </div>

        </div>
    </div>
</section>

<section id="services" class="bg-primary-950 justify-center flex relative">


    <svg width="100%" viewBox="0 0 1920 69" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute -top-0.5 w-full left-0 right-0 z-10">
        <path d="M0 0H1920V7.5L0 69V0Z" fill="#FAFAF9"/>
    </svg>        

    <div class="max-w-[1920px] w-full">
        <div class="grid grid-cols-5">
            <div class="col-span-2 py-40 ml-46">
                <div class="flex flex-col">
                    <p class="text-xl text-primary-500 mb-4">Usługi</p>
                    <h3 class="font-display text-4xl-bold text-primary-100 mb-12">Efekty mojej pracy są<br/> doceniane przez klientów</h3>
                    <div class="flex flex-col gap-7">
                        <div class="py-6 px-7 hover:bg-[#4F1811] transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer flex flex-row items-center">
                            <img src={servicesFirst} alt="Graphic icon of stats" class="mr-4" /><p class="text-base text-primary-500 ">Kampania Allegro Ads od zera</p>
                        </div>
                        <div class="py-6 px-7 hover:bg-[#4F1811] transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer flex flex-row items-center">
                            <img src={servicesSecond} alt="Graphic icon of stats" class="mr-4" /><p class="text-base text-primary-500">Analiza wyników i raportowanie</p>
                        </div>
                        <div class="py-6 px-7 hover:bg-[#4F1811] transition-all rounded-[8px] max-w-[440px] hover:cursor-pointer flex flex-row items-center">
                            <img src={servicesThird} alt="Graphic icon of stats" class="mr-4" /><p class="text-base text-primary-500">Optymalizacja kampanii Allegro Ads</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="grid grid-cols-4 ml-14 auto-rows-min">
                    <div class="col-span-1 bg-[#250906] p-6 pt-40 auto-rows-min">
                        <p class=" text-base text-primary-100 mb-4">Tworzę kampanie reklamowe na Allegro od podstaw, dopasowując strategię do Twoich celów biznesowych.</p>
                        <Button label="Porozmawiajmy" />
                    </div>
                    <div class="col-span-2 bg-primary-850 bg-[#4E1B15] px-11 py-8 flex justify-end flex-col">
                        <h4 class="text-6xl-bold text-primary-500 font-display mb-4">525%</h4>
                        <p class="text-base text-primary-100">Średni wzrost sprzedaży dzięki<br />współpracy ze mną</p>
                    </div>
                    <div class="col-span-1 row-span-2 bg-primary-600 overflow-hidden relative">
                        <svg width="2359" height="2360" viewBox="0 0 2359 2360" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-[-300%] top-[-80%] max-w-8xl">
                            <path d="M1634.2 1579.58L1345.48 1575.95C1322.26 1575.68 1300.08 1566.26 1283.77 1549.74C1267.68 1533.45 1258.63 1511.49 1258.58 1488.6L1260.6 1381.53L1334.71 1457.75C1350.31 1473.76 1367.92 1487.67 1387.11 1499.13C1435.36 1527.62 1491.67 1539.39 1547.29 1532.6C1602.91 1525.81 1654.74 1500.85 1694.73 1461.6L1900.8 1260.49C1908.94 1252.39 1918.62 1246 1929.27 1241.71C1939.92 1237.41 1951.32 1235.3 1962.8 1235.48C1974.31 1235.56 1985.69 1237.91 1996.28 1242.41C2006.88 1246.91 2016.47 1253.47 2024.51 1261.7L2239.48 1481.48L2358.76 1364.69L2143.56 1144.77C2120.23 1120.88 2092.43 1101.82 2061.73 1088.69C2031.04 1075.55 1998.06 1068.58 1964.67 1068.19C1931.29 1067.81 1898.16 1074 1867.16 1086.42C1836.17 1098.84 1807.93 1117.25 1784.06 1140.58L1578.22 1341.84C1570 1349.87 1560.26 1356.21 1549.58 1360.48C1538.9 1364.74 1527.48 1366.86 1515.98 1366.7C1492.76 1366.43 1470.59 1357.01 1454.27 1340.48L1380.17 1264.26L1486.25 1267.96C1553.66 1268.69 1618.61 1242.63 1666.83 1195.5C1715.04 1148.38 1742.58 1084.05 1743.4 1016.63L1746.79 727.768C1747.1 704.547 1756.61 682.397 1773.24 666.19C1789.88 649.982 1812.26 641.043 1835.48 641.337L2142.8 644.671L2144.59 477.991L1836.6 473.612C1803.18 473.141 1770.01 479.278 1738.98 491.669C1707.95 504.061 1679.67 522.463 1655.77 545.818C1631.88 569.173 1612.83 597.02 1599.73 627.76C1586.63 658.499 1579.73 691.525 1579.44 724.938L1575.81 1013.66C1575.58 1036.62 1566.31 1058.57 1550.01 1074.74C1533.71 1090.92 1511.7 1100.02 1488.74 1100.08L1382.63 1098.63L1458.7 1024.76C1482.61 1001.4 1501.68 973.565 1514.82 942.836C1527.97 912.107 1534.93 879.089 1535.31 845.669C1535.69 812.249 1529.48 779.082 1517.03 748.063C1504.59 717.043 1486.16 688.778 1462.79 664.884L1261.54 459.045C1245.34 442.401 1236.38 420.018 1236.64 396.791C1236.89 373.564 1246.33 351.382 1262.9 335.096L1481.24 119.278L1364.69 0.138055L1144.91 215.107C1121.02 238.432 1101.97 266.235 1088.83 296.928C1075.69 327.621 1068.72 360.602 1068.34 393.987C1067.95 427.372 1074.14 460.506 1086.56 491.497C1098.98 522.487 1117.39 550.727 1140.73 574.602L1341.84 780.68C1358.29 796.957 1367.61 819.1 1367.74 842.243C1367.7 853.709 1365.38 865.052 1360.9 875.607C1356.42 886.163 1349.88 895.719 1341.67 903.716L1265.45 977.821L1267.39 873.612C1267.86 840.201 1261.72 807.026 1249.33 775.994C1236.94 744.963 1218.54 716.686 1195.18 692.789C1171.83 668.892 1143.98 649.846 1113.24 636.746C1082.5 623.646 1049.48 616.751 1016.07 616.455L727.342 612.826C715.842 612.73 704.474 610.363 693.891 605.86C683.308 601.357 673.719 594.809 665.675 586.589C657.631 578.37 651.289 568.643 647.015 557.966C642.741 547.289 640.619 535.873 640.77 524.373L643.288 216.247L476.609 214.462L473.612 522.305C472.883 589.721 498.942 654.669 546.065 702.886C593.188 751.102 657.522 778.644 724.937 779.462L1013.8 782.851C1025.26 782.925 1036.59 785.291 1047.13 789.81C1057.66 794.329 1067.18 800.91 1075.13 809.165C1091.44 825.808 1100.47 848.246 1100.23 871.544L1098.92 977.418L1025.05 901.341C977.807 853.196 913.408 825.734 845.959 824.968C778.509 824.202 713.503 850.193 665.176 897.252L459.337 1098.5C442.703 1114.7 420.319 1123.63 397.103 1123.33C373.888 1123.03 351.741 1113.53 335.53 1096.91L118.993 878.136L0.137391 994.207L215.106 1213.99C230.705 1230 248.32 1243.91 267.508 1255.37C315.71 1283.78 371.933 1295.51 427.473 1288.75C483.014 1281.98 534.775 1257.09 574.743 1217.94L780.821 1016.83C797.427 1000.68 819.749 991.774 842.905 992.047C866.062 992.319 888.168 1001.75 904.389 1018.28L978.494 1094.5L872.619 1093.18C805.182 1092.57 740.245 1118.69 692.024 1165.84C643.802 1212.98 616.222 1277.31 615.321 1344.75L611.692 1633.47C611.424 1656.68 601.958 1678.83 585.374 1695.06C568.79 1711.29 546.443 1720.28 523.239 1720.05L215.679 1716.57L213.753 1883.49L521.312 1886.96C588.772 1887.66 653.75 1861.56 701.988 1814.39C750.226 1767.23 777.783 1702.86 778.611 1635.4L782 1346.53C782.062 1334.92 784.427 1323.43 788.958 1312.73C793.489 1302.04 800.096 1292.34 808.397 1284.22C816.698 1276.09 826.527 1269.69 837.318 1265.39C848.108 1261.08 859.644 1258.96 871.26 1259.15L977.276 1260.22L901.057 1334.33C877.134 1357.72 858.053 1385.59 844.905 1416.35C831.757 1447.12 824.799 1480.17 824.428 1513.63C824.057 1547.08 830.281 1580.28 842.745 1611.33C855.208 1642.38 873.666 1670.67 897.065 1694.58L1098.18 1900.66C1106.24 1908.85 1112.6 1918.55 1116.89 1929.21C1121.18 1939.86 1123.32 1951.26 1123.19 1962.75C1123.05 1974.24 1120.64 1985.58 1116.1 1996.14C1111.56 2006.69 1104.97 2016.24 1096.72 2024.23L878.277 2239.67L994.924 2359.19L1214.85 2143.98C1238.77 2120.66 1257.86 2092.84 1271.01 2062.12C1284.16 2031.4 1291.12 1998.39 1291.49 1964.98C1291.86 1931.57 1285.62 1898.41 1273.15 1867.42C1260.67 1836.42 1242.2 1808.19 1218.79 1784.34L1017.54 1578.5C1001.41 1561.84 992.53 1539.47 992.829 1516.27C993.128 1493.08 1002.59 1470.95 1019.14 1454.7L1095.36 1380.59L1091.9 1486.81C1091.28 1554.25 1117.4 1619.19 1164.55 1667.41C1211.7 1715.63 1276.03 1743.21 1343.46 1744.11L1632.33 1747.5C1655.55 1747.81 1677.7 1757.32 1693.91 1773.95C1710.11 1790.59 1719.05 1812.97 1718.76 1836.19L1715.43 2143.51L1882.34 2145.44L1885.68 1838.12C1886.19 1804.62 1880.08 1771.35 1867.71 1740.21C1855.34 1709.08 1836.94 1680.69 1813.58 1656.67C1790.22 1632.66 1762.35 1613.49 1731.57 1600.26C1700.79 1587.03 1667.7 1580 1634.2 1579.58Z" fill="#2E0C08"/>
                        </svg>                            
                    </div>
                    <div class="col-span-3 bg-[#2E0C08] py-12 flex items-center justify-center"><img class="max-w-5/6" src={statsFirst} alt="Image of header with bunch of graphics showing products and excited woman holding phone" /></div>
                </div>
            </div>
        </div>
    </div>
</section>

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
                        <Button label="Kontakt do mnie" type="orange" />
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

                            <Button label="Kontakt do mnie" type="orange" classes="flex-1 flex mt-4 mb-2 mr-4" />
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
  

<section id="steps" class="py-16">

    <div class="flex justify-center relative">

        <div class="container px-32 mb-16">

            <div id="steps-container">
            <h2 class="text-4xl-bold font-display text-primary-950 text-center">Od 12 lat osobiście realizuje i wdrażam<br/> skuteczne strategie marketingowe na Allegro</h2>
            <p class="text-base text-primary-950 mt-8 text-center">Poznaj 4 etapy! Udowodnię Ci, że dzięki nim Twoje konto<br/> na Allegro może generować dużo lepsze wyniki!</p>
    
            <div class="mt-8 grid grid-cols-4 mt-24">
                <div class="col-span-1 flex justify-center relative">
                    <div class="px-4 py-3 rounded-xl shadow-hover font-display text-xl-bold text-primary-950 gap-4 inline-flex opacity-40" id="step-1-label"><span class="text-primary-600">1</span> Etap</div>
                    <div class="w-0 h-0.5 bg-primary-500 absolute left-[75%] top-1/2 z-10" id="step-1-complete"></div>
                    <div class="w-1/2 h-0.5 bg-stone-300 absolute -right-1/4 top-1/2 z-0"></div>
                </div>
                <div class="col-span-1 flex justify-center relative">
                    <div class="px-4 py-3 rounded-xl shadow-hover font-display text-xl-bold text-primary-950 gap-4 inline-flex opacity-30" id="step-2-label"><span class="text-primary-600">2</span> Etap</div>
                    <div class="w-0 h-0.5 bg-primary-500 absolute left-[75%] top-1/2 z-10" id="step-2-complete"></div>
                    <div class="w-1/2 h-0.5 bg-stone-300 absolute -right-1/4 top-1/2 z-0"></div>
                </div>
                <div class="col-span-1 flex justify-center relative">
                    <div class="px-4 py-3 rounded-xl shadow-hover font-display text-xl-bold text-primary-950 gap-4 inline-flex opacity-20" id="step-3-label"><span class="text-primary-600">3</span> Etap</div>
                    <div class="w-0 h-0.5 bg-primary-500 absolute left-[75%] top-1/2 z-10" id="step-3-complete"></div>
                    <div class="w-1/2 h-0.5 bg-stone-300 absolute -right-1/4 top-1/2 z-0"></div>
                </div>
                <div class="col-span-1 flex justify-center">
                    <div class="px-4 py-3 rounded-xl shadow-hover font-display text-xl-bold text-primary-950 gap-4 inline-flex opacity-10" id="step-4-label"><span class="text-primary-600">4</span> Etap</div>
                </div>
            </div>
    
            <div class="mt-8 grid grid-cols-4 mt-12">
                <div class="col-span-1 flex justify-center mx-4">
                    <div id="step-1-box" class="rounded-2xl w-full h-96 bg-[url(/src/lib/assets/step-1.png)] bg-center bg-cover relative overflow-hidden z-10 opacity-0 translate-y-3">
                        <div class="absolute top-0 h-2/3 w-full bg-linear-to-b from-zinc-900/80 to-zinc-900/0 -z-1"></div>
                        <p class="z-20 text-xl-bold mx-6 my-6 font-display text-white">Zapoznanie się z Twoim biznesem i zrozumienie go w całości</p>
                        <p id="step-text" class="z-20 text-xs mx-6 my-6 text-white opacity-0 translate-y-2">Przeprowadzamy szczegółową analizę produktów, aby lepiej zrozumieć ich unikalne cechy i potrzeby rynku. Na tej podstawie tworzymy dopasowaną strategię marketingową, która skutecznie przyciąga klientów
                            i maksymalizuje wyniki sprzedaży.</p>
                        <div class="absolute right-3 bottom-3">
                            <div id="step-info" onclick={() => toggleStateBox(0)} class="w-12 h-12 bg-primary-600 rounded-full flex justify-center items-center hover:cursor-pointer active:scale-[0.98] active:transition-all hover:scale-[1.05]">
                                <svg id="step-info-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                
                            </div>
                        </div>
                        <div id="step-box-bg" class="bg-primary-600 absolute top-0 right-0 left-0 bottom-0 -z-1 opacity-0"></div>
                    </div>
                </div>
                <div class="col-span-1 flex justify-center mx-4 mt-11">
                    <div id="step-2-box" class="rounded-2xl w-full h-96 bg-[url(/src/lib/assets/step-2.png)] bg-center bg-cover relative overflow-hidden z-10 opacity-0 translate-y-3">
                        <div class="absolute top-0 h-2/3 w-full bg-linear-to-b from-zinc-900/80 to-zinc-900/0 -z-1"></div>
                        <p class="z-20 text-xl-bold mx-6 my-6 font-display text-white">Analiza produktów oraz zbudowanie odpowiedniej strategii marketingowej</p>
                        <p id="step-text" class="z-20 text-xs mx-6 my-6 text-white opacity-0 translate-y-2">Przeprowadzamy szczegółową analizę produktów, aby lepiej zrozumieć ich unikalne cechy i potrzeby rynku. Na tej podstawie tworzymy dopasowaną strategię marketingową, która skutecznie przyciąga klientów
                            i maksymalizuje wyniki sprzedaży.</p>
                        <div class="absolute right-3 bottom-3">
                            <div id="step-info" onclick={() => toggleStateBox(1)}  class="w-12 h-12 bg-primary-600 rounded-full flex justify-center items-center hover:cursor-pointer active:scale-[0.98] active:transition-all hover:scale-[1.05]">
                                <svg id="step-info-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                
                            </div>
                        </div>
                        <div id="step-box-bg" class="bg-primary-600 absolute top-0 right-0 left-0 bottom-0 -z-1 opacity-0"></div>
                    </div>
                </div>
                <div class="col-span-1 flex justify-center mx-4">
                    <div id="step-3-box" class="rounded-2xl w-full h-96 bg-[url(/src/lib/assets/step-3.png)] bg-center bg-cover relative overflow-hidden z-10 opacity-0 translate-y-3">
                        <div class="absolute top-0 h-2/3 w-full bg-linear-to-b from-zinc-900/80 to-zinc-900/0 -z-1"></div>
                        <p class="z-20 text-xl-bold mx-6 my-6 font-display text-white">Wdrożenie opracowanej strategii i optymalizacja całego procesu marketingu</p>
                        <p id="step-text" class="z-20 text-xs mx-6 my-6 text-white opacity-0 translate-y-2">Przeprowadzamy szczegółową analizę produktów, aby lepiej zrozumieć ich unikalne cechy i potrzeby rynku. Na tej podstawie tworzymy dopasowaną strategię marketingową, która skutecznie przyciąga klientów
                            i maksymalizuje wyniki sprzedaży.</p>
                        <div class="absolute right-3 bottom-3">
                            <div id="step-info" onclick={() => toggleStateBox(2)}  class="w-12 h-12 bg-primary-600 rounded-full flex justify-center items-center hover:cursor-pointer active:scale-[0.98] active:transition-all hover:scale-[1.05]">
                                <svg id="step-info-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                
                            </div>
                        </div>
                        <div id="step-box-bg" class="bg-primary-600 absolute top-0 right-0 left-0 bottom-0 -z-1 opacity-0"></div>
                    </div>
                </div>
                <div class="col-span-1 flex justify-center mx-4 mt-11">
                    <div id="step-4-box" class="rounded-2xl w-full h-96 bg-[url(/src/lib/assets/step-4.png)] bg-center bg-cover relative overflow-hidden z-10 opacity-0 translate-y-3">
                        <div class="absolute top-0 h-2/3 w-full bg-linear-to-b from-zinc-900/80 to-zinc-900/0 -z-1"></div>
                        <p class="z-20 text-xl-bold mx-6 my-6 font-display text-white">Analiza uzyskanych wyników i planowanie przyszłych działań</p>
                        <p id="step-text" class="z-20 text-xs mx-6 my-6 text-white opacity-0 translate-y-2">Przeprowadzamy szczegółową analizę produktów, aby lepiej zrozumieć ich unikalne cechy i potrzeby rynku. Na tej podstawie tworzymy dopasowaną strategię marketingową, która skutecznie przyciąga klientów
                            i maksymalizuje wyniki sprzedaży.</p>
                        <div class="absolute right-3 bottom-3">
                            <div id="step-info" onclick={() => toggleStateBox(3)}  class="w-12 h-12 bg-primary-600 rounded-full flex justify-center items-center hover:cursor-pointer active:scale-[0.98] active:transition-all hover:scale-[1.05]">
                                <svg id="step-info-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                
                            </div>
                        </div>
                        <div id="step-box-bg" class="bg-primary-600 absolute top-0 right-0 left-0 bottom-0 -z-1 opacity-0"></div>
                    </div>
                </div>
            </div>
            </div>
    
        </div>

    </div>
    
</section>

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
                    <Button label="Zacznijmy działać" type="orange" />
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
                        <div><Button label="Zamów audyt" type="orange" /></div>
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
                        <Button label="Druga rozmowa" type="dark" />
                        <Button label="Napisz do mnie" type="orange" />
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
                        <Button label="Trzecia rozmowa" type="dark" />
                        <Button label="Napisz do mnie" type="orange" />
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
                        <Button label="Zacznijmy działać" type="dark" />
                        <Button label="Napisz do mnie" type="orange" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<div class=" w-full overflow-hidden pb-18 bg-white">
    <svg width="1920" height="53" viewBox="0 0 1920 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 52L1920 0.5" stroke="#E7E7E7"/>
    </svg>
</div>

<section id="pricing" class="flex justify-center relative pb-32 pt-12 bg-white">
    <div class="container px-24">
        <h2 class="text-5xl-bold text-primary-950 font-display pb-8 text-center">Pakiety współpracy</h2>

        <div class="grid grid-cols-4 gap-6 mt-18">
            <div class="col-span-1"></div>
            <div class="col-span-1 flex items-end">
                <div class="p-7 rounded-2xl bg-stone-50 h-80 flex flex-col justify-between">
                    <div class="gap-3 flex flex-col">
                        <div class="flex flex-row gap-2 items-center">
                            <div class="flex justify-center items-center w-[82px] h-[70px] z-20">
                                <img src={pricingFirst} alt="Graphic icon of stats" />
                            </div>
                            <h5 class="text-2xl-bold font-display text-primary-600 relative -left-[20px] -top-[2px] z-10">Specjalista</h5>
                        </div>
                        <p class="text-xs text-primary-950">Pakiet idealny do przetestowania moich usług.</p>
                    </div>
                    <div class="relative mt-auto mb-3">
                        <div class="px-3 py-2 rounded-md bg-primary-100 text-primary-600 flex flex-row gap-3 justify-center text-xs items-center">
                            <img src={heart} alt="Graphic icon of stats" class="drop-shadow-xl" />
                            Pierwszy darmowy miesiąc</div>
                    </div>
                    <Button label="Napisz do mnie" type="orange" />
                </div>
            </div>
            <div class="col-span-1 flex flex-col items-center">
                <div class="px-5 py-2 bg-primary-600 gap-2 w-4/5 rounded-t-xl flex flex-row text-primary-50 text-sm-bold justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="#FFF5ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.477 12.8901L17 22.0001L12 19.0001L7 22.0001L8.523 12.8901" stroke="#FFF5ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Najchętniej wybierany</div>
                <div class="p-7 rounded-2xl bg-white h-80 flex flex-col justify-between border-4 border-primary-600 shadow-hover">
                    <div class="gap-3 flex flex-col">
                        <div class="flex flex-row gap-2 items-center">
                            <div class="flex justify-center items-center w-[82px] h-[70px]">
                                <img src={pricingSecond} alt="Graphic icon of stats" />
                            </div>
                            <h5 class="text-2xl-bold font-display text-primary-600">Manager</h5>
                        </div>
                        <p class="text-xs text-primary-950">Zaufałeś moim umiejętnościom i chcesz rozwinąć swoją firmę jeszcze bardziej!</p>
                    </div>
                    <div class="relative mt-auto mb-3">
                        <div class="px-3 py-2 rounded-md bg-primary-100 text-primary-600 flex flex-row gap-3 justify-center text-xs items-center">
                            <img src={heart} alt="Graphic icon of stats" class="drop-shadow-xl" />
                            Pierwszy darmowy miesiąc</div>
                    </div>
                    <Button label="Napisz do mnie" type="orange" />
                </div>
            </div>
            <div class="col-span-1 flex flex-col items-center">
                <div class="px-5 py-2 bg-primary-950 gap-2 w-4/5 rounded-t-xl flex flex-row text-primary-50 text-sm-bold justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0045 5.97223 15.9879C5.43516 15.9712 4.91088 16.1536 4.5 16.4998Z" stroke="#F36020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 14.9998L9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998C14.7369 13.7985 13.3968 14.4685 12 14.9998Z" stroke="#F36020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12H4C4 12 4.55 8.97002 6 8.00002C7.62 6.92002 11 8.00002 11 8.00002" stroke="#F36020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13" stroke="#F36020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                        
                    Najkorzystniejszy wybór</div>
                <div class="p-7 rounded-2xl bg-primary-950 h-80 flex flex-col justify-between">
                    <div class="gap-3 flex flex-col">
                        <div class="flex flex-row gap-3 items-center">
                            <div class="flex justify-center items-center w-[82px] h-[70px]">
                                <img src={pricingThird} alt="Graphic icon of stats" />
                            </div>
                            <h5 class="text-2xl-bold font-display text-primary-500">Dyrektor</h5>
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

        <div class="grid grid-cols-4 mt-4">
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

        <div class="grid grid-cols-4 mt-2">
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

        <div class="grid grid-cols-4 mt-2">
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

        <div class="grid grid-cols-4 mt-2">
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

        <div class="grid grid-cols-4 mt-2">
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

        <div class="grid grid-cols-4 mt-2">
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

        <div class="grid grid-cols-4 mt-2">
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
</section>
    
<section id="contact" class="flex justify-center relative">
    <div class="max-w-[1920px] w-full z-0">
        <div class="grid grid-cols-4">
            <div class="col-span-1">
                <div class="flex flex-col h-full">
                    <div class="flex-1"><img src={contactBgFirst} alt="Graphic icon of stats" class="w-full h-full" /></div>
                    <div class="flex-2"><img src={contactBgSecond} alt="Graphic icon of stats" class="w-full h-full" /></div>
                    <div class="h-full relative">
                        <div class="absolute h-full w-full bg-primary-950"></div>
                    </div>
                </div>
            </div>
            <div class="col-span-3 py-20 px-24 mr-24">
                <h2 class="text-4xl-bold font-display text-primary-950">Czy chcesz, aby Twoje konto na Allegro</h2>
                <div class="flex items-center gap-3 relative -top-3">
                    <h2 class="text-4xl-bold font-display text-primary-950">przynosiło większe zyski?</h2> <img src={phone} alt="Graphic icon of stats" /><h2 class="text-4xl-bold font-display text-primary-950">Napisz do mnie!</h2>
                </div>
                <div class="flex flex-row gap-4 items-center">
                    <h3 class="text-2xl-bold font-display text-primary-950">Lub zadzwoń</h3>
                    <div class="border-[1px] border-stone-300 rounded-full p-1 inline-flex items-center gap-2">
                        <div class="h-12 w-12 bg-stone-200 rounded-full flex justify-center items-center"><Phone color="#410F09" weight="regular" size="24" /></div>
                        <p class="text-sm text-primary-950 mr-2.5">+48 123 123 123</p>
                    </div>
                </div>

                <!-- Contact forms -->
                <div class="flex flex-row">
                    <div class="flex bg-stone-50 rounded-l-2xl p-8 flex-col shadow-hover relative z-10 mt-14 w-full">

                        <div class="flex flex-row gap-5">
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
                        <div class="flex flex-row gap-5 py-4">
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
    
                        <div class="mt-6"><Button label="Wyślij wiadomość" type="orange" /></div>
    
                        <div class="absolute top-0 right-0 bottom-0 left-0 rounded-l-[20px] bg-stone-50 -z-1"></div>
                        <div class="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-l-[24px] bg-stone-700/10 backdrop-blur-sm -z-2"></div>
    
                    </div>
                    <div class="py-8 px-9 rounded-r-2xl flex flex-col z-10 relative shadow-hover bg-stone-50 mt-14">
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
                        <div><Button label="Zamów audyt" type="orange" /></div>
                        <div class="flex flex-row gap-2 mt-6">
                            <div class="w-8 h-0.5 bg-primary-600"></div>
                            <div class="w-8 h-0.5 bg-neutral-300"></div>
                        </div>
    
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-stone-50 backdrop-blur-sm -z-1 rounded-r-[14px]"></div>
                        <div class="absolute -top-1 -bottom-1 -left-1 -right-1 bg-stone-700/10 backdrop-blur-sm -z-10 rounded-r-[16px]"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<footer id="footer" class="pt-12 bg-white">
    <div class="pb-8 border-b-[1px] border-stone-200 flex justify-center w-full">
        <div class="container">
            <div class="flex flex-row justify-between w-full ">
                <img src={logo} alt="Logo" class="h-[60px]" />
                <div class="flex flex-row gap-3">
                    <div class="border-[1px] border-stone-300 rounded-full p-1 inline-flex items-center gap-2">
                        <div class="h-12 w-12 bg-stone-200 rounded-full flex justify-center items-center"><Envelope color="#410F09" weight="regular" size="24" />   </div>
                        <p class="text-sm text-primary-950 mr-2.5">kontakt@adshelp.pl</p>
                    </div>
                    <div class="border-[1px] border-stone-300 rounded-full p-1 inline-flex items-center gap-2">
                        <div class="h-12 w-12 bg-stone-200 rounded-full flex justify-center items-center"><Phone color="#410F09" weight="regular" size="24" /></div>
                        <p class="text-sm text-primary-950 mr-2.5">+48 123 123 123</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pb-8 mt-16 border-b-[1px] border-stone-200 flex justify-center w-full">
        <div class="container">
            <div class="flex flex-row justify-between w-full">
                <ul class="flex flex-row gap-12">
                    <li class="text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">O mnie</a></li>
                    <li class="text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">Dlaczego warto</a></li>
                    <li class="text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">Usługi</a></li>
                    <li class="text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">Blog</a></li>
                    <li class="text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">Kontakt</a></li>
                </ul>
                <div class="flex flex-row gap-3">
                    <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[19px]" src={ig} alt="Instagram icon" /></div>
                    <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="h-[19px]" src={fb} alt="Facebook icon" /></div>
                    <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[21px]" src={yt} alt="Youtube icon" /></div>
                </div>
            </div>
            <div class="flex w-full flex-col justify-end items-end mt-12">
                <div class="inline-flex"><a href="#" class="text-sm text-stone-500 mb-3 hover:underline hover:text-stone-800 transition-all">Polityka prywatności</a></div>
                <div class="inline-flex"><a href="#" class="text-sm text-stone-500 hover:underline hover:text-stone-800 transition-all">Ciasteczka</a></div>
            </div>
            <div class="flex w-full justify-between mt-12">
                <p class="text-sm text-stone-500">Adshelp @ 2025</p>
                <p class="text-sm text-stone-500">Wszelkie prawa zastrzeżone</p>
                <div class="inline-flex"><a href="#" class="text-sm text-stone-500 mb-3 hover:underline hover:text-stone-800 transition-all">Projekt i wdrożenie: Hubert Kruk</a></div>
            </div>
        </div>
    </div>

    <div class="py-6 flex justify-center">
        <div class="container flex justify-center">
            <p class="text-xs text-stone-500 w-1/2 text-center">AdsHelp to jednoosobowa agencja marketingowa, specjalizująca się w tworzeniu i optymalizacji kampanii reklamowych na Allegro. Pomagam klientom zwiększyć widoczność ich produktów, poprawić wyniki sprzedaży i osiągnąć lepszy zwrot z inwestycji (ROI). Dzięki indywidualnemu podejściu, analizie danych i doświadczeniu, skutecznie wspieram marki w dotarciu do odpowiednich klientów na Allegro, optymalizując kampanie pod kątem efektywności i rentowności.</p>
        </div>
    </div>

</footer>
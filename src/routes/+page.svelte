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

    // Components
    import Button from '$lib/components/Button.svelte';
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
                <div class=" border-2 border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[19px]" src={ig} alt="Instagram icon" /></div>
                <div class=" border-2 border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="h-[19px]" src={fb} alt="Facebook icon" /></div>
                <div class=" border-2 border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[21px]" src={yt} alt="Youtube icon" /></div>
            </div>
            <Button label="Zrealizujmy kampanię" type="dark" />
        </div>
    </div>
</nav>
<header id="header" class="header flex justify-center">
    <div class="container pt-24 pb-24 flex justify-between gap-3.5 items-center">
        <div class="flex-1 mb-24">
            <h1 class=" text-6xl-bold font-display text-primary-950 pr-10">Skuteczne kampanie <span class="text-primary-600">Allegro ads</span> dla Twojego e-commerce</h1>
            <p class=" text-base text-primary-950 mt-8">Zostaw swoje dane po darmowy audyt.</p>
            <div class=" flex flex-row gap-3 mt-4">
                <input
                id="apiKey"
                class="h-input rounded-lg transition-shadow shadow-card min-w-[350px] flex bg-background placeholder:text-foreground-alt/50 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center px-6 py-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                placeholder="Wpisz swoją nazwę allegro"
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
                        <p class="text-xs text-primary-950">Każdy projekt traktuję unikalnie, dopasowując strategię do potrzeb Twojego biznesu.</p>
                    </div>
                    <div class="flex-1 flex flex-col p-3 bg-white p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400">
                        <img src={data} alt="Graphic icon of stats" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950">Wyniki oparte<br/>na danych</h3>
                        <p class="text-xs text-primary-950">Podejmuję decyzje marketingowe na podstawie dokładnej analizy, aby osiągać realne rezultaty.</p>
                    </div>
                    <div class="flex-1 flex flex-col p-3 bg-white p-7 rounded-[12px] gap-3 max-w-64 hover:shadow-hover ease-in-out duration-400">
                        <img src={time} alt="Graphic icon of stats" class="w-full flex" />
                        <h3 class="text-xl-bold font-display text-primary-950">Szybka<br />realizacja</h3>
                        <p class="text-xs text-primary-950">Podejmuję decyzje marketingowe na podstawie dokładnej analizy, aby osiągać realne rezultaty.</p>
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
            <div class="col-span-2 py-40 ml-40">
                <div class="flex flex-col">
                    <p class="text-xl text-primary-500 mb-4">Usługi</p>
                    <h3 class="font-display text-4xl-bold text-primary-100 mb-12">Efekty mojej pracy<br />doceniają klienci</h3>
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
                        <h4 class="text-6xl-bold text-primary-500 font-display mb-4">510%</h4>
                        <p class="text-base text-primary-100">Średni wzrost sprzedaży z moją współpracą</p>
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

                    <p class="font-display text-xl-bold text-primary-100 mt-14">Ekspert z bogatym portfolio kampanii Allegro Ads, który dzięki doświadczeniu i indywidualnemu podejściu do każdego klienta, zapewnia skuteczność, której nie oferują masowe agencje.</p>
                    <div class="flex flex-row gap-4 mt-8">
                        <Button label="Kontakt do mnie" type="orange" />
                        <Button label="Zamów audyt" />
                    </div>
                </div>
            </div>
            <div class="col-span-2 flex flex-col gap-14 items-center">
                <h4 class="text-3xl-bold font-display text-primary-100 text-center">Czym się wyróżniam od<br />dużych agencji?</h4>
                <div class="flex flex-row max-w-2/3">

                    <div class="flex flex-col gap-8">
                        <img src={logoWhite} alt="Logo" class=" h-10" />
                        <div class="flex flex-col bg-[#2E0C08] py-3 pl-4 gap-2 border-2 border-primary-500 rounded-l-2xl rounded-br-2xl">
                            <div class="flex flex-row px-2 py-3 items-center">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">W pełni poświęcony czas dla klienta, nie tylko kilka kilka godzin tygodniowo</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-l-md items-center">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">W pełni indywidualne podejście<br/>do klienta</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center">
                                <img src={tick} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Wysoki stopień zaangażowania<br />i relacja z klientem</span>
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
                        <div class="flex flex-col bg-[#4E1B15] py-3 pr-6 gap-2 border-2 border-primary-50/5 rounded-r-xl">
                            <div class="flex flex-row px-2 py-3 items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Sztywno ustawiony przedział czasu tygodniowo</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Brak indywidualne podejście tylko sztywno zorganizowane i procesowe</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Zformalizowany proces komunikacji oraz brak bezpośredniej relacji z specjalistami</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Sztywno ustandaryzowane pakiety usług i proces</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
                                <span class="text-xs text-primary-100">Wysoki koszt usług</span>
                            </div>
                            <div class="flex flex-row px-2 py-3 bg-[#3E140F] rounded-r-md items-center pl-6">
                                <img src={tickFalse} alt="Graphic icon of stats" class="mr-3" />
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

<section id="steps" class="flex justify-center relative py-32">
    <div class="container px-32">
        <h2 class="text-4xl-bold font-display text-primary-950 text-center">Od 12 lat osobiście realizuje i wdrażam<br/> skuteczne strategie marketingowe na Allegro</h2>
        <p class="text-base text-primary-950 mt-8 text-center">Poznaj 4 etapy - dzięki którym udowodnię Ci, że Twoje<br /> konto na Allegro może generować dużo lepsze wyniki!</p>
        <div class="mt-8 grid grid-cols-4 mt-24">
            <div class="col-span-1 flex justify-center">
                <div class="px-4 py-3 rounded-xl shadow-hover font-display text-xl-bold text-primary-950 gap-4 inline-flex"><span class="text-primary-600">1</span> Etap</div>
            </div>
            <div class="col-span-1 flex justify-center">
                <div class="px-4 py-3 rounded-xl shadow-hover font-display text-xl-bold text-primary-950 gap-4 inline-flex"><span class="text-primary-600">2</span> Etap</div>
            </div>
            <div class="col-span-1 flex justify-center">
                <div class="px-4 py-3 rounded-xl shadow-hover font-display text-xl-bold text-primary-950 gap-4 inline-flex opacity-50"><span class="text-primary-600">3</span> Etap</div>
            </div>
            <div class="col-span-1 flex justify-center">
                <div class="px-4 py-3 rounded-xl shadow-hover font-display text-xl-bold text-primary-950 gap-4 inline-flex opacity-50"><span class="text-primary-600">4</span> Etap</div>
            </div>
        </div>
    </div>
</section>




<!-- <div class="flex flex-col">
    <h1 class="text-xs bg-primary-600">Testowy tekst</h1>
    <h1 class="text-sm">Testowy tekst</h1>
    <h1 class="text-base">Testowy tekst</h1>
    <h1 class="text-lg">Testowy tekst</h1>
    <h1 class="text-xl-normal font-display">Testowy tekst</h1>
    <h1 class="text-2xl">Testowy tekst</h1>
    <h1 class="text-3xl-bold font-display">Testowy tekst</h1>
    <h1 class="text-4xl">Testowy tekst</h1>
    <h1 class="text-5xl">Testowy tekst</h1>
    <h1 class="text-6xl">Testowy tekst</h1>
    <h1 class="text-7xl">Testowy tekst</h1>
    <h1 class="text-8xl font-display bg-primary-600">Testowy tekst</h1>
</div> -->


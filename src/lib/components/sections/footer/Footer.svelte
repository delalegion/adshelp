<script>
    // Images
    import logo from '$lib/assets/logo.svg';
    import fb from '$lib/assets/fb.svg';
    import ig from '$lib/assets/ig.svg';
    import yt from '$lib/assets/yt.svg';

    // Icons
    import Envelope from "phosphor-svelte/lib/Envelope";
    import Phone from "phosphor-svelte/lib/Phone";
</script>

<footer id="footer" class="pt-12 bg-white">
    <div class="pb-8 border-b-[1px] border-stone-200 flex justify-center w-full">
        <div class="container px-12">
            <div class="flex flex-col max-md:gap-8 md:flex-row justify-center items-center md:justify-between w-full ">
                <img src={logo} alt="Logo" class="h-[50px] md:h-[60px]" />
                <div class="flex flex-col min-[500px]:flex-row gap-3">
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

    <div class="pb-4 md:pb-8 mt-8 md:mt-16 border-b-[1px] border-stone-200 flex justify-center w-full">
        <div class="container px-6 min-[500px]:px-12">
            <div class="flex flex-col min-[500px]:flex-row justify-center min-[500px]:justify-between w-full">
                <ul class="flex flex-row flex-wrap gap-x-4 gap-y-2 min-[500px]:gap-8 lg:gap-12 max-[500px]:justify-center">
                    <li class="text-lg lg:text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">O mnie</a></li>
                    <li class="text-lg lg:text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">Dlaczego warto</a></li>
                    <li class="text-lg lg:text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">Usługi</a></li>
                    <li class="text-lg lg:text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">Blog</a></li>
                    <li class="text-lg lg:text-2xl text-primary-950 active:scale-[0.98] active:transition-all"><a href="/" class="transition-all py-3 rounded-full hover:opacity-75">Kontakt</a></li>
                </ul>
                <div class="flex flex-row gap-3 max-[500px]:mt-6 max-[500px]:justify-center">
                    <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[19px]" src={ig} alt="Instagram icon" /></div>
                    <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="h-[19px]" src={fb} alt="Facebook icon" /></div>
                    <div class="border-[1px] hover:border-[2px] border-stone-300 border-solid rounded-full w-[48px] h-[48px] flex items-center justify-center hover:scale-105 hover:border-primary-950 active:scale-95 hover:transition-all hover:cursor-pointer"><img class="w-[21px]" src={yt} alt="Youtube icon" /></div>
                </div>
            </div>
            <div class="flex w-full flex-col min-[500px]:justify-end items-center min-[500px]:items-end mt-6 md:mt-12">
                <div class="inline-flex"><a href="#" class="text-sm text-stone-500 mb-3 hover:underline hover:text-stone-800 transition-all">Polityka prywatności</a></div>
                <div class="inline-flex"><a href="#" class="text-sm text-stone-500 hover:underline hover:text-stone-800 transition-all">Ciasteczka</a></div>
            </div>
            <div class="flex w-full justify-center min-[500px]:justify-between mt-12 flex-wrap max-[500px]:gap-2 max-[500px]:items-center">
                <p class="text-xs md:text-sm text-stone-500">Adshelp @ 2025</p>
                <p class="text-xs md:text-sm text-stone-500 mx-4">Wszelkie prawa zastrzeżone</p>
                <div class="inline-flex"><a href="#" class="text-xs md:text-sm text-stone-500 mb-3 hover:underline hover:text-stone-800 transition-all">Projekt i wdrożenie: Hubert Kruk</a></div>
            </div>
        </div>
    </div>

    <div class="py-6 flex justify-center">
        <div class="container px-12 flex justify-center">
            <p class="text-xs text-stone-500 lg:w-1/2 text-center">AdsHelp to jednoosobowa agencja marketingowa, specjalizująca się w tworzeniu i optymalizacji kampanii reklamowych na Allegro. Pomagam klientom zwiększyć widoczność ich produktów, poprawić wyniki sprzedaży i osiągnąć lepszy zwrot z inwestycji (ROI). Dzięki indywidualnemu podejściu, analizie danych i doświadczeniu, skutecznie wspieram marki w dotarciu do odpowiednich klientów na Allegro, optymalizując kampanie pod kątem efektywności i rentowności.</p>
        </div>
    </div>

</footer>
<script>
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
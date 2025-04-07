<script>
    import noArticlesIcon from '$lib/assets/x-3d-icon-small.png'
    import { fly } from 'svelte/transition';
</script>

<div class="flex flex-col gap-6 justify-center w-full items-center my-12" transition:fly={{ y: 10, opacity: 0 }}>
    <img src={noArticlesIcon} alt="No found 3d icon" class="max-w-[130px]" />
    <h1 class="text-xl-bold font-display text-primary-600 text-center">Brak artykułów pod<br/> wskazanymi kryteriami.</h1>
</div>
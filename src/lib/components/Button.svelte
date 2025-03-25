<script>
    import { Button } from "bits-ui";

    let { label = "Kontakt do mnie!", theme = "primary", classes, type = "button", onclick } = $props();
</script>

{#if theme === "dark"}
    <a
        class="{classes} rounded-[8px] transition-colors bg-primary-950 text-background shadow-mini hover:bg-primary-900 inline-flex
        lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm
        active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" {type} {onclick}
    >
        { label }
    </a>    
{:else if theme === "orange"}
    <button
        class="{classes} rounded-[8px] transition-colors bg-primary-600 text-background shadow-mini hover:bg-primary-900 inline-flex
        lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm text-primary-50
        active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" {type} {onclick}
    >
        { label }
    </button>  
{:else}
    <a
        class="{classes} rounded-[8px] transition-colors bg-[#FFF5ED]/25 text-background shadow-mini hover:bg-[#FFF5ED]/15 inline-flex
        lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm
        active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" {type} {onclick}
    >
        { label }
    </a>  
{/if}


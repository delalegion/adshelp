<script lang="ts">
    let { label = "Kontakt do mnie!", theme = "primary", classes = "", type = "button", onclick = null, href = null, itemprop = null  } = $props();
</script>

{#if theme === "dark"}
    {#if type === "submit"}
        <button
            class="{classes} rounded-[8px] transition-colors bg-primary-950 shadow-mini hover:bg-primary-900 active:bg-primary-800 inline-flex
            lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm text-primary-50
            active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" type={type} {onclick} {itemprop}
        >
            { label }
        </button>  
    {:else}
        <a role="button"
            class="{classes} rounded-[8px] transition-colors bg-primary-950 shadow-mini hover:bg-primary-900 active:bg-primary-800 inline-flex
            lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm text-primary-50
            active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" type={type} {onclick} {href} {itemprop}
        >
            { label }
        </a> 
    {/if}
{:else if theme === "orange"}
    {#if type === "submit"}
        <button
            class="{classes} rounded-[8px] transition-colors bg-primary-600 shadow-mini hover:bg-primary-700 active:bg-primary-800 inline-flex
            lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm text-primary-50
            active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" type={type} {onclick} {itemprop}
        >
            { label }
        </button>  
    {:else}
        <a role="button"
            class="{classes} rounded-[8px] transition-colors bg-primary-600 shadow-mini hover:bg-primary-700 active:bg-primary-800 inline-flex
            lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm text-primary-50
            active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" type={type} {onclick} {href} {itemprop}
        >
            { label }
        </a>  
    {/if}
{:else}
    {#if type === "submit"}
        <button
            class="{classes} rounded-[8px] transition-colors bg-[#FFF5ED]/25 shadow-mini hover:bg-[#FFF5ED]/15 active:bg-[#FFF5ED]/10 inline-flex
            lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm text-primary-50
            active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" type={type} {onclick} {itemprop}
        >
            { label }
        </button>  
    {:else}
        <a role="button"
            class="{classes} rounded-[8px] transition-colors bg-[#FFF5ED]/25 shadow-mini hover:bg-[#FFF5ED]/15 active:bg-[#FFF5ED]/10 inline-flex
            lg:pt-[14px] lg:pb-[14px] lg:pr-[28px] lg:pl-[28px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] items-center justify-center text-sm text-primary-50
            active:scale-[0.98] active:transition-all hover:cursor-pointer whitespace-nowrap" type={type} {onclick} {href} {itemprop}
        >
            { label }
        </a>  
    {/if}
{/if}


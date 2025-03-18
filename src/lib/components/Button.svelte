<script>
    import { Button } from "bits-ui";

    export let label = "Kontakt do mnie!";
    export let type = "primary";
    export let size = "normal";
    export let classes = "";
</script>

{#if type === "dark"}
    <Button.Root
        class="{classes} rounded-[8px] transition-colors bg-primary-950 text-background shadow-mini hover:bg-primary-900 inline-flex
        {size === "normal" ? "pt-[14px] pb-[14px] pr-[28px] pl-[28px]" : "pt-[10px] pb-[10px] pr-[20px] pl-[20px]" } items-center justify-center text-sm
        active:scale-[0.98] active:transition-all hover:cursor-pointer"
    >
        { label }
    </Button.Root>    
{:else if type === "orange"}
    <Button.Root
        class="{classes} rounded-[8px] transition-colors bg-primary-600 text-background shadow-mini hover:bg-primary-900 inline-flex
        {size === "normal" ? "pt-[14px] pb-[14px] pr-[28px] pl-[28px]" : "pt-[10px] pb-[10px] pr-[20px] pl-[20px]" } items-center justify-center text-sm text-primary-50
        active:scale-[0.98] active:transition-all hover:cursor-pointer"
    >
        { label }
    </Button.Root>  
{:else}
    <Button.Root
        class="{classes} rounded-[8px] transition-colors bg-[#FFF5ED]/25 text-background shadow-mini hover:bg-[#FFF5ED]/15 inline-flex
        {size === "normal" ? "pt-[14px] pb-[14px] pr-[28px] pl-[28px]" : "pt-[10px] pb-[10px] pr-[20px] pl-[20px]" } items-center justify-center text-sm
        active:scale-[0.98] active:transition-all hover:cursor-pointer"
    >
        { label }
    </Button.Root>  
{/if}


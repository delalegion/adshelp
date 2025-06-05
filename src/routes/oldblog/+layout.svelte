<script lang="ts">
	import type { LayoutProps } from './$types';

    import ArticlesFilter from '$lib/components/blog/ArticlesFilter.svelte';
    import BlogHeader from '$lib/components/blog/BlogHeader.svelte';
    import Pricing from '$lib/components/sections/pricing/pricing.svelte';
    import Contact from '$lib/components/sections/contact/Contact.svelte';
    import Footer from '$lib/components/sections/footer/Footer.svelte';

	let { children, form }: LayoutProps = $props();
</script>

<BlogHeader />

<ArticlesFilter />

{@render children()}

<!-- Line -->
<div class=" w-full overflow-hidden pb-6 md:pb-8 lg:pb-12 xl:pb-18 bg-white">
    <svg width="1920" height="53" viewBox="0 0 1920 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 52L1920 0.5" stroke="#E7E7E7"/>
    </svg>
</div>

<Pricing />

<!-- Contact section -->
<Contact {form} />

<Footer />




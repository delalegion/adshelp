// States
import { loading, categoryMenuActive } from '$lib/stores/blogStore.js';
import { goto } from '$app/navigation';

export const changeCategory = (category, id) => {
    // Get the input element
    const inputField = document.getElementById('blog_search');
    // Reset input
    inputField.value = '';
    
    let lowerName = category.toLowerCase();
    categoryMenuActive.set(id);

    if (category === "all") {
        goto('/blog', { noScroll: true });
    } else {
        goto('/blog/category/'+lowerName, { noScroll: true });
    }

    loading.set(true);
}
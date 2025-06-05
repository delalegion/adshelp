import { writable } from "svelte/store";
import { categories } from '$lib/categories.js';

export const loading = writable(false);
export const entriesData = writable(categories);
export const sortActive = writable(false);
export const activeData = writable({
    articles: [],
    category: 'all',
    loading: true,
    meta: []
});
export const loadingState = writable({
    isLoading: true,
    startTime: null,
    dataLoaded: false
});
export let pageOfBlog = writable(1);

// Simple loading state
export const isLoading = writable(true);

// Helper function to set article data with loader logic
export const setArticleData = async (data) => {
    const startTime = Date.now();

    // Set loading state
    isLoading.set(true);
    
    // Set the actual data
    activeData.set({
      ...data,
      loading: false
    });

    // Calculate remaining time to show loader
    const elapsed = Date.now() - startTime;
    const minLoadTime = 1000; // 1 second minimum
    const remainingTime = Math.max(0, minLoadTime - elapsed);
    
    // Wait for remaining time before hiding loader
    setTimeout(() => {
      isLoading.set(false);
    }, remainingTime);
};

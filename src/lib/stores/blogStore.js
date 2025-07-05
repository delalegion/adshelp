import { writable } from "svelte/store";
import { categories } from '$lib/categories.js';

export const loading = writable(false);
export const entriesData = writable(categories);
export const sortActive = writable(false);
export const activeData = writable({
    category: 'all',
    meta: [],
    error: ''
});
export let pageOfBlog = writable(1);

export const setArticleData = async (data) => {
  // Set the actual data
  activeData.set({
    ...data
  });
};


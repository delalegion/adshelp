import { writable } from "svelte/store";
import { categories } from '$lib/categories.js';

export const loading = writable(false);
export const entriesData = writable(categories);
export const categoryMenuActive = writable(0);
export const sortActive = writable(false);
export const activeData = writable({});
export let pageOfBlog = writable(1);
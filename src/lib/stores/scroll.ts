import { writable } from 'svelte/store';

export const scrollY = writable(0);

export function updateScroll() {
    scrollY.set(window.scrollY);
}

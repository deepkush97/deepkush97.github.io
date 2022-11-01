import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const useThemeToggle = () => {
	const { subscribe, update } = writable(true);

	const handleSwitchDarkMode = () =>
		update((prev) => {
			const newTheme = !prev;
			localStorage.setItem('theme', newTheme ? 'dark' : 'light');
			newTheme
				? document.documentElement.classList.add('dark')
				: document.documentElement.classList.remove('dark');
			let faviconElement = document.querySelector("link#favicon-link[rel='icon']");
			if (faviconElement) {
				faviconElement.setAttribute('href', newTheme ? '/dark-favicon.ico' : '/light-favicon.ico');
			}

			return newTheme;
		});

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			update(() => true);
		} else {
			document.documentElement.classList.remove('dark');
			update(() => false);
		}
	}
	return { theme: { subscribe }, handleSwitchDarkMode };
};

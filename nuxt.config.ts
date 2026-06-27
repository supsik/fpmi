export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: false },
	modules: ["@nuxt/image"],
	css: ["/assets/style/main.scss"],
	app: {
		head: {
			htmlAttrs: {
				lang: "ru",
			},
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "assets/style/_variables.scss" as *;
					`,
				},
			},
		},
	},
});

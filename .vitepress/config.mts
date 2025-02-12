import { defineConfig } from 'vitepress';
import { sidebar } from "plugins/sidebar";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/',
  title: "Solerverso",
  description: "Hello",
  themeConfig: {
  appearance: 'dark',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Teste', link: '/markdown-examples' }
    ],

sidebar,


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

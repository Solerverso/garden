import { defineConfig } from 'vitepress';

const wikilinks = require('vuepress-markdown-it-wikilink')({
  // ... options here ...
})

module.exports = {
  // ...
  markdown: {
    extendMarkdown: (md) => {
      md.use(wikilinks)
    },
  },
  // ...
}


// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/',
  title: "Solerverso",
  description: "Hello",
ignoreDeadLinks: true,
  themeConfig: {
  appearance: 'dark',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Teste', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Sobre',
        items: [
          { text: 'Sobre', link: 'sobre/sobre' },
          { text: 'Biblioteca', link: '/biblioteca' },
        ]
      },
      {
        text: 'Literatura',
        collapsed: true,
        items: [
          { text: 'A Cela', link: 'literatura/cela' },
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import { defineConfig } from 'vitepress';
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'



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

    sidebar: calculateSidebar([ 
      'Literatura', 
      { folderName: 'literatura', separate: true }, 
    ]),


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

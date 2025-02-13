import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'


// https://vitepress.dev/reference/site-config

export default defineConfig({
  vite: { 
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here. //
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
      ], 
    }, 
  }, 
  base: '/',
  title: "Solerverso",
  description: "Hello",
ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    docFooter: {
      next: false,
      prev: false,
    },
  appearance: 'dark',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Biblioteca', link: '/biblioteca' },
      { text: 'Teste', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar({

      '/videos/': [
        {
       documentRootPath: '/',
      useFolderLinkFromSameNameSubFile: true,
        collapsed: true,
        collapseDepth: 2,
        capitalizeFirst: true,
        sortFolderTo: 'bottom',
        }
      ],



    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks()) 
    },
  }})

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/',
  collapsed: true,
  capitalizeFirst: true
};

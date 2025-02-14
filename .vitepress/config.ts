
import { defineConfig } from 'vitepress';
import { withSidebar } from "vitepress-sidebar";
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar';

import path from 'path';
import { writeFileSync } from 'fs';
import { Feed } from 'feed';
import { defineConfig, createContentLoader, type SiteConfig } from 'vitepress';


const hostname: string = 'https://solerverso.github.io'


const vitePressConfigs = {

  lastUpdated: true,
logo: '/logo.svg',
  locales: {
    root: {
      label: 'Português',
      lang: 'pt'
    },
  },
  
  lang: 'pt',
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
      { text: 'Sobre', link: '/sobre' },
      { text: 'Notas', link: '/notas' },
      { text: 'Jornal', link: '/jornal' }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks()) 
    }
},
  
};


export default defineConfig(withSidebar(vitePressConfigs, [
    {
      documentRootPath: '/',
      scanStartPath: '/',
      basePath: '/',
      resolvePath: '/',
      useTitleFromFileHeading: true,
      rootGroupText: 'Sobre',
        manualSortFileNameByPriority: ['sobre', 'notas', 'jornal', 'literatura'],
      useFolderLinkFromSameNameSubFile: true,
        collapseDepth: 2,
        collapsed: true,
        capitalizeFirst: true,
        sortFolderTo: 'bottom',
    },
    {
      documentRootPath: '/',
      scanStartPath: 'sobre',
      basePath: '/sobre/',
      resolvePath: '/sobre/',
      useTitleFromFileHeading: true,
      rootGroupText: 'Sobre'
    },
    {
      documentRootPath: '/',
      scanStartPath: 'almanaque',
      resolvePath: '/almanaque/',
      useTitleFromFrontmatter: true
    }
  ]));

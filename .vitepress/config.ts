
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

  buildEnd: async (config: SiteConfig) => {
    const feed = new Feed({
      title: 'Paul Laros',
      description: 'My personal blog',
      id: hostname,
      link: hostname,
      language: 'en',
      image: 'https://laros.io/images/paul-laros.jpg',
      favicon: `${hostname}/favicon.ico`,
      copyright:
        'Copyright (c) 2023-present, Paul Laros'
    }),

    const posts = await createContentLoader('*.md', {
      excerpt: true,
      render: true
    }).load(),

    posts.sort(
      (a, b) =>
        +new Date(b.frontmatter.date as string) -
        +new Date(a.frontmatter.date as string)
    ),

    for (const { url, excerpt, frontmatter, html } of posts) {
      feed.addItem({
        title: frontmatter.title,
        id: `${hostname}${url}`,
        link: `${hostname}${url}`,
        description: excerpt,
        content: html,
        author: [
          {
            name: 'Paul Laros',
            email: 'hey@laros.io',
            link: 'https://laros.io/authors/paul'
          }
        ],
        date: frontmatter.date
      })
    },

writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2()),
  
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
  ]))




import { defineConfig } from 'vitepress';
import { withSidebar } from "vitepress-sidebar";
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'

const vitePressConfigs = {
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
      { text: 'Teste', link: '/markdown-examples' }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks()) 
    }
}
};




export default defineConfig(withSidebar(vitePressConfigs, [{
  documentRootPath: "/docs",
  scanStartPath: "notes",
  resolvePath: "/notes/",
  useTitleFromFileHeading: true,
  useFolderLinkFromIndexFile: true,
  useFolderTitleFromIndexFile: true,
}, {
  documentRootPath: "/docs",
  scanStartPath: "/en/notes",
  resolvePath: "/en/notes/",
  basePath: "/",
  useTitleFromFileHeading: true,
  useFolderLinkFromIndexFile: true,
  useFolderTitleFromIndexFile: true,
}, {
  documentRootPath: "/docs",
  scanStartPath: "/jp/notes",
  resolvePath: "/jp/notes/",
  basePath: "/",
  useTitleFromFileHeading: true,
  useFolderLinkFromIndexFile: true,
  useFolderTitleFromIndexFile: true,
}]))

import { defineConfig } from 'vitepress';
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { calculateSidebar as originalCalculateSidebar } from "@nolebase/vitepress-plugin-sidebar"

function calculateSidebarWithDefaultOpen(targets, base) { 
  const result = originalCalculateSidebar(targets, base) 
  if (Array.isArray(result)) { 
    result.forEach(item => { 
      item.collapsed = false
    }) 
  } else { 
    Object.values(result).forEach(items => { 
      items.forEach(item => { 
        item.collapsed = false
      }) 
    }) 
  } 
  return result 
} 

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/',
  title: "Solerverso",
  description: "Hello",
ignoreDeadLinks: true,
  themeConfig: {
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


    sidebar: calculateSidebarWithDefaultOpen([ 
      { folderName: "literatura", separate: true },
      { folderName: "sobre", separate: true },
     ],''),


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

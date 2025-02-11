import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Solerverso",
  description: "Hello",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

     sidebar: [
        '/',
        {
            title: 'Guide',
            collapsable: false,
            children: [ 
            ['/guide/Frontend','Frontend'],
            ['/guide/Backend' , 'Backend' ]

        },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

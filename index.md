---
layout: home

title: Solerverso
titleTemplate: Vite & Vue Powered Static Site Generator

hero:
  name: Solerverso
  text: 
  tagline: Markdown to Beautiful Docs in Minutes
  actions:
    - theme: brand
      text: Sobre
      link: /sobre/sobre
    - theme: alt
      text: Quickstart
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/vuejs/vitepress
  image:
    src: /vitepress-logo-large.webp
    alt: VitePress

features:
  - icon: 📝
    title: Focus on Your Content
    details: Effortlessly create beautiful documentation sites with just markdown.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><defs><linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"/><stop offset="100%" stop-color="#BD34FE"/></linearGradient><linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"/><stop offset="8.333%" stop-color="#FFDD35"/><stop offset="100%" stop-color="#FFA800"/></linearGradient></defs><path fill="url(#a)" d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/><path fill="url(#b)" d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/></svg>
    title: Enjoy the Vite DX
    details: Instant server start, lightning fast hot updates, and leverage Vite ecosystem plugins.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: Customize with Vue
    details: Use Vue syntax and components directly in markdown, or build custom themes with Vue.
  - icon: 🚀
    title: Ship Fast Sites
    details: Fast initial load with static HTML, fast post-load navigation with client-side routing.
---

<div class="grid gap-5 lg:grid-cols-2 max-w-172 lg:max-w-none mx-auto">
  <IntegrationCard type="markdown-it" title="Bi-Directional Links" package="markdown-it-bi-directional-links">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${biDirectionalLinksPackageJSON.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="markdown-it" title="Elements Transformation" package="markdown-it-element-transform">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${elementTransform.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="markdown-it" title="Lazy loading blurred thumbnails" package="markdown-it-unlazy-img">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${unlazyImg.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Auto Sidebar" package="vitepress-plugin-sidebar">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${sidebarPackageJSON.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Breadcrumbs" package="vitepress-plugin-breadcrumbs">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${breadcrumbsPackageJSON.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Enhanced Readabilities" package="vitepress-plugin-enhanced-readabilities">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${enhancedReadabilities.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Index page" package="vitepress-plugin-index">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${index.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Inline Link Previewing" package="vitepress-plugin-inline-link-preview">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${inlineLinkPreview.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Blinking highlight targeted heading" package="vitepress-plugin-highlight-targeted-heading">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${highlightTargetedHeading.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Git-based page histories" package="vitepress-plugin-git-changelog">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${gitChangelog.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Page <meta> metadata generation" package="vitepress-plugin-og-image">
    <template v-slot:title>
      Page <code>&lt;meta&gt;</code> metadata generation
    </template>
    <template v-slot:badge>
      <Badge type="warning" text="Beta" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Previewing image (social media card) generation" package="vitepress-plugin-og-image">
    <template v-slot:badge>
      <Badge type="warning" text="Beta" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Page properties" package="vitepress-plugin-page-properties">
    <template v-slot:badge>
      <Badge type="danger" text="Alpha" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Enhanced <mark> elements" package="vitepress-plugin-enhanced-mark">
    <template v-slot:title>
      Enhanced <code>&lt;mark&gt;</code> elements
    </template>
    <template v-slot:badge>
      <Badge type="tip" :text="`v${enhancedMark.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="Thumbnail hashing for images" package="vitepress-plugin-thumbnail-hash">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${thumbnailHash.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="obsidian" title="UnoCSS" package="obsidian-plugin-unocss">
    <template v-slot:badge>
      <Badge type="warning" text="Beta" />
    </template>
  </IntegrationCard>
</div>

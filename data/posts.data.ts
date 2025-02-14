import { createContentLoader } from 'vitepress'
export default createContentLoader('/notas/*.md', 
excerpt: true)



import { defineConfig } from 'vitepress';
import { withSidebar } from "vitepress-sidebar";
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar';
import { Feed } from 'feed';


// This is the only directory we care about including in our RSS feed for now
const blogDir = 'notas';
const formattedPagesForRSS: Record<string, string> = {};

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

    transformHtml(_code, _id, { content, pageData } ) {
        const { filePath } = pageData;
        const dirname = path.dirname( filePath );
        const basename = path.basename( filePath, '.md' );

        if ( dirname === blogDir ) {
            const html = formatPageContentForRSS( content, hostName );
            if ( html ) {
                formattedPagesForRSS[ `/${dirname}/${basename}` ] = html;
            }
        }
    },

    buildEnd: async ( config ) => {
        const feed = new Feed( {
            title: siteTitle,
            description: siteDescription,
            id: hostName,
            link: hostName,
            copyright: siteCopyright,
            language: 'en',
        } );

        const posts = await createContentLoader( `/${blogDir}/*.md`, {
            render: true,
            includeSrc: true,
            transform ( rawData ) {
                return rawData.sort( ( a, b ) => {
                    return +new Date( b.frontmatter.date ).getTime() - +new Date( a.frontmatter.date ).getTime()
                } );
            }
        } ).load();

        for ( const { url, excerpt, frontmatter, html } of posts ) {
            const improvedHtml = formattedPagesForRSS[ url ];

            feed.addItem( {
                title: frontmatter.title,
                id: `${hostName}${url}`,
                link: `${hostName}${url}`,
                description: excerpt,
                content: improvedHtml || html,
                author: [
                    {
                        name: 'Eric Gardner',
                        email: 'gardner.ec@gmail.com',
                        link: 'https://ericgardner.info/about'
                    }
                ],
                date: frontmatter.date
            } );
        }

        writeFileSync( path.join( config.outDir, 'feed.rss' ), feed.rss2() );
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



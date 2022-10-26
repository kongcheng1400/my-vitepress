export default {
    base: '/my-vitepress/',
    title:'Mazige Blog',
    description: 'Remember this is real life.',
    themeConfig: {
      logo: '/pill.gif',
      siteTitle: false,
      nav: [
        {text: 'Home', link: '/'}
      ],
      sidebar: [
        {
          text: 'Airdrops',
          collapsible: true,
          items: [
            {text: 'Introduction', link: '/airdrops/'},
            {text: 'Data', link: '/airdrops/database.md'},
            {text: 'Public Chains', link: '/airdrops/public-chains.md'},
          ]
        }
      ]
    }
  }
  
export default {
  base: '/my-vitepress/',
  title: 'Mazige Blog',
  description: 'Remember this is real life.',
  themeConfig: {
    logo: '/frog.jpg',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        text: 'life&philosophy',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '篇章', link: '/life/' },
          { text: '随便写写', link: '/life/smalltalk.md' },
          { text: 'books', link: '/life/books.md' },
          { text: '时常念', link: '/life/时常念.md' },
          { text: '反脆弱', link: '/life/反脆弱.md' },
          {text: 'NovalRavakant', collapsible: true, collapsed: true, items:[{ text: '富有', link: '/life/NovalRavakant/富有.md' }]}
        ]
      },
      {
        text: 'Airdrops',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/airdrops/' },
          { text: 'Data', link: '/airdrops/database.md' },
          { text: 'Public Chains', link: '/airdrops/public-chains.md' },
        ]
      },
      {
        text: '段子',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'AHHHHHHH LMAO', link: '/duanzi/' }
        ]
      },
      {
        text: 'programming',
        collapsible: true,
        collapsed: true,
        items: [
          {text: 'Summary', link: '/programming/'},
          {text: 'languages-fullstack', link: '/programming/fullstack.md'}
        ]
      },
      {
        text: 'investments',
        collapsible: true,
        collapsed: true,
        items: [
          {text: 'Summary', link: '/investments/'},
          {text: '投资记录', link: '/investments/diary.md'},
          {text: '美丽的陷阱', link: '/investments/beautifulTrap.md'}
        ]
      },
    ]
  }
}

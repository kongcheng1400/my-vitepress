export default {
  base: '/my-vitepress/',
  title: 'Mazige Blog',
  description: 'Remember this is real life.',
  themeConfig: {
    logo: '/frog.jpg',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/01_life/' }
    ],
    sidebar: [
      {
        text: '人生哲学',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '篇章', link: '/01_life/' },
          { text: '随便写写', link: '/01_life/smalltalk.md' },
          { text: 'books', link: '/01_life/books.md' },
          { text: 'Readlist', link: '/01_life/readlist.md'},
          { text: '时常念', link: '/01_life/时常念.md' },
          {text: '叙事自由', link: '/01_life/narrative_freedom.md'},
          { text: '反脆弱', link: '/01_life/反脆弱.md' },
          {text: 'NovalRavakant', collapsible: true, collapsed: true, items:[{ text: '富有', link: '/01_life/NovalRavakant/富有.md' }]}
        ]
      },
      {
        text: '工作相关',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'RoadMap', link: '/02_work/' }
        ]
      },
      {
        text: 'investments',
        collapsible: true,
        collapsed: true,
        items: [
          {text: 'Summary', link: '/03_investments/'},
          {text: '价值投资', link: '/03_investments/价值投资.md'},
          {text: '投资记录', link: '/03_investments/diary.md'},
          {text: '美丽的陷阱', link: '/03_investments/beautifulTrap.md'},
          {text: 'blockchain', link: '/03_investments/blockchain.md'},
          {text: '市场温度和周期', link: '/03_investments/market.md'}
        ]
      },
      {
        text: 'programming',
        collapsible: true,
        collapsed: true,
        items: [
          {text: 'Summary', link: '/04_programming/'},
          {text: 'languages-fullstack', link: '/04_programming/fullstack.md'}
        ]
      },
      {
        text: '杠杆',
        collapsible: true,
        collapsed: true,
        items: [
          {text: 'Summary', link: '/05_leverage/'}
        ]
      },
      {
        text: 'Airdrops',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/99_airdrops/' },
          { text: 'Data', link: '/99_airdrops/database.md' },
          { text: 'Public Chains', link: '/99_airdrops/public-chains.md' },
        ]
      },
      {
        text: '段子',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'AHHHHHHH LMAO', link: '/06_duanzi/' }
        ]
      },


    ]
  }
}

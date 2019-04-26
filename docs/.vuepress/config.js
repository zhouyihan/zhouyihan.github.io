module.exports = {
    title: '冷泠泠',
    description: '闲的蛋疼',
    themeConfig: {
      nav: [
        { text: 'Vue', link: '/vue/' },
        { text: 'React', link: '/react/' },
        { text: 'JS', link: '/js/' },
        { text: 'CSS', link: '/css/' },
        { text: '其他', link: '/other/' },
        { text: 'Github', link: 'https://github.com/zhouyihan' },
      ],
      sidebar: {
        '/vue/': [
          '',
          'about'
        ],
        '/react/': [
          '',
          'react'
        ],
        '/js/': [
          ''
        ],
        '/css/': [
          ''
        ],
        '/other/': [
          '',
          'prettier'
        ]
      }
    },
    markdown: {
      lineNumbers: true
    }
  }
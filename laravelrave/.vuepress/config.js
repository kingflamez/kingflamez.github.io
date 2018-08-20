module.exports = {
    title: 'Rave by Flutterwave Laravel Package',
    description: 'A rave laravel package to accepts payment globally in multi currencies',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Installation', link: '/getting-started/installation.html' },
          { text: 'Sample Implementation', link: '/getting-started/sample-implementation.html' },
        ],
        sidebar: [
            {
                title: 'Getting Started',
                children: [
                    '/getting-started/installation.html',
                    '/getting-started/sample-implementation.html'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */ ]
            }
        ],
        displayAllHeaders: true
      }
  }
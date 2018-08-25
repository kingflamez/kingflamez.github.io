module.exports = {
    title: 'Laravel Rave',
    description: 'A rave by flutterwave laravel package to accept payment globally in multi currencies',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Installation', link: '/getting-started/installation.html' },
          { text: 'Payment Implementation', link: '/getting-started/payment-implementation.html' },
        ],
        sidebar: [
            '/getting-started/installation.html',
            '/getting-started/payment-implementation.html',
            '/recurring/introduction.html',
            '/webhooks.html',
            '/verify-payment.html'
        ],
        displayAllHeaders: true
      }
  }
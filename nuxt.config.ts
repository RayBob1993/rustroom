export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, height=device-height, initial-scale=1, user-scalable=0, minimum-scale=1'
    }
  },
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    './modules/auth',
    './modules/alerts',
    './modules/bans',
    './modules/catalog',
    './modules/profile',
    './modules/rules',
    './modules/servers',
    './modules/statistics',
    './modules/transactions'
  ],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'ru'
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
});

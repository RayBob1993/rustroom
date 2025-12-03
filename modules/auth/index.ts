import { defineNuxtModule, createResolver, addPlugin, addRouteMiddleware } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'auth',
    configKey: 'auth',
    description: 'Модуль работы с авторизацией',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = resolve('./runtime');

    addPlugin(resolve(runtimeDir, 'plugins/auth.plugin'));

    addRouteMiddleware({
      name: 'auth',
      path: resolve(runtimeDir, 'middleware/auth.middleware'),
      global: true
    });
  },
});

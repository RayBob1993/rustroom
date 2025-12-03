import { defineNuxtModule, createResolver, addPlugin } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'user',
    configKey: 'user',
    description: 'Модуль работы с данными пользователя',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = resolve('./runtime');

    addPlugin(resolve(runtimeDir, 'plugins/user.plugin'));
  },
});

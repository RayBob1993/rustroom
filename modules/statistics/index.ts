import { defineNuxtModule, createResolver, addPlugin } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'statistics',
    configKey: 'statistics',
    description: 'Модуль работы с статистикой',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = resolve('./runtime');

    addPlugin(resolve(runtimeDir, 'plugins/statistics.plugin'));
  },
});

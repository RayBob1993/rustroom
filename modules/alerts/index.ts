import { defineNuxtModule, createResolver, addPlugin } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'alerts',
    configKey: 'alerts',
    description: 'Модуль работы с уведомлениями',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = resolve('./runtime');

    addPlugin(resolve(runtimeDir, 'plugins/alerts.plugin'));
  },
});

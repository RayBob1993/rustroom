import { defineNuxtModule, createResolver, addPlugin } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'transactions',
    configKey: 'transactions',
    description: 'Модуль работы с системой транзакций',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = resolve('./runtime');

    addPlugin(resolve(runtimeDir, 'plugins/transactions.plugin'));
  },
});

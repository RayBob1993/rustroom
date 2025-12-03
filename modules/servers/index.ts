import { defineNuxtModule, createResolver, addPlugin } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'servers',
    configKey: 'servers',
    description: 'Модуль работы с игровыми серверами',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = resolve('./runtime');

    addPlugin(resolve(runtimeDir, 'plugins/servers.plugin'));
  },
});

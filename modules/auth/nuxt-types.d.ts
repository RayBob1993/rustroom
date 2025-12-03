import type { HookResult } from '@nuxt/schema';

declare module '#app' {
  interface PageMeta {
    authRequired?: boolean;
  }

  interface RuntimeNuxtHooks {
    'auth:login': () => HookResult;
    'auth:logout': () => HookResult;
  }

  interface NuxtHooks {
    'auth:login': () => HookResult;
    'auth:logout': () => HookResult;
  }
}

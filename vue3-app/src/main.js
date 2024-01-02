import { createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

const app = createApp(App);

// 导出生命周期方法
const vueLifecycles = singleSpaVue({
  appOptions: {
    render: () => app.mount('#app'),
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

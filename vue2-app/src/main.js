import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

Vue.config.productionTip = false;

// 创建 Vue 实例
const vue2App = new Vue({
  render: (h) => h(App),
}).$mount('#app');

// 导出生命周期方法
const vueLifecycles = singleSpaVue({
  Vue: vue2App,
  appOptions: {
    el: '#app',
    render: (h) => h(App),
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import React from 'react'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');

// 如果需要在非 Vue.js 的环境中加载，可以导出一个启动函数
export const bootstrap = (props) => {
  // 子应用的启动逻辑
  app.mount('#app');
};

// 导出子应用的生命周期钩子函数
export const mount = (props) => {
  // 子应用被挂载到父应用中的逻辑
};

export const unmount = (props) => {
  // 子应用被卸载的逻辑
  app.unmount();
};
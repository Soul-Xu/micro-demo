import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App'; // 这里是你 React 子应用的根组件

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const bootstrap = reactLifecycles.bootstrap;
console.log("react-index-bootstrap")
export const mount = reactLifecycles.mount;
console.log("react-index-mount")
export const unmount = reactLifecycles.unmount;
console.log("react-index-unmount")

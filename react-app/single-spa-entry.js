// project-root/react-app/single-spa-entry.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

export const mount = (props) => {
  ReactDOM.render(<App />, document.getElementById('react-root'));
};

export const unmount = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('react-root'));
};

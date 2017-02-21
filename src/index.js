import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'preact-redux';

import createStore from './store/configure';

import domready from 'domready';

import 'gsap';

let root;

domready(() => {
  let App = require('./sections/App').default;
	root = render(<Provider store={createStore()}><App/></Provider>, document.getElementById('root'), root);
});

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	// If serviceWorker supports, then register it.
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('./service-worker.js', { scope: "./" }) //setting scope of sw
    .then(function (registration) {
      console.log('%c Service worker is registered! ', 'background: #258a25; color: #ffffff; font-weight: bold');
    })
    .catch(function (error) {
      console.error('Service worker failed ', error);
    });
  }
}
else {
  require('preact/devtools');
}



if (module.hot) {
  module.hot.accept('./sections/App', () => requestAnimationFrame(init))
}
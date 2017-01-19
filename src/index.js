import { render } from 'react-dom';
import React from 'react';

import domready from 'domready';

let root;

domready(() => {
  let App = require('./components/App').default;
	root = render(<App/>, document.getElementById('root'), root);
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
  module.hot.accept('./components/App', () => requestAnimationFrame(init))
}
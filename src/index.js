import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

// 第三方导入上面，自己导入下面

import App from '@/App';
import "normalize.css"
import "./assets/css/index.less"
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Suspense fallback="loading...">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  //</React.StrictMode>
);


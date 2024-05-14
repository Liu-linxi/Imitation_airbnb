import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// 第三方导入上面，自己导入下面

import App from '@/App';
import "normalize.css"
import "./assets/css/index.less"
import store from './store';
import theme from './assets/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));


/**
 * Provider和Suspenses顺序调换因为Suspenses懒加载，
 * 避免dispatch监听不到内容
 * 所以这里推荐使用Provider放在最外层
 */
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
  //</React.StrictMode>
);


import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import useScrollTop from './hooks/useScrollTop'
import routes from './router'

const App = memo(() => {
  useScrollTop()

  return (
    <div className='app'>
      {/* Suspense放在index.js使用会造成AppHeader里面的数据打印执行两次，因此放在这里使用 */}
      {/* 因为Suspense是对router进行异步加载 */}
      <AppHeader />
      <Suspense fallback="loading...">
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>

      <AppFooter />
    </div>
  )
})

export default App

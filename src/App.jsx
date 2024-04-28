import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div>
      <AppHeader/>
      <div className='main'>
        {useRoutes(routes)} 
        主体部分

      </div>
      <AppFooter/>
    </div>
  )
})

export default App
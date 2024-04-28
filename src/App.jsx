import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div>
      <div className='header'>头部</div>
      <div className='main'>
        {useRoutes(routes)} 
        主体部分

      </div>
      <div className='footer'>底部</div>
    </div>
  )
})

export default App
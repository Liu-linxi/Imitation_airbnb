import React, { memo } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home_banner'

const home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
    </HomeWrapper>
  )
})

export default home
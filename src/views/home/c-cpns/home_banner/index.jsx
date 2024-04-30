import React, { memo } from 'react'
import { BannerWrapper } from './style'
import coverImg from '@/assets/img/cover_01.jpeg'


const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      HomeBanner
      {/* <img src={coverImg} alt="" /> */}
    </BannerWrapper>
  )
})

export default HomeBanner
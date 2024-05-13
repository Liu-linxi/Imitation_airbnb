import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home_banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  //  发起网络请求
  /**派发异步事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("测试传参数"))
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  }, [dispatch])


  /** 从redux中获取数据 */
  /** 只有进行浅拷贝发生改变的时候才进行重新获取数据，重新渲染 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)



  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 折扣数据 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}></HomeLongfor>}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} itemWidth={4}></HomeSectionV1>}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} itemWidth={4}></HomeSectionV1>}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>}
      </div>
    </HomeWrapper>
  )
})

export default Home
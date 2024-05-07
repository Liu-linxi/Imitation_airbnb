import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home_banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'

const home = memo(() => {
  //  发起网络请求
  /**派发异步事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("测试传参数"))
  }, [dispatch])


  /** 从redux中获取数据 */
  /** 只有进行浅拷贝发生改变的时候才进行重新获取数据，重新渲染 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo
  }), shallowEqual)



  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 折扣数据 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} itemWidth={4}></HomeSectionV1>}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} itemWidth={4}></HomeSectionV1>}
      </div>
    </HomeWrapper>
  )
})

export default home
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home_banner'
import { fetchHomeDataAction } from '@/store/modules/home'

const home = memo(() => {
  //  发起网络请求
  /**派发异步事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("测试传参数"))
  }, [dispatch])

  
  /** 从redux中获取数据 */
  const { goodPriceInfo } = useSelector((state) => ({goodPriceInfo: state.home.goodPriceInfo}), shallowEqual)
  /** 只有进行浅拷贝发生改变的时候才进行重新获取数据，重新渲染 */

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <h2>{goodPriceInfo.title}</h2> 
        content
      </div>
    </HomeWrapper>
  )
})
 
export default home
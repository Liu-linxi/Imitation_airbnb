import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'




const PictureBrower = memo((props) => {
  const { pictureUrls = [], closeClic, chooseIndex } = props
  const [currenIndex, setCurrenIndex] = useState(chooseIndex);
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)

  // 预览遮罩层显示出来后需要将滚动条隐藏
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  function clseIconHandle() {
    if (closeClic) closeClic();
  }
  /**控制方向是否左右以及当前大图展示图片内容 */
  function controlClick(isNext = true) {
    let newIndex = isNext ? currenIndex + 1 : currenIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrenIndex(newIndex)
    setIsNext(isNext)
  }
  /**展示图片缩略预览是否显示 */
  function toggleShowListHandle() {
    setShowList(!showList)
  }
  /**处理大图显示底部不知道左右方向错误处理 */
  function imgItemClickHandle(index) {
    setCurrenIndex(index)
    setIsNext(index > currenIndex)
  }

  return (
    <BrowserWrapper $isNext={isNext}>
      <div className='top'>
        <div className='close_Icon' onClick={clseIconHandle}>
          <IconClose />
        </div>
      </div>
      <div className='row_swiper'>
        <div className='control'>
          <div className='btn left' onClick={e => controlClick(false)} >
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className='btn right' onClick={e => controlClick(true)} >
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className='picture'>
          <SwitchTransition mode='in-out'>
            <CSSTransition key={pictureUrls[currenIndex]} classNames="pic" timeout={200}>
              <img src={pictureUrls[currenIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>

        </div>

      </div>
      <div className='indicator'>
        <div className='infolist'>
          <div className='desc'>
            <div className='count'>
              <span>{currenIndex + 1}/{pictureUrls.length}：</span>
              <span>room apartment图片{currenIndex + 1}</span>
            </div>
            <div className='toggle' onClick={toggleShowListHandle}>
              <span>隐藏照片列表</span>
              {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          <div className='list' style={{ height: showList ? "67px" : "0" }}>
            <Indicator selectIndex={currenIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div className={classNames("item", { active: currenIndex === index })} key={item} onClick={e => imgItemClickHandle(index)}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrower.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrower
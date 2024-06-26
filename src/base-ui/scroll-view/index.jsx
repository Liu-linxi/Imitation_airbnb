
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  /**定义内容显示状态 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)

  const totalDistanceRef = useRef()

  /** 组件渲染完毕，判断是否显示右侧按钮 */
  const scrollContentRef = useRef()

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;  //一共可以滚动宽度
    const clientWidth = scrollContentRef.current.clientWidth;  //默认占据宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理 */
  function controlClick(isLeft) {
    const newIndex = isLeft ? posIndex - 1 : posIndex + 1;
    const newEL = scrollContentRef.current.children[newIndex];
    // console.log(newEL.offsetLeft)
    const newOffsetLeft = newEL.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    // 是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClick(true)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e => controlClick(false)}>
          <IconArrowRight />
        </div>
      )}

      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView
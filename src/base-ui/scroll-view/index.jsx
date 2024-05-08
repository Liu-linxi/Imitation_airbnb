import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  /**定义内容显示状态 */
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  /** 组件渲染完毕，判断是否显示右侧按钮 */
  const scrollContentRef = useRef()
  
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;  //一共可以滚动宽度
    const clientWidth = scrollContentRef.current.clientWidth;  //默认占据宽度
    const totalDistance = scrollWidth - clientWidth;
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理 */
  function rightClick() {
    const newIndex = posIndex + 1;
    const newEL = scrollContentRef.current.children[newIndex];
    // console.log(newEL.offsetLeft)
    const newOffsetLeft = newEL.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
  }

  return (
    <ViewWrapper>
      {showRight && <button onClick={rightClick}>右边</button>}

      <div>左边</div>
      <div className='scroll-content' ref={scrollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
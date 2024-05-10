import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    //  1.获取 selectIndex要滚动的距离
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemOffsetLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    // 2.content的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // 3.获取selectIndex要滚动的距离
    let distance = itemOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 4.特殊情况的处理如果范围初始值为0或者1需要显示左对齐不需要做出移动或者右对齐
    if (distance < 0) distance = 0 // 左边的特殊情况处理左对齐
    /**如果滚动到最后一个或者两个为了使右边也对齐因此需要进行判断超出部分就强制重置剩余的值 */
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边的特殊情况处理

    // 5.最后改变位置即可
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator
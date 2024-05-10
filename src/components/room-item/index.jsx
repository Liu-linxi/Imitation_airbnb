import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { Rating } from '@mui/material'
import { ItemWrapper } from './style'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const RoomItem = memo((props) => {

  const { itemData, itemWidth, itemPadding } = props
  const swiperRef = useRef()


  /**左右控制器显示处理 */
  function controlClick(isLeft = true) {
    isLeft ? swiperRef.current.prev() : swiperRef.current.next()
  }


  return (
    <ItemWrapper $verifyColor={itemData?.verify_info?.text_color || "#39576a"} $itemWidth={itemWidth} $itemPadding={itemPadding}>
      <div className='roomcontent'>
        {/* <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className='swiper'>
          <div className='control'>
            <div className='btn left' onClick={e => controlClick(true, e)}>
              <IconArrowLeft width={22} height={22} />
            </div>
            <div className='btn right' onClick={e => controlClick(false, e)}>
              <IconArrowRight width={22} height={22} />
            </div>
          </div>
          <Carousel dots={false} ref={swiperRef}>
            {
              itemData?.picture_urls?.map(item => {
                return (
                  <div className='cover' key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        <div className='desc'>
          {itemData.verify_info.messages.join(".")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>
          ￥{itemData.price}/晚
        </div>
        <div className='bottom'>
          <Rating value={itemData.star_rating ?? 5} precision={0.1} readOnly sx={{ fontSize: "12px", color: "#ffc400" }} />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
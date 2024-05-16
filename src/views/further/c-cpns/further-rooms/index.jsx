import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const FurtherRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.further.roomList,
    totalCount: state.further.totalCount,
    isLoading: state.further.isLoading
  }), shallowEqual)

  /**事件处理点击 */
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  }, [navigate,dispatch])

  return (
    <RoomsWrapper>
      <h2 className='title'> 共{totalCount}处住所</h2>
      <div className='list'>
        {
          roomList.map(item => <RoomItem itemClick={itemHandle} itemData={item} key={item.id} itemWidth="20%" itemPadding="8px" />)
        }
      </div>
      {isLoading && <div className='cover'></div>}

    </RoomsWrapper>
  )
})

export default FurtherRooms
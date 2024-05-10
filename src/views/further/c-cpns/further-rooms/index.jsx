import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const FurtherRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.further.roomList,
    totalCount: state.further.totalCount,
    isLoading: state.further.isLoading
  }), shallowEqual)
  return (
    <RoomsWrapper>
      <h2 className='title'> 共{totalCount}处住所</h2>
      <div className='list'>
        {
          roomList.map(item => <RoomItem itemData={item} key={item.id} itemWidth="20%" itemPadding="8px"/>)
        }
      </div>
      {isLoading && <div className='cover'></div>}

    </RoomsWrapper>
  )
})

export default FurtherRooms
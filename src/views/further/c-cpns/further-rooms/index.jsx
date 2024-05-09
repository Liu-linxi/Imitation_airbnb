import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import { useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const FurtherRooms = memo(() => {
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.further.roomList,
    totalCount: state.further.totalCount
  }))
  return (
    <RoomsWrapper>
      <h2 className='title'> 共{totalCount}处住所</h2>
      <div className='list'>
        {
          roomList.map(item => <RoomItem itemData={item} key={item.id} />)
        }
      </div>
    </RoomsWrapper>
  )
})

export default FurtherRooms
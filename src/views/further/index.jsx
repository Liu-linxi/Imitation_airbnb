import React, { memo, useEffect } from 'react'
import { FutherWrapper } from './style'
import FurtherFilter from './c-cpns/further-filter'
import FurtherRooms from './c-cpns/further-rooms'
import FurtherPagination from './c-cpns/further-pagination'

import { getFurtherRoomList } from '@/services/modules/further'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/further/actionCreators'

const further = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction(2))
  })

  return (
    <FutherWrapper>
      <FurtherFilter></FurtherFilter>
      <FurtherRooms></FurtherRooms>
      <FurtherPagination></FurtherPagination>
    </FutherWrapper>
  )
})

export default further
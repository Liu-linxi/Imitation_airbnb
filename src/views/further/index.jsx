import React, { memo, useEffect } from 'react'
import { FutherWrapper } from './style'
import FurtherFilter from './c-cpns/further-filter'
import FurtherRooms from './c-cpns/further-rooms'
import FurtherPagination from './c-cpns/further-pagination'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/further/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Further = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])

  return (
    <FutherWrapper>
      <FurtherFilter></FurtherFilter>
      <FurtherRooms></FurtherRooms>
      <FurtherPagination></FurtherPagination>
    </FutherWrapper>
  )
})

export default Further
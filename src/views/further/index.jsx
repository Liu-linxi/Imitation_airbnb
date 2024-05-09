import React, { memo } from 'react'
import { FutherWrapper } from './style'
import FurtherFilter from './c-cpns/further-filter'
import FurtherRooms from './c-cpns/further-rooms'
import FurtherPagination from './c-cpns/further-pagination'

const further = memo(() => {
  return (
    <FutherWrapper>
      <FurtherFilter></FurtherFilter>
      <FurtherRooms></FurtherRooms>
      <FurtherPagination></FurtherPagination> 
    </FutherWrapper>
  )
})

export default further
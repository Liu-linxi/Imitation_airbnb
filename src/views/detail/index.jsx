import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'

const Detail = memo(() => {
  const detailInfo = useSelector(state => state.detail.detailInfo)

  return (
    <div>
      {detailInfo.name}
    </div>
  )
})

export default Detail
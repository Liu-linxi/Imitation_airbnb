import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const Deatil = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))

  return (
    <div>
      {detailInfo.name}
    </div>
  )
})

export default Deatil
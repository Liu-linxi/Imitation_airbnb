import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DeatilInfos from './c-cpns/detail-infos'

const Detail = memo(() => {
  const detailInfo = useSelector(state => state.detail.detailInfo)

  return (
    <DetailWrapper>
      <DetailPictures />
      <DeatilInfos />
    </DetailWrapper>
  )
})

export default Detail 
import React, { memo } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DeatilInfos from './c-cpns/detail-infos'
import { shallowEqual, useSelector } from 'react-redux'

const Detail = memo(() => {
  const detailInfo = useSelector(state => state.detail.detailInfo, shallowEqual)
  return (
    <DetailWrapper>
      <DetailPictures detailInfo={detailInfo}/>
      <DeatilInfos detailInfo={detailInfo}/>
    </DetailWrapper>
  )
})

export default Detail 
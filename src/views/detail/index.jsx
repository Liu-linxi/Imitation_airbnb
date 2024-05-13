import React, { memo } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DeatilInfos from './c-cpns/detail-infos'

const Detail = memo(() => {

  return (
    <DetailWrapper>
      <DetailPictures />
      <DeatilInfos />
    </DetailWrapper>
  )
})

export default Detail 
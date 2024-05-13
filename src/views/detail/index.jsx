import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DeatilInfos from './c-cpns/detail-infos'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const detailInfo = useSelector(state => state.detail.detailInfo, shallowEqual)

  const dispatch=useDispatch()
  useEffect(()=>{
    
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  },[dispatch]) 
  return (
    <DetailWrapper>
      <DetailPictures detailInfo={detailInfo}/>
      <DeatilInfos detailInfo={detailInfo}/>
    </DetailWrapper>
  )
})

export default Detail 
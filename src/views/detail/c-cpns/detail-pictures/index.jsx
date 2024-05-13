import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrower from '@/base-ui/picture-browser'

const DetailPictures = memo(() => {
  const detailInfo = useSelector(state => state.detail.detailInfo, shallowEqual)

  const [showPic, setShowPic] = useState(false);
  const [chooseIndex, setChooseIndex] = useState(0);
  // 修改后确保点击查看哪个是当前的大图显示位置 
  function showPicHandle(index) {
    setShowPic(true)
    setChooseIndex(index);
  }
  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item' onClick={e => showPicHandle(0)}>
            <img src={detailInfo.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map((item, index) => {
              return (
                <div className='item' key={item} onClick={e => showPicHandle(index + 1)}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='show-btn' onClick={e => showPicHandle(0)}>
        显示照片
      </div>
      {showPic && <PictureBrower chooseIndex={chooseIndex} pictureUrls={detailInfo.picture_urls} closeClic={e => setShowPic(false)} />}
    </PicturesWrapper>
  )
})

export default DetailPictures
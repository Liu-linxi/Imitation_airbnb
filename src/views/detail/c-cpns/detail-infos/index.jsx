import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { InfoWrapper } from './style'

const DeatilInfos = memo((props) => {
  const { detailInfo } = props

  return (
    <InfoWrapper>
      <div className='title'>
        <div className='h2'>{detailInfo.name}</div>
        <div>{detailInfo.verify_info.messages.join('·')}</div>
      </div>
    </InfoWrapper>
  )
})

DeatilInfos.propTypes = {
  detailInfo: PropTypes.object
}

export default DeatilInfos
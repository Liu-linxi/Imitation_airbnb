import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
  const { infoData = {} } = props


  return (
    <LongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <div className='longfor_list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item}></LongforItem>
            })
          } 
        </ScrollView>

      </div>
    </LongForWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor
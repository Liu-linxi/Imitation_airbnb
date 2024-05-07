import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'


import { SectionV2Wrapper } from './styles'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  // 从props获取数据
  const { infoData } = props

  /**定义内部数据 */
  /**
   * 这里错误处理父组件使用内容判断对象是否有值进行报错
   * 可以使用useEffect；来修改此报错但是此操作会执行三次调用此组件
   * useEffect(() => {
        setName("XXXX")
      }, [infoData])
   */
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData?.dest_address?.map(item => item.name);

  /** 事件处理函数 */
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <div className='discount'>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
        <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth={3}></SectionRooms>
        <SectionFooter name={name}/>
      </div>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
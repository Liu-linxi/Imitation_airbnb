import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/further/actionCreators'

const FurtherPagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector(state => state.further)
  // 一直报警告因为名字重复使用
  // const { totalCount, currentPage, roomList } = useSelector((state) => ({
  //   totalCount: state.further.totalCount,
  //   currentPage: state.further.currentPage,
  //   roomList: state.further.roomList
  // }))

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20


  const dispatch = useDispatch()
  function pageChangeHandle(event, newPage) {
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(newPage - 1))
  }

  return (
    <PaginationWrapper>
      {
        // roomList.length初始化未0会显示出来因此!!转化为布尔值进行判断显示
        !!roomList.length && (
          <div className='info'>
            {/* 修改样式也可以用类的方式去覆盖内容 */}
            <Pagination onChange={pageChangeHandle} count={totalPage} sx={{
              '& .Mui-selected': {
                backgroundColor: '#222 !important', // 设置选中页码的背景色
                color: 'white !important', // 设置选中页码的文本颜色
              },
            }} />
            <div className='desc'>
              第 {startCount} - {endCount}个房源, 共超过{totalCount}个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default FurtherPagination
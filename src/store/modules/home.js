import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * 按照下文新方法extraReducers: (builder)使用
 */
/* export const fetchHomeDataAction = createAsyncThunk("fetchData", async (payload) => {
  const res = await getHomeGoodPriceData()
  return res
}) */


export const fetchHomeDataAction = createAsyncThunk("fetchData", (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  // 此种方法已经不适用
  /* extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload)
      state.goodPriceInfo = payload
    }
  }, */
  //新方法使用进行响应后赋值
  /* extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  } */
})

export const { changeGoodPriceInfoAction,  changeHighScoreInfoAction,  changeDiscountInfoAction,  changeRecommendInfoAction,  changeLongforInfoAction,  changePlusInfoAction } = homeSlice.actions

export default homeSlice.reducer
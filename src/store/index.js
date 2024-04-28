import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import furtherReducer from "./modules/further"


export default configureStore({
  reducer: {
    home: homeReducer,
    further:furtherReducer
  }
})


import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main"
import homeReducer from './modules/home'
import furtherReducer from "./modules/further"


export default configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    further:furtherReducer
  }
})


import { configureStore } from "@reduxjs/toolkit";
import {bilingoReducer} from '../reducers/reducer.jsx'

let store = configureStore({reducer : {
    bilingoPage : bilingoReducer
  }
});
export default store;
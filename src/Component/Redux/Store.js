import { combineReducers, createStore, applyMiddleware } from "redux"
import logger from 'redux-logger'
import myReducer from "../Reducer/Reducer"


const myCombinedAllReducer= combineReducers({myReducer})

const myStore = createStore(myCombinedAllReducer,applyMiddleware(logger))

export default myStore
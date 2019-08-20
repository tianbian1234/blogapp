import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';
import rootReducer from '../reducer';
import promiseMiddleware from 'redux-promise';

// DevTools专用配置
let reduxDevTools = function () {
    if( typeof window === 'object'
      && typeof window.devToolsExtension !== 'undefined') {
      return window.devToolsExtension()
    } else {
      return f => f
    }
  }
// 用immutable初始化全局状态
let initialState = Immutable.Map()

// 创建store
const store = createStore(
    rootReducer, 
    initialState,
    compose(applyMiddleware(promiseMiddleware),
        reduxDevTools()
    )
)

export default store
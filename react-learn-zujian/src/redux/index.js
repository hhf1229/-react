import {createStore} from 'redux'
import * as actionType from './action/action-type'
/**
 * 
 * @param {*} state 该参数是运行reducer的时候给的数据，在函数运行结束后返回一个操作过后的数据 
 * @param {*} action 该参数是{type:'+'}是如何操作数据的方式，用什么方式操作数据，是减还是加
 */
function reducer(state,action){
  if(action.type === actionType.INCRETE){  /* 在判断中，action的type的值写死了，如果将来要改就会很麻烦，所以要抽离出去 */
    return state + 1
  } else if(action.type === actionType.DECRETE){
    return state - 1
  }
  return state
}
 const store = createStore(reducer,10) /* 该方法创建了一个仓库，该仓库连接着reducer处理器，并且状态为10 */

 const action = {
  type:actionType.INCRETE
 }
 console.log(store.getState()) /* store.getState()方法是得到仓库里的状态 */
 store.dispatch(action)  /* store.dispatch(action) 是向仓库分发一个action操作 */
 console.log(store.getState())
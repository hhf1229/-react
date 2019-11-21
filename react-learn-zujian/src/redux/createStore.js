// 判断一个对象是否为平面对象
// function isPlainObj(obj){
//   if(typeof obj !== 'object')return false;
//   return Object.getPrototypeOf(obj) === Object.prototype
// }

// export default function (reducer,defaultState){
//   let currentReducer = reducer,
//         currentState = defaultState;
//   function dispatch(action){
//     // dispatch函数要求传一个action进去，并且action是一个平面对象，拥有type属性
//       if(!isPlainObj(action)){
//         throw new TypeError('action must be a plain object')
//       }
//       if(action.type === undefined){
//         throw new TypeError('action must has a property of type')
//       }
//      currentState = currentReducer(currentState,action);
//      for (const ls of listeners) {
//       ls()
//      }
//   }
//   function getState(){
//     return currentState
//   }
//   const listeners = [];
//   function subscribe(listener){
//     // 该函数是一个监听器，当dispatch运行之后运行，
//     listener.push(listener);
//     return function(){
//       const index = listeners.indexOf(listener);
//       listeners.splice(index,1)
//     }
//   }
//   return {
//     dispatch,
//     getState,
//     subscribe
//   }
// }


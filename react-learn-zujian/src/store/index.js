import {createStore} from '../redux/index'
import reducer from './reducer/index'
import {addUsersAction} from './action/usersAction'
 const store = createStore(reducer) 
console.log(store.getState())
 store.dispatch(addUsersAction({id:2,name:'abc',age:10}))
 console.log(store.getState())




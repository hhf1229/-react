import {createStore} from 'redux'
import reducer from './reducer/index'
import {addUsersAction} from './action/usersAction'
 const store = createStore(reducer) 

 store.dispatch(addUsersAction({id:2,name:'abc',age:10}))
 console.log(store.getState())




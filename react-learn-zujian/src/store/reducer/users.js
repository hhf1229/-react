import * as userAction from '../action/usersAction';
import uuid from 'uuid'
const initialState = [
  {id:uuid(),name:'用户1',age:10},
  {id:uuid(),name:'用户2',age:12}
]

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case userAction.ADD:
    return [...state,payload]

    case userAction.DELETE:
      return state.filter(it=>it.id !==payload.id)
      case userAction.UPDATE:
          return state.map(it=>it.id === payload.id?{...it,...payload}:it)
  default:
    return state
  }
}





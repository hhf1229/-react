export const ADD = Symbol('add');
export const DELETE = Symbol('delete');
export const UPDATE = Symbol('update');

export function addUsersAction(user){
  return {
    type:ADD,
    payload:user
  }
}
export function deleteUsersAction(id){
  return {
    type:ADD,
    payload:id
  }
}
export function updataUsersAction(id,newUser){
  return {
    type:ADD,
    payload:{
      ...newUser,
      id
    }
  }
}
import users from './users'
export default (state = {}, action) => {
    const newState = {
     users:users(state.users,action)
    }
    return newState
}

import { SET_USERNAME } from '../actions/user.action'

const initialState = {
    userName: null
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, userName: action.userName }
        default:
            return state
    }
}

export default UserReducer

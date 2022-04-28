import { createStore, combineReducers } from 'redux'

//reducers
import UserReducer from './reducers/user.reducer'

const RootReducer = combineReducers({
    user: UserReducer
})

const store  = createStore(RootReducer)

export default store

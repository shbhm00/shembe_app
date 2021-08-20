import { combineReducers } from 'redux'

import { authReducer } from './authReducer'

const appReducer = combineReducers({
    authReducer
})

export default appReducer;
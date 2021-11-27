import authReducer from './auth.reducer'
import dataReducer from './data.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    data: dataReducer,
    auth: authReducer
});

export default rootReducer
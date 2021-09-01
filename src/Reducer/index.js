import {combineReducers} from 'redux'
import RegisterReducer from './RegisterReducer';

const appReducer = combineReducers({
  registerReducer: RegisterReducer,
});

export default rootReducer=(state,action)=>{
    return appReducer(state,action)
}


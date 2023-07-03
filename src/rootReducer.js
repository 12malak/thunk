import { combineReducers } from 'redux';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  data: dataReducer
  // more reducers
});

export default rootReducer;

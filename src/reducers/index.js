import { combineReducers } from 'redux';
import BBCListReducer from './bbc/BBCListReducer';

export default combineReducers({
  BBCList: BBCListReducer,
});

import { Record } from 'immutable';
import {
  LOADING_BBCLIST,
  LOAD_BBCLIST_SUCCESS,
  LOAD_BBCLIST_FAIL,
} from '../../actions/ActionTypes';

const defaultState = Record({
  error: '',
  success: false,
  loading: false,
  BBCList: [],
})

let INITIALIZE_STATE = new defaultState;

export default BBCListReducer = (state = INITIALIZE_STATE, action) => {
  switch (action.type) {
    case LOADING_BBCLIST:
      return state.set('loading', true);
    case LOAD_BBCLIST_SUCCESS:
      return state.set('success', true)
                  .set('loading', false)
                  .set('BBCList', action.payload)
    case LOAD_BBCLIST_FAIL:
      return state.set('error', action.payload.data)
                  .set('loading', false);
    default:
      return state;
  }
}

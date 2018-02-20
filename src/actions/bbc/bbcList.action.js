import axios from 'axios';
import {
  LOADING_BBCLIST,
  LOAD_BBCLIST_SUCCESS,
  LOAD_BBCLIST_FAIL,
} from '../../ActionTypes';

export const getAllBBCNews = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_BBCList });
    axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dcabad7405c043548d2de36b3b598994')
    .then(response => getBBCNewsSuccess(dispatch, response.data))
    .catch(error => getBBCNewsFail(dispatch, error))
  };
}

export const getBBCNewsSuccess = (dispatch, BBCList) => {
  dispatch({ type: LOAD_BBCLIST_SUCCESS, payload: BBCList });
}

export const getBBCNewsFail = (dispatch, error) => {
  dispatch({ type: LOAD_BBCLIST_FAIL, payload: error.status });
}

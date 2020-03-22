import { FETCH_DATA, UPDATE_DATA, SET_ERROR } from '../actions/index';

const initialState = {
  imageData: [],
  isFetchingData: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state,
        imageData: [],
        isFetchingData: true
      };
    case UPDATE_DATA:
      return {
        ...state,
        imageData: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetchingData: false
      };
    default:
      return state; 
  }
};


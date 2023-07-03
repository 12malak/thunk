import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../actions/dataActions';
  
  const initialState = {
    loading: true,
    data: [],
    error: ''
  };
  
  //////// I have more than one action that I want to handle, so I used it swith

  // The state is an object that takes within it data , loading , error


  const dataReducer = (state = initialState, action) => {

    // ...state : Keep the remaining value in state

    switch (action.type) {

      // 1---First, the dataReducer handles the load and converts its value to true
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true
        };


        // false : stopping the data loading process 
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: ''
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  